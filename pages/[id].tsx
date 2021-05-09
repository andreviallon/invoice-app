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

interface Props {
    invoiceFromAPI: InvoiceType;
}

const invoice: React.FC<Props> = ({ invoiceFromAPI }) => {
    const [invoice, setInvoice] = useState(invoiceFromAPI)
    const [showModal, setShowModal] = useState(false);

    const deleteClicked = () => {
        console.log('deleteClicked');
    }

    const markedAsPaidClicked = async () => {
        try {
            const newInvoice = { ...invoice, status: InvoiceStatusTypeEnum.PAID };
            const config = {headers: { 'Content-Type': 'application/json' }};
            const res = await axios.put(`/api/invoices/${newInvoice._id}`, newInvoice, config);

            setInvoice(res.data.data);
        } catch (error) {
            console.error('Something went wrong...', error);
        }
    }

    const markedAsUnpaidClicked = async () => {
        try {
            const newInvoice = { ...invoice, status: InvoiceStatusTypeEnum.PENDING };
            const config = {headers: { 'Content-Type': 'application/json' }};
            const res = await axios.put(`/api/invoices/${newInvoice._id}`, newInvoice, config);

            setInvoice(res.data.data);
        } catch (error) {
            console.error('Something went wrong...', error);
        }
    }

    return (
        <>
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
  