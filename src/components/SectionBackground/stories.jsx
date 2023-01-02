import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: <p>Olá mundo</p>,
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => <SectionBackground {...args} />;
