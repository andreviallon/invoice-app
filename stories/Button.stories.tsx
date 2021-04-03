import Button from '../components/Button';
import { ButtonTypeEnum } from '../models/ButtonTypes';

const text = 'New Invoice';
const buttonType = ButtonTypeEnum.PRIMARY;
  
const Story = (props) => <Button {...props} />
  
export const ButtonStory = Story.bind({})

ButtonStory.args = {
    text: text,
    buttonType: buttonType
};

export default {
    title: 'Button',
    component: Button,
    argTypes: { buttonClick: { action: 'clicked' } }
};
  