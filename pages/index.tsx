import InvoiceCard from 'components/InvoiceCard';
import Layout from '../components/Layout';
import ButtonIcon from '../components/ButtonIcon';
import ErrorMessage from '../components/ErrorMessage';
import connectToDatabase from 'utils/connectToDatabase';
import { ButtonIconTypeEnum } from 'models/ButtonTypes';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Home = ({ invoices }) => {
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
          <p className="dark:text-white text-sm mt-2">{numberOfInvoices(invoices.length)}</p>
        </div>
        <div>
          <ButtonIcon text="New Invoice" buttonType={ButtonIconTypeEnum.PRIMARY} icon={faPlus} buttonClick={() => handleNewInvoiceClick()}/>
        </div>
      </div>

      {invoices.map(invoice => (
        <InvoiceCard key={invoice._id} invoice={invoice} cardClicked={() => handleCardClicked(invoice._id)} />
      ))}

      {!invoices && <ErrorMessage />}
    </Layout>
  )
}

export default Home

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const invoices = await db.collection("invoices").find({}).toArray();
  
  return {
    props: {
      invoices: JSON.parse(JSON.stringify(invoices))
    }
  };
}