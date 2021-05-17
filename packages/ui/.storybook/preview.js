import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styled/theme';
import { GlobalStyle } from '../src/styled/GlobalStyle';
import { MemoryRouter } from 'react-router-dom';

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={['/']}>
        <GlobalStyle />
        <Story />
      </MemoryRouter>
    </ThemeProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}