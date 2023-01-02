import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Um texto qualquer`,
  },
  argTypes: {
    children: {
      type: 'string',
    },
  },
};

export const Template = (args) => <TextComponent {...args} />;
