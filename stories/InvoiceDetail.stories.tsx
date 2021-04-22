import { InvoiceStatusTypeEnum } from '../models/InvoiceStatusTypes';
import { InvoiceType, PaymentTermsEnum } from '../models/InvoiceTypes';
import InvoiceDetail from '../components/InvoiceDetail';

const invoice: InvoiceType = {
    _id: '1',
    invoiceDate: new Date(),
    paymentTerms: PaymentTermsEnum.NEXT_MONTH,
    address: {
        street: '19 Union Terrace',
        city: 'London',
        zipcode: 'E1 3EZ',
        country: 'United Kingdom'
    },
    client: {
        name: 'Alex Grim',
        email: 'alexgrim@mail.com',
        address: {
            street: '84 Church Way',
            city: 'London',
            zipcode: 'BD1 9PB',
            country: 'United Kingdom'
        }  
    },
    status: InvoiceStatusTypeEnum.PAID,
    projectDescription: 'Graphic Design',
    itemList: [
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
};
  
const Story = (props) => <InvoiceDetail {...props} />
  
export const InvoiceDetailStory = Story.bind({})

InvoiceDetailStory.args = {
    invoice: invoice
};

export default {
    title: 'InvoiceDetail',
    component: InvoiceDetail
};
