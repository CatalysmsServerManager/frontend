import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '../src/styled';
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