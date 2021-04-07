import InvoiceDetailHeader from '../components/InvoiceDetailHeader';
import { InvoiceStatusTypeEnum } from '../models/InvoiceStatusTypes';

const invoiceStatus = InvoiceStatusTypeEnum.PAID;

const Story = (props) => <InvoiceDetailHeader {...props} />
  
export const InvoiceStory = Story.bind({})

InvoiceStory.args = {
    invoiceStatus: invoiceStatus
};

export default {
    title: 'InvoiceDetailHeader',
    component: InvoiceDetailHeader,
    argTypes: {
        editClicked: { action: 'edit clicked' },
        deleteClicked: { action: 'delete clicked' },
        markedAsPaidClicked: { action: 'marked as paid clicked' },
        markedAsUnpaidClicked: { action: 'marked as unpaid clicked' }
    }
};
