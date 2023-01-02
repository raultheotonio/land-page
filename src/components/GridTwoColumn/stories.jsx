import { GridTwoColumn } from '.';
import mock from './mock';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: mock,
};

export const Template = (args) => <GridTwoColumn {...args} />;
