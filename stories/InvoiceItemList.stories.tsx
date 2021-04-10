import InvoiceItemList from '../components/InvoiceItemList';
import { Item } from '../models/InvoiceTypes';

const itemList: Item[] = [
    {
        name: 'Banner Design',
        quantity: 1,
        price: 156.00,
        total: 156.00
    },
    {
        name: 'Email Design',
        quantity: 2,
        price: 200.00,
        total: 400.00
    }
]
  
const Story = (props) => <InvoiceItemList {...props} />
  
export const InvoiceItemListStory = Story.bind({})

InvoiceItemListStory.args = {
    itemList: itemList
};

export default {
    title: 'InvoiceItemList',
    component: InvoiceItemList
};
  