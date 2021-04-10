import { PaymentTermsEnum } from '../models/InvoiceTypes';
import PaymentDue from '../components/PaymentDue';

const invoiceDate = new Date();
const paymentTerms = PaymentTermsEnum.NEXT_MONTH;
  
const Story = (props) => <PaymentDue {...props} />
  
export const PaymentDueStory = Story.bind({})

PaymentDueStory.args = { invoiceDate, paymentTerms };

export default {
    title: 'PaymentDue',
    component: PaymentDue
};
