import { GridContent } from '.';
import renderTheme from '../../utils/RenderTheme';
import mock from './mock';

describe('<GridContent />', () => {
  it('should render', () => {
    const { container } = renderTheme(<GridContent {...mock} />);

    expect(container).toMatchSnapshot();
  });
});
