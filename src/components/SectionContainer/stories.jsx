import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>Section Container</h1>
      </div>
    ),
  },
};

export const Template = (args) => <SectionContainer {...args} />;
