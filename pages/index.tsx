import { useState, useEffect } from 'react';
import InvoiceCard from 'components/InvoiceCard';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';
import Layout from '../components/Layout';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from 'components/ErrorMessage';

const Home = () => {
  const { data, error } = useSWR('/api/invoices', fetcher);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const isDoneLoading = !!data || !!error;
    setLoading(!isDoneLoading);
  }, [data, error]);

  const handleCardClicked = (id: string) => {
    console.log('handleCardClicked', id);
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-h1 font-bold dark:text-white">Invoices</h1>
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
