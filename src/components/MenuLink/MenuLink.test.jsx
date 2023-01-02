import { screen } from '@testing-library/react';
import { MenuLink } from '.';
import renderTheme from '../../utils/RenderTheme';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab={false}>
        children
      </MenuLink>
    );

    const link = screen.getByRole('link', { name: 'children' });

    expect(link).toBeInTheDocument();
  });

  it('should render a link with a target _self', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab={false}>
        children
      </MenuLink>
    );

    const link = screen.getByRole('link', { name: 'children' });

    expect(link).toHaveAttribute('target', '_self');
  });

  it('should render a link with a target _blank', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab>
        children
      </MenuLink>
    );

    const link = screen.getByRole('link', { name: 'children' });

    expect(link).toHaveAttribute('target', '_blank');
  });

  it('should render snapShot', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab>
        children
      </MenuLink>
    );

    const link = screen.getByRole('link', { name: 'children' });

    expect(link).toMatchSnapshot();
  });
});
