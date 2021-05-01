import React, { useState } from 'react';
import InvoiceCard from 'components/InvoiceCard';
import ButtonIcon from '../components/ButtonIcon';
import ErrorMessage from '../components/ErrorMessage';
import connectToDatabase from 'utils/connectToDatabase';
import { ButtonIconTypeEnum } from 'models/ButtonTypes';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { InvoiceType } from 'models/InvoiceTypes';
import InvoiceForm from 'components/InvoiceForm';

interface Props {
  invoices: InvoiceType[];
}

const Home: React.FC<Props> = ({ invoices }) => {
  const [showModal, setShowModal] = useState(false)

  const numberOfInvoices = (numOfInvoices: number): string => {
    if (numOfInvoices === 0) {
      return 'No invoices';
    } else if (numOfInvoices === 1) {
      return 'There is 1 invoice';
    } else {
      return `There are ${numOfInvoices} invoices`;
    }
  };

  const handleInvoice = (invoice: InvoiceType): void => {
    console.log('submitted invoice', invoice);
  };

  const modalBackground = (): string => {
    let classes = 'bg-primary-dark bg-opacity-0 absolute right-0 left-0 top-0 bottom-0 z-10';
    
    if (showModal) classes = `${classes} bg-opacity-50`;

    return classes;
  }

  const invoiceFormContainerClasses = (): string => {
    let classes = 'bg-white dark:bg-black z-20 p-12 absolute h-screen overflow-auto rounded-r-2xl invoice-form-container';
    
    if (showModal === true) classes = `${classes} showModal`;
    
    return classes;
  }

  const visibility = () => showModal ? 'visible' : 'invisible';

  return (
    <>
      <div className={visibility()}>
        <div className="modal-window-container">
          <div className={modalBackground()} onClick={() => setShowModal(false)}></div>
          <div className={invoiceFormContainerClasses()}>
            <InvoiceForm submitInvoice={(invoice: InvoiceType) => handleInvoice(invoice)} closeModal={() => setShowModal(false)} />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-h1 font-bold dark:text-white">Invoices</h1>
          <p className="dark:text-white text-sm mt-2">{numberOfInvoices(invoices.length)}</p>
        </div>
        <div>
          <ButtonIcon text="New Invoice" buttonType={ButtonIconTypeEnum.PRIMARY} icon={faPlus} buttonClick={() => setShowModal(true)} />
        </div>
      </div>

      {invoices.map(invoice => (
        <InvoiceCard key={invoice._id} invoice={invoice} />
      ))}

      {!invoices && <ErrorMessage />}
    </>
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
