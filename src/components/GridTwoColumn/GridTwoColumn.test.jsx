import { screen } from '@testing-library/react';
import { GridTwoColumn } from '.';
import renderTheme from '../../utils/RenderTheme';
import mock from './mock';

describe('<GridTwoColumn />', () => {
  it('should render', () => {
    renderTheme(<GridTwoColumn {...mock} background />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
