import { screen } from '@testing-library/react';
import { Footer } from '.';
import renderTheme from '../../utils/RenderTheme';

describe('<Footer />', () => {
  it('should render', () => {
    renderTheme(<Footer html="<h1>Olá</h1>" />);

    expect(screen.getByRole('heading', { name: 'Olá' })).toMatchSnapshot();
  });
  it('should render a snapShot', () => {
    const { container } = renderTheme(<Footer html="<h1>Olá</h1>" />);

    expect(container).toMatchSnapshot();
  });
});
