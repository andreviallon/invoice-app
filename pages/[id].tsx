import React, { useState } from 'react';
import GoBack from "components/GoBack";
import { InvoiceType } from "models/InvoiceTypes";
import { ObjectId } from "mongodb";
import connectToDatabase from "utils/connectToDatabase";
import InvoiceDetailHeader from 'components/InvoiceDetailHeader';
import InvoiceDetail from 'components/InvoiceDetail';
import InvoiceFormOverlay from 'components/InvoiceFormOverlay';

interface Props {
    invoice: InvoiceType;
}

const invoice: React.FC<Props> = ({ invoice }) => {
    const [showModal, setShowModal] = useState(false);

    const deleteClicked = () => {
        console.log('deleteClicked');
    }

    const markedAsPaidClicked = () => {
        console.log('markedAsPaidClicked');
    }

    const markedAsUnpaidClicked = () => {
        console.log('markedAsUnpaidClicked');
    }

    return (
        <>
            {<InvoiceFormOverlay invoice={invoice} showModal={showModal} setShowModal={(showModal) => setShowModal(showModal)} />}
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
            invoice: JSON.parse(JSON.stringify(invoice))
        }
    };
  }
  