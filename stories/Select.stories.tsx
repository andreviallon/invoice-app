import Select from "../components/Select";

const label: string = 'Payment Terms';
const selectOptions: string[] = ['option 1', 'option 2', 'option 3'];
  
const Story = (props) => <Select {...props} />
  
export const SelectStory = Story.bind({})

SelectStory.args = { label, selectOptions };

export default {
    title: 'Select',
    component: Select,
    argTypes: { onSelectChange: { action: 'Select Change' } },
};
