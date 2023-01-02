import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Raul Theotonio',
    colorDark: true,
  },
  argTypes: {
    children: {
      type: 'string',
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

export const Dark = (args) => <Heading {...args} />;

Dark.args = {
  colorDark: false,
};
