import ButtonIcon from './ButtonIcon'
import { ButtonIconTypeEnum } from '../models/ButtonTypes'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const text = 'New Invoice';
const buttonType = ButtonIconTypeEnum.PRIMARY;
const icon = faPlus;
  
const Story = (props) => <ButtonIcon {...props} />
  
export const ButtonIconStory = Story.bind({})

ButtonIconStory.args = { text, buttonType, icon };

export default {
    title: 'Button',
    component: ButtonIcon,
    argTypes: { buttonClick: { action: 'clicked' } },
};
