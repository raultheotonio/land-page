import { screen } from '@testing-library/react';
import { NavLinks } from '.';
import { theme } from '../../styles/theme';
import renderTheme from '../../utils/RenderTheme';
import mocks from './mock';

import 'jest-styled-components';

describe('<NavLinks />', () => {
  it('should render', () => {
    renderTheme(<NavLinks links={mocks} />);

    expect(screen.getAllByRole('link')).toHaveLength(mocks.length);
  });

  it('should render links', () => {
    renderTheme(<NavLinks />);

    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  it('should render links', () => {
    renderTheme(<NavLinks links={mocks} />);

    expect(screen.getByText(/link 1/i).parentElement).toHaveStyleRule('flex-flow', 'column wrap', {
      media: theme.media.lteMedium,
    });
  });

  it('should render snapshot', () => {
    renderTheme(<NavLinks />);

    expect(screen.queryAllByText(/links/i)).toMatchSnapshot();
  });
});
