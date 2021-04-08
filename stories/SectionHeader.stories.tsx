import SectionHeader from '../components/SectionHeader';

const text = 'Bill Form';
  
const Story = (props) => <SectionHeader {...props} />
  
export const SectionHeaderStory = Story.bind({})

SectionHeaderStory.args = {
    text: text
};

export default {
    title: 'SectionHeader',
    component: SectionHeader
};
  