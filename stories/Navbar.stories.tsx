import Navbar from '../components/Navbar';
import { ThemeEnum } from '../models/Theme';

const Story = (props) => <Navbar {...props} />

export const NavbarStory = Story.bind({})

NavbarStory.args = {
    theme: ThemeEnum.LIGHT
};

export default {
    title: 'Navbar',
    component: Navbar
};
