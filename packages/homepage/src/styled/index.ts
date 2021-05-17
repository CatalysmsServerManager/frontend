import baseStyled, { ThemedStyledInterface } from 'styled-components';
import { ThemeType } from './theme';

export const styled = baseStyled as ThemedStyledInterface<ThemeType>;
