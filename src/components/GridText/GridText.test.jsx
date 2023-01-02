import { GridText } from '.';
import renderTheme from '../../utils/RenderTheme';
import mock from './mock';

describe('<GridText />', () => {
  it('should render', () => {
    const { container } = renderTheme(<GridText {...mock} />);

    expect(container).toMatchSnapshot();
  });
});
