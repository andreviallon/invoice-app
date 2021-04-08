import InvoiceDetailActions from '../components/InvoiceDetailActions';
import { InvoiceStatusTypeEnum } from '../models/InvoiceStatusTypes';

const invoiceStatus = InvoiceStatusTypeEnum.PENDING;

const Story = (props) => <InvoiceDetailActions {...props} />
  
export const InvoiceDetailActionStory = Story.bind({})


InvoiceDetailActionStory.args = {
    invoiceStatus: invoiceStatus
};

export default {
    title: 'InvoiceDetailActions',
    component: InvoiceDetailActions,
    argTypes: {
        editClicked: { action: 'edit clicked' },
        deleteClicked: { action: 'delete clicked' },
        markedAsPaidClicked: { action: 'marked as paid clicked' },
        markedAsUnpaidClicked: { action: 'marked as unpaid clicked' }
    }
};
