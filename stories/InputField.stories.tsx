import InputField from '../components/InputField';

const label = 'Street Address';
const placeholder = 'Placeholder';
const defaultInput = 'Input';
  
const Story = (props) => <InputField {...props} />
  
export const InputFieldStory = Story.bind({})

InputFieldStory.args = { label, defaultInput, placeholder };

export default {
    title: 'Input Field',
    component: InputField,
    argTypes: { onInputChange: { action: 'Input Change' } }
};
