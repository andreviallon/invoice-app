import InputDatePicker from '../components/InputDatePicker';

const label: string = 'Issue Date';
const selectedDate: Date = new Date();
  
const Story = (props) => <InputDatePicker {...props} />
  
export const InputDatePickerStory = Story.bind({})

InputDatePickerStory.args = { label, selectedDate };

export default {
    title: 'InputDatePicker',
    component: InputDatePicker,
    argTypes: { onDateChange: { action: 'Date Change' } }
};
