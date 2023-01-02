import { Menu } from '.';
import links from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links,
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImg: '',
    },
  },
  argsType: {
    links: { type: '' },
  },
};

export const Template = (args) => <Menu {...args} />;
