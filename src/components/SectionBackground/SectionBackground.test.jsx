import { screen } from '@testing-library/react';
import { SectionBackground } from '.';
import renderTheme from '../../utils/RenderTheme';

describe('<SectionBackground />', () => {
  it('should render with background dark', () => {
    const { container } = renderTheme(
      <SectionBackground background>
        <h1>children</h1>
      </SectionBackground>
    );

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render', () => {
    renderTheme(
      <SectionBackground background={false}>
        <h1>children</h1>
      </SectionBackground>
    );

    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
