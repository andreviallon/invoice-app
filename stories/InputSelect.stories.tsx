import InputSelect from '../components/InputSelect';

const label: string = 'Payment Terms';
const selectOptions: string[] = ['option 1', 'option 2', 'option 3'];
  
const Story = (props) => <InputSelect {...props} />
  
export const InputSelectStory = Story.bind({})

InputSelectStory.args = { label, selectOptions };

export default {
    title: 'InputSelect',
    component: InputSelect,
    argTypes: { onSelectChange: { action: 'Input Select Change' } }
};
