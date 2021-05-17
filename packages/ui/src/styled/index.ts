import baseStyled, { ThemedStyledInterface } from 'styled-components';
import { ThemeType as T } from './theme';

/* Re-export of styled-components styled default export which at typings for the custom theme */
const styled = baseStyled as ThemedStyledInterface<T>;
export { theme } from './theme';
export { size } from './size';
export { GlobalStyle } from './GlobalStyle';

export default styled;
