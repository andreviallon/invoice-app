import InputField from '../components/InputField'

const label = 'Street Address';
const placeholder = 'Placeholder';
  
const Story = (props) => <InputField {...props} />
  
export const InputFieldStory = Story.bind({})

InputFieldStory.args = { label, placeholder };

export default {
    title: 'Input Field',
    component: InputField,
    argTypes: { onInputChange: { action: 'Input Change' } },
};
