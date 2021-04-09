import NoInvoice from '../components/NoInvoice';

const Story = (props) => <NoInvoice {...props} />
  
export const NoInvoiceStory = Story.bind({})

export default {
    title: 'NoInvoice',
    component: NoInvoice
};
