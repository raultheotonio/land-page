import { Base } from '.';
import renderTheme from '../../utils/RenderTheme';
import { mockBases } from './mock';

describe('<Base />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Base {...mockBases} />);

    expect(container).toMatchSnapshot();
  });
});
