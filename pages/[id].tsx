import { useState } from 'react';
import GoBack from "components/GoBack";
import { InvoiceType } from "models/InvoiceTypes";
import { ObjectId } from "mongodb";
import connectToDatabase from "utils/connectToDatabase";
import InvoiceDetailHeader from 'components/InvoiceDetailHeader';
import InvoiceDetail from 'components/InvoiceDetail';
import InvoiceFormOverlay from 'components/InvoiceFormOverlay';
import axios from 'axios';
import { InvoiceStatusTypeEnum } from 'models/InvoiceStatusTypes';
import DeleteInvoiceDialog from 'components/DeleteInvoiceDialog';
import { toast, ToastContainer } from 'react-toastify';
import Router from 'next/router';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
    invoiceFromAPI: InvoiceType;
    showDeleteModal: boolean;
}

const invoice: React.FC<Props> = ({ invoiceFromAPI }) => {
    const [invoice, setInvoice] = useState(invoiceFromAPI)
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const notifyMarkAsMarkedAsPaid = () => toast.success("Invoice marked as paid");
    const notifyMarkAsMarkedAsUnpaid = () => toast.success("Invoice marked as unpaid");
    const notifyDelete = () => toast.success("Invoice Delete, Redirecting to front page");
    const notifyError = (err: string) => toast.error(err);

    const deleteClicked = () => {
        setShowDeleteModal(true);
    }

    const markedAsPaidClicked = async () => {
        try {
            const newInvoice = { ...invoice, status: InvoiceStatusTypeEnum.PAID };
            const config = {headers: { 'Content-Type': 'application/json' }};
            const res = await axios.put(`/api/invoices/${newInvoice._id}`, newInvoice, config);

            setInvoice(res.data.data);
            notifyMarkAsMarkedAsPaid();
        } catch (err) {
            notifyError(err);
        }
    }

    const markedAsUnpaidClicked = async () => {
        try {
            const newInvoice = { ...invoice, status: InvoiceStatusTypeEnum.PENDING };
            const config = {headers: { 'Content-Type': 'application/json' }};
            const res = await axios.put(`/api/invoices/${newInvoice._id}`, newInvoice, config);

            setInvoice(res.data.data);
            notifyMarkAsMarkedAsUnpaid();
        } catch (err) {
            notifyError(err);
        }
    }

    const deleteInvoice = async () => {
        try {
            await axios.delete(`/api/invoices/${invoice._id}`, { params: { id: invoice._id } });
            notifyDelete();
            Router.push('/');
        } catch (err) {
            notifyError(err);
        }
    }

    return (
        <>
            {<DeleteInvoiceDialog showDeleteModal={showDeleteModal} setShowDeleteModal={() => setShowDeleteModal(false)} deleteInvoice={() => {deleteInvoice()}} />}
            {<InvoiceFormOverlay invoice={invoice} showModal={showModal} setShowModal={(showModal) => setShowModal(showModal)} handleNewInvoice={(newInvoice) => setInvoice(newInvoice)} />}
            <div className="flex flex-col">
                <div className="mb-6">
                    <GoBack />
                </div>
                <div className="mb-6">
                    <InvoiceDetailHeader
                        invoiceStatus={invoice.status}
                        editClicked={() => setShowModal(true)}
                        deleteClicked={() => deleteClicked()}
                        markedAsPaidClicked={() => markedAsPaidClicked()}
                        markedAsUnpaidClicked={() => markedAsUnpaidClicked()} />
                </div>
                <InvoiceDetail invoice={invoice} />
                <ToastContainer />
            </div> 
        </>
    )
}

export default invoice

export async function getServerSideProps({ params, res }) {
    const { db } = await connectToDatabase();
    const invoice = await db.collection("invoices").findOne({ "_id": new ObjectId(params.id) });

    return {
        props: {
            invoiceFromAPI: JSON.parse(JSON.stringify(invoice))
        }
    };
  }
