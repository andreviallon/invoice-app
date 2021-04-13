import { Item } from "../models/InvoiceTypes";

const totalPrice = (items: Item[]): string => {
    let totalPrice;

    for (let item of items) {
        totalPrice = totalPrice ? totalPrice + item.quantity * item.price : item.quantity * item.price;
    }

    return totalPrice.toString();
}

export default totalPrice