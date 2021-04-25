import { InvoiceType } from '../models/InvoiceTypes';
import Moment from 'react-moment';
import React from 'react';
import PaymentDue from './PaymentDue';
import InvoiceItemList from '../components/InvoiceItemList';

interface Props {
    invoice: InvoiceType
}

const InvoiceDetail: React.FC<Props> = ({ invoice }) => {
    return (
        <div className="bg-white dark:bg-primary-dark p-6 sm:p-16 shadow-lg rounded-lg">
            <div className="flex justify-between mb-8">
                <div className="flex flex-col">
                    <p className="font-bold mb-2 dark:text-white">{invoice.projectDescription}</p>
                </div>
                <div className="flex flex-col">
                    <p className="font-medium text-sm text-secondary-dark dark:text-secondary-light text-right mb-1">{invoice.address.street}</p>
                    <p className="font-medium text-sm text-secondary-dark dark:text-secondary-light text-right mb-1">{invoice.address.city}</p>
                    <p className="font-medium text-sm text-secondary-dark dark:text-secondary-light text-right mb-1">{invoice.address.zipcode}</p>
                    <p className="font-medium text-sm text-secondary-dark dark:text-secondary-light text-right mb-1">{invoice.address.country}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
                <div className="flex flex-col">
                    <div className="mb-8">
                        <p className="text-secondary-dark text-sm font-medium mb-3">Invoice Date</p>
                        <p className="font-bold dark:text-white">
                            <Moment format="DD MMM YYYY" date={invoice.invoiceDate} />
                        </p>
                    </div>
                    <div>
                        <p className="text-secondary-dark text-sm font-medium mb-3">Payment Due</p>
                        <p className="font-bold dark:text-white">
                            <PaymentDue invoiceDate={invoice.invoiceDate} paymentTerms={invoice.paymentTerms} />
                        </p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-secondary-dark text-sm font-medium mb-3">Bill To</p>
                    <p className="font-bold text mb-2 dark:text-white">{invoice.client.name}</p>
                    <p className="font-medium text-sm text-secondary-dark mb-1">{invoice.client.address.street}</p>
                    <p className="font-medium text-sm text-secondary-dark mb-1">{invoice.client.address.city}</p>
                    <p className="font-medium text-sm text-secondary-dark mb-1">{invoice.client.address.zipcode}</p>
                    <p className="font-medium text-sm text-secondary-dark mb-1">{invoice.client.address.country}</p>
                </div>
                <div className="flex flex-col col-span-2">
                    <p className="text-secondary-dark text-sm font-medium mb-3">Sent to</p>
                    <p className="font-bold text mb-2 dark:text-white">{invoice.client.email}</p>
                </div>
            </div>
            <InvoiceItemList itemList={invoice.itemList} />
        </div>
    )
}

export default InvoiceDetail