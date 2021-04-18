import React from 'react';
import GoBack from "components/GoBack";
import { InvoiceType } from "models/InvoiceTypes";
import { ObjectId } from "mongodb";
import connectToDatabase from "utils/connectToDatabase";
import InvoiceDetailHeader from 'components/InvoiceDetailHeader';
import InvoiceDetail from 'components/InvoiceDetail';

interface Props {
    invoice: InvoiceType;
}

const invoice: React.FC<Props> = ({ invoice }) => {
    const editClicked = () => {
        console.log('editClicked');
    }

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
        <div className="flex flex-col">
            <div className="mb-6">
                <GoBack />
            </div>
            <div className="mb-6">
                <InvoiceDetailHeader
                    invoiceStatus={invoice.status}
                    editClicked={() => editClicked()}
                    deleteClicked={() => deleteClicked()}
                    markedAsPaidClicked={() => markedAsPaidClicked()}
                    markedAsUnpaidClicked={() => markedAsUnpaidClicked()} />
            </div>
            <InvoiceDetail invoice={invoice} />
        </div>
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
  