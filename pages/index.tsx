import { useState, useEffect } from 'react';
import InvoiceCard from 'components/InvoiceCard';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';
import Layout from '../components/Layout';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from 'components/ErrorMessage';
import ButtonIcon from '../components/ButtonIcon';
import { ButtonIconTypeEnum } from 'models/ButtonTypes';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const {data, error} = useSWR('/api/invoices', fetcher);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const isDoneLoading = !!data || !!error;
    setLoading(!isDoneLoading);
  }, [data, error]);

  const numberOfInvoices = (numOfInvoices: number): string => {
    if (numOfInvoices === 0) {
      return 'No invoices';
    } else if (numOfInvoices === 1) {
      return 'There is 1 invoice';
    } else {
      return `There are ${numOfInvoices} invoices`
    }
  }

  const handleNewInvoiceClick = () => {
    console.log('handleNewInvoiceClick');
  }

  const handleCardClicked = (id: string) => {
    console.log('handleCardClicked', id);
  };


  return (
    <Layout>
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-h1 font-bold dark:text-white">Invoices</h1>
          {data && numberOfInvoices(data.data.length)}
        </div>
        <div>
          <ButtonIcon text="New Invoice" buttonType={ButtonIconTypeEnum.PRIMARY} icon={faPlus} buttonClick={() => handleNewInvoiceClick()}/>
        </div>
      </div>

      {error && <ErrorMessage />}

      {loading && (
        <div className="flex justify-center w-full">
          <LoadingSpinner/>
        </div>
      )}

      {data && data.data.map(invoice => (
        <InvoiceCard key={invoice._id} invoice={invoice} cardClicked={() => handleCardClicked(invoice._id)} />
      ))}
    </Layout>
  )
}

export default Home
