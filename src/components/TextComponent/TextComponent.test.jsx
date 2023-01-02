import { screen } from '@testing-library/react';
import { TextComponent } from '.';
import { theme } from '../../styles/theme';
import renderTheme from '../../utils/RenderTheme';

describe('<TextComponent />', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent>texto</TextComponent>);
    const paragraph = screen.getByText('texto');
    expect(paragraph).toBeInTheDocument();
  });

  it('should render when font-size is medium', () => {
    renderTheme(<TextComponent>texto</TextComponent>);
    const paragraph = screen.getByText('texto');
    expect(paragraph).toHaveStyle({
      'font-size': theme.sizes.medium,
    });
  });

  it('should render a snapshot', () => {
    const { container } = renderTheme(<TextComponent>texto</TextComponent>);

    expect(container).toMatchSnapshot();
  });
});
