import { NavLinks } from '.';
import links from './mock';

export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    links,
  },
  argsType: {
    links: { type: '' },
  },
};

export const Template = (args) => <NavLinks {...args} />;
