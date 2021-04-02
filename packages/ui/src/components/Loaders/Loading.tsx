import { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ThemeType } from 'styled/theme';

export interface LoadingProps {
  fill?: string;
}

export const Loading: FC<LoadingProps> = ({ fill = undefined }) => {
  const themeContext = useContext<ThemeType>(ThemeContext);
  if (!fill) { fill = themeContext.colors.primary; }
  return (
    <svg
      fill={fill}
      height="105"
      viewBox="0 0 105 105"
      width="105"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12.5" cy="12.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="0s"
          calcMode="linear"
          dur="1s"
          repeatCount="indefinite"
          values="1;.2;1"
        />
      </circle>
      <circle
        cx="12.5"
        cy="52.5"
        fillOpacity=".5"
        r="12.5"
      >
        <animate
          attributeName="fill-opacity"
          begin="100ms"
          calcMode="linear"
          dur="1s"
          repeatCount="indefinite"
          values="1;.2;1"
        />
      </circle>
      <circle cx="52.5" cy="12.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="300ms"
          calcMode="linear"
          dur="1s"
          repeatCount="indefinite"
          values="1;.2;1"
        />
      </circle>
      <circle cx="52.5" cy="52.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="600ms"
          calcMode="linear"
          dur="1s"
          repeatCount="indefinite"
          values="1;.2;1"
        />
      </circle>
      <circle cx="92.5" cy="12.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="800ms"
          calcMode="linear"
          dur="1s"
          repeatCount="indefinite"
          values="1;.2;1"
        />
      </circle>
      <circle cx="92.5" cy="52.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="400ms"
          calcMode="linear"
          dur="1s"
          repeatCount="indefinite"
          values="1;.2;1"
        />
      </circle>
      <circle cx="12.5" cy="92.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="700ms"
          calcMode="linear"
          dur="1s"
          repeatCount="indefinite"
          values="1;.2;1"
        />
      </circle>
      <circle cx="52.5" cy="92.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="500ms"
          calcMode="linear"
          dur="1s"
          repeatCount="indefinite"
          values="1;.2;1"
        />
      </circle>
      <circle cx="92.5" cy="92.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="200ms"
          calcMode="linear"
          dur="1s"
          repeatCount="indefinite"
          values="1;.2;1"
        />
      </circle>
    </svg>
  );
};
