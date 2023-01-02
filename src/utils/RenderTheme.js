import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

export default function renderTheme(children) {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}
