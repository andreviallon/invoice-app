import Narbar from '../components/Narbar';
import { ThemeEnum } from '../models/Theme';

const Story = (props) => <Narbar {...props} />

export const NarbarStory = Story.bind({})

NarbarStory.args = {
    theme: ThemeEnum.LIGHT
};

export default {
    title: 'Narbar',
    component: Narbar
};
