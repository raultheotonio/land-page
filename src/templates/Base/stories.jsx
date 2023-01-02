import { Base } from '.';
import { mockBases } from './mock';

export default {
  title: 'Templates/Base',
  component: Base,
  args: mockBases,
};

export const Template = (args) => <Base {...args} />;
