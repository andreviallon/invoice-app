import React from 'react';
import { Item } from '../models/InvoiceTypes';
import totalPrice from '../utils/totalPrice';

interface Props {
    itemList: Item[];
}

const InvoiceItemList: React.FC<Props> = ({ itemList }) => {
    
    return (
        <div className="bg-primary-veryLight rounded-lg">
            <div className="px-12 py-8 hidden sm:grid grid-cols-5 gap-4">
                <p className="col-span-2 text-xs text-secondary-dark font-medium">Item Name</p>
                <p className="text-right text-xs text-secondary-dark font-medium">QTY.</p>
                <p className="text-right text-xs text-secondary-dark font-medium">Price</p>
                <p className="text-right text-xs text-secondary-dark font-medium">Total</p>
                {itemList.map(item => (
                    <React.Fragment key={item.name}>
                        <p className="col-span-2 font-bold text-sm text-secondary-veryDark">{item.name}</p>
                        <p className="text-right font-bold text-sm text-secondary-dark">{item.quantity}</p>
                        <p className="text-right font-bold text-sm text-secondary-dark">${item.price}</p>
                        <p className="text-right font-bold text-sm text-secondary-veryDark">${item.total}</p>
                    </React.Fragment>
                ))}
            </div>
            <div className="px-12 pt-8 pb-4 flex flex-col sm:hidden">
                {itemList.map(item => (
                    <div className="flex justify-between items-center mb-4" key={item.name}>
                        <div className="flex flex-col">
                            <p className="font-bold text-sm text-secondary-veryDark mb-1">{item.name}</p>
                            <p className="font-bold text-sm text-secondary-dark">{item.quantity} x ${item.price}</p>
                        </div>
                        <p className="text-right font-bold text-secondary-veryDark">${item.total}</p>
                    </div>
                ))}
            </div>
            <div className="bg-gray px-12 py-8 flex justify-between items-center rounded-b-lg">
                <p className="text-white text-xs font-bold">Amount Due</p>
                <p className="text-white text-h2 font-bold">${totalPrice(itemList)}</p>
            </div>
        </div>
    )
}

export default InvoiceItemList