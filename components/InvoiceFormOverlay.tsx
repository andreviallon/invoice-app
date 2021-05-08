import { InvoiceType } from 'models/InvoiceTypes';
import { useEffect } from 'react';
import InvoiceForm from './InvoiceForm';

interface Props {
    invoice?: InvoiceType;
    showModal?: boolean;
    handleNewInvoice?: (invoice: InvoiceType) => void;
    setShowModal?: (showModal: boolean) => void;
}

const InvoiceFormOverlay: React.FC<Props> = ({ invoice, showModal, handleNewInvoice, setShowModal }) => {
	useEffect(() => {
		showModal ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll');
	}, [showModal]);

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
        <div className={visibility()}>
        <div className="modal-window-container">
          <div className={modalBackground()} onClick={() => setShowModal(false)}></div>
          <div className={invoiceFormContainerClasses()}>
            <InvoiceForm invoice={invoice} handleNewInvoice={(newInvoice) => handleNewInvoice(newInvoice)} closeModal={() => setShowModal(false)} />
          </div>
        </div>
      </div>
    )
}

export default InvoiceFormOverlay
