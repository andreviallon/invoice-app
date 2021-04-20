import GoBack from 'components/GoBack';
import InvoiceForm from 'components/InvoiceForm'
import { InvoiceType } from 'models/InvoiceTypes';
import React from 'react';

const newInvoice = () => {
    const handleSubmit = (invoice: InvoiceType) => {
        console.log('new invoice', invoice);
    };

    return (
        <>
            <div className="mb-6">
                <GoBack />
            </div>
            <h1 className="text-h1 font-bold mb-8">New Invoice</h1>
            <div className="mt-6">
                <InvoiceForm  submitInvoice={(invoice) => handleSubmit(invoice)} />
            </div>
        </>
    )
}

export default newInvoice
