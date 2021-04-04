import InvoiceStatus from '../components/InvoiceStatus';
import { InvoiceStatusTypeEnum } from '../models/InvoiceStatusTypes';

const invoiceStatus = InvoiceStatusTypeEnum.PAID;
  
const Story = (props) => <InvoiceStatus {...props} />
  
export const InvoiceStatusStory = Story.bind({})

InvoiceStatusStory.args = {
    invoiceStatus: invoiceStatus
};

export default {
    title: 'InvoiceStatus',
    component: InvoiceStatus
};
