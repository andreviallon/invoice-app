import { InvoiceStatusTypeEnum } from './InvoiceStatusTypes';

export enum PaymentTermsEnum {
    NEXT_DAY = 'Next day',
    NEXT_WEEK = 'Next 7 days',
    NEXT_TWO_WEEKS = 'Next 14 days',
    NEXT_MONTH = 'Next 30 days'
}

export type Address = {
    street?: string;
    city?: string;
    zipcode?: string;
    country?: string;
}

export type Client = {
    name?: string;
    email?: string;
    address?: Address;
}

export type Item = {
    name?: string;
    quantity?: number;
    price?: number;
    total?: number;
}

export type InvoiceType = {
    _id?: string;
    invoiceDate?: string;
    paymentTerms?: PaymentTermsEnum;
    address?: Address;
    client?: Client;
    status?: InvoiceStatusTypeEnum;
    projectDescription?: string;
    itemList?: Item[]
}

export const paymentTermsOptions: PaymentTermsEnum[] = [
    PaymentTermsEnum.NEXT_DAY,
    PaymentTermsEnum.NEXT_WEEK,
    PaymentTermsEnum.NEXT_TWO_WEEKS,
    PaymentTermsEnum.NEXT_MONTH
];