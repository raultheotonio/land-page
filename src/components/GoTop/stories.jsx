import { GoTop } from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {},
};

export const Template = (args) => (
  <div
    style={{
      height: '400vh',
    }}
  >
    <GoTop {...args} />
  </div>
);
