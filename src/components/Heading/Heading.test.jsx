import { screen } from '@testing-library/react';
import { Heading } from '.';
import { theme } from '../../styles/theme';
import renderTheme from '../../utils/RenderTheme';
import 'jest-styled-components';

describe('<Heading/>', () => {
  it('should render with default values', () => {
    renderTheme(
      <Heading uppercase={false} as="h1" colorDark size="small">
        texto
      </Heading>
    );

    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.sizes.small,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(
      <Heading uppercase={false} as="h1" colorDark={false} size="small">
        texto
      </Heading>
    );

    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render a snapshot', () => {
    const { container } = renderTheme(
      <Heading uppercase={false} as="h1" colorDark={false} size="small">
        texto
      </Heading>
    );

    expect(container).toMatchSnapshot();
  });
});
