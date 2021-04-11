import { InvoiceStatusTypeEnum } from './InvoiceStatusTypes';

export enum PaymentTermsEnum {
    NEXT_DAY = 'next day',
    NEXT_WEEK = 'next 7 days',
    NEXT_TWO_WEEKS = 'next 14 days',
    NEXT_MONTH = 'next 30 days'
}

export type Address = {
    street: string;
    city: string;
    zipcode: string;
    country: string;
}

export type Client = {
    name: string;
    email: string;
    address: Address;
}

export type Item = {
    name: string;
    quantity: number;
    price: number;
    total: number;
}

export type InvoiceType = {
    _id: string;
    index: string;
    invoiceDate: Date;
    paymentTerms: PaymentTermsEnum;
    address: Address;
    client: Client;
    status: InvoiceStatusTypeEnum;
    projectDescription: string;
    itemList: Item[]
}