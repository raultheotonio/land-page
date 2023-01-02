import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import renderTheme from '../../utils/RenderTheme';

describe('<LogoLink />', () => {
  it('should render', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />);

    expect(screen.getByRole('link', { name: 'Olá mundo' })).toBeInTheDocument();
  });

  it('should render link with src', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />);

    expect(screen.getByRole('link', { name: 'Olá mundo' })).toHaveAttribute('href', '#target');
  });
});
