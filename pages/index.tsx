import { useState } from 'react';
import InvoiceCard from 'components/InvoiceCard';
import ButtonIcon from '../components/ButtonIcon';
import ErrorMessage from '../components/ErrorMessage';
import connectToDatabase from 'utils/connectToDatabase';
import { ButtonIconTypeEnum } from 'models/ButtonTypes';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { InvoiceType } from 'models/InvoiceTypes';
import NoInvoice from 'components/NoInvoice';
import InvoiceFormOverlay from 'components/InvoiceFormOverlay';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  invoicesFromAPI: InvoiceType[];
}

const Home: React.FC<Props> = ({ invoicesFromAPI }) => {
  const [showModal, setShowModal] = useState(false);
  const [invoices, setInvoices] = useState(invoicesFromAPI);

  const notifyCreatedInvoice = () => toast.success("Invoice created");

  const numberOfInvoices = (numOfInvoices: number): string => {
    if (numOfInvoices === 0) {
      return 'No invoices';
    } else if (numOfInvoices === 1) {
      return 'There is 1 invoice';
    } else {
      return `There are ${numOfInvoices} invoices`;
    }
  };

  const handleNewInvoice = (newInvoice: InvoiceType) => {
    setInvoices([newInvoice, ...invoices])
    notifyCreatedInvoice();
  };

  return (
    <>
      <ToastContainer />
      {<InvoiceFormOverlay showModal={showModal} setShowModal={(showModal) => setShowModal(showModal)} handleNewInvoice={(newInvoice) => handleNewInvoice(newInvoice)} />}

      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-h1 font-bold dark:text-white">Invoices</h1>
          <p className="dark:text-white text-sm mt-2">{numberOfInvoices(invoices?.length)}</p>
        </div>
        <div>
          <ButtonIcon text="New Invoice" buttonType={ButtonIconTypeEnum.PRIMARY} icon={faPlus} buttonClick={() => setShowModal(true)} />
        </div>
      </div>

      {invoices.map((invoice, index) => (
        <div key={invoice._id ? invoice._id : index} className="mb-4">
          <InvoiceCard invoice={invoice} />
        </div>
      ))}

      {!invoices && <ErrorMessage />}

      {!invoices.length && (
        <div className="mt-32">
          <NoInvoice />
        </div>
      )}
    </>
  )
}

export default Home

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const invoices = await db.collection("invoices").find({}).toArray();
  
  return {
    props: {
      invoicesFromAPI: JSON.parse(JSON.stringify(invoices))
    }
  };
}
