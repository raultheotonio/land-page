import { fireEvent, screen } from '@testing-library/react';
import { Menu } from '.';
import { theme } from '../../styles/theme';
import renderTheme from '../../utils/RenderTheme';
import linksMock from '../NavLinks/mock';
import 'jest-styled-components';

const logoData = {
  text: 'Logo',
  link: '#target',
};

describe('<Menu />', () => {
  it('should render logo and main menu nav', () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('should render snapshot', () => {
    const { container } = renderTheme(<Menu links={linksMock} logoData={logoData} />);

    expect(container).toMatchSnapshot();
  });

  it('should render menu mobile and button for opn and close the menu', () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />);

    const button = screen.getByLabelText('Open/Close menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteMedium,
    });

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
    fireEvent.click(button);

    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.lteMedium,
    });

    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

    fireEvent.click(menuContainer);
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('Should not render links', () => {
    renderTheme(<Menu logoData={logoData} />);

    expect(
      screen.getByRole('navigation', { name: 'Main menu' }).firstChild
    ).not.toBeInTheDocument();
  });
});
