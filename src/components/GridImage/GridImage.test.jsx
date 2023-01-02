import { GridImage } from '.';
import renderTheme from '../../utils/RenderTheme';
import mock from './mock';

describe('<GridImage />', () => {
  it('should render', () => {
    const { container } = renderTheme(<GridImage {...mock} />);

    expect(container).toMatchSnapshot();
  });
});
