import { screen } from '@testing-library/react';
import { GoTop } from '.';
import renderTheme from '../../utils/RenderTheme';

describe('<GoTop />', () => {
  it('should render', () => {
    renderTheme(<GoTop />);

    expect(screen.getByRole('link', { name: 'Go to top' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Go to top' })).toHaveAttribute('href', '#');

    expect(screen.getByRole('link', { name: 'Go to top' })).toMatchSnapshot();
  });
});
