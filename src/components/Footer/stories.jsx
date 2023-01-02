import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: `<p>Footer</p>`,
  },
};

export const Template = (args) => <Footer {...args} />;
