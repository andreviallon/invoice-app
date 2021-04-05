import { Item } from "../models/InvoiceTypes";

export const totalPrice = (items: Item[]): string => {
    let totalPrice;

    for (let item of items) {
        totalPrice =+ item.total;
    }

    return totalPrice.toString();
}

export const convertDate = (date: Date): string => {
    return '19 Aug 2021';
};