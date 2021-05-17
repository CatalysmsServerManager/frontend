import { FC, useState, useEffect, useContext } from 'react';
import styled from 'styled';
import { ThemeType } from 'styled/theme';
import { Icon } from 'components';
import { ThemeContext } from 'styled-components';

const Container = styled.div<{ maxWidth: number }>`
  position: relative;
  padding: 0;
  outline: 0;
  width: fit-content;

  input {
    display: block;
    max-width: ${({ maxWidth }): number => maxWidth}px;
    padding: 8px 30px 8px 8px;
    border: 1px solid ${({ theme }): string => theme.colors.gray};
    color: gray;
    cursor: default;

    &:hover {
      cursor: default;
    }
  }
`;

const IconContainer = styled.div`
  position: absolute;
  background-color: white;
  top: 7px;
  right: 7px;

  svg {
    fill: gray;
    stroke: gray;
    cursor: pointer;
  }
`;

export interface ClipBoardProps {
  text: string;
  maxWidth: number;
}

export const ClipBoard: FC<ClipBoardProps> = ({ text, maxWidth }) => {
  const [copied, setCopied] = useState(false);
  const themeContext = useContext<ThemeType>(ThemeContext);

  function handleCopy() {
    setCopied(true);
    navigator.clipboard.writeText(text);
  }

  useEffect(() => {
    /* If it was copied, show a checkmark for 2.5s thn make it possible to copy again */
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2500);
    }
  }, [copied]);

  return (
    <Container maxWidth={maxWidth} role="button" tabIndex={-1} >
      <input
        aria-describedby="clipboard-input-error"
        aria-invalid="false"
        readOnly
        type="text"
        value={text}
      />
      <IconContainer>

        {
          copied ?
            <Icon fill={themeContext.colors.secondary} glyph={'checkmark'} size={20} />
            :
            <ClipBoardIcon onClick={handleCopy} />
        }
      </IconContainer>
    </Container>
  );
};
interface ClipBoardIconProps {
  onClick: () => void;
}

/* TODO: ADD tooltip */
const ClipBoardIcon: FC<ClipBoardIconProps> = ({ onClick }) => (
  <svg height="20px" onClick={onClick} viewBox="0 0 1024 1024" width="20px">
    <path d="M960.132 210.186c0-0.444-0.050-0.874-0.066-1.312-0.024-0.684-0.044-1.366-0.104-2.046-0.060-0.74-0.158-1.468-0.26-2.198-0.080-0.564-0.156-1.128-0.258-1.692-0.146-0.792-0.328-1.566-0.518-2.34-0.124-0.508-0.244-1.014-0.39-1.518-0.224-0.784-0.488-1.548-0.76-2.312-0.176-0.49-0.344-0.98-0.538-1.466-0.302-0.754-0.642-1.486-0.988-2.216-0.224-0.472-0.436-0.946-0.68-1.41-0.398-0.762-0.838-1.496-1.284-2.228-0.242-0.396-0.466-0.798-0.722-1.19-0.608-0.924-1.262-1.81-1.942-2.678-0.132-0.168-0.248-0.346-0.382-0.512-0.98-1.212-2.028-2.364-3.14-3.454l-104.020-104.9c-3.714-3.714-7.988-6.518-12.542-8.464-0.088-0.040-0.174-0.084-0.262-0.122-0.994-0.418-2.006-0.774-3.024-1.108-0.242-0.080-0.474-0.176-0.72-0.252-0.942-0.288-1.894-0.516-2.854-0.732-0.334-0.076-0.658-0.176-0.996-0.244-0.998-0.2-2.004-0.336-3.010-0.458-0.306-0.038-0.606-0.1-0.912-0.13-1.322-0.13-2.65-0.204-3.976-0.204h-391.784c-1.754 0-3.468 0.152-5.162 0.372-19.646 2.538-34.838 19.29-34.838 39.628v145.516h-279.874c-1.754 0-3.468 0.152-5.162 0.372-19.646 2.538-34.838 19.29-34.838 39.628v628.28c0 22.094 17.91 40 40 40h496.118c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 2.084-3.466 2.128-3.548 2.992-5.612 4.704-12.010 4.704-18.808 0 0 0 0 0-0.004v-145.518h279.874c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 2.084-3.466 2.128-3.548 2.992-5.612 4.704-12.010 4.704-18.808 0 0 0 0 0-0.004v-521.828c0.008-0.23-0.016-0.458-0.014-0.688 0.002-0.202 0.028-0.39 0.028-0.584zM144.124 878.792v-548.278h311.752v65.186c0 22.090 17.91 40 40 40h64.366v443.092h-416.118zM640.244 693.278v-296.31c0.006-0.23-0.018-0.458-0.014-0.688 0.004-0.196 0.030-0.382 0.030-0.578 0-0.444-0.052-0.874-0.066-1.312-0.024-0.684-0.044-1.366-0.104-2.046-0.062-0.74-0.16-1.468-0.262-2.198-0.078-0.564-0.152-1.128-0.258-1.692-0.144-0.792-0.324-1.566-0.516-2.34-0.124-0.508-0.246-1.014-0.39-1.518-0.226-0.784-0.488-1.548-0.76-2.312-0.174-0.49-0.342-0.98-0.538-1.466-0.302-0.754-0.64-1.486-0.988-2.216-0.222-0.472-0.438-0.946-0.68-1.41-0.398-0.762-0.838-1.496-1.284-2.228-0.242-0.396-0.466-0.798-0.724-1.19-0.606-0.924-1.262-1.81-1.942-2.678-0.13-0.168-0.246-0.346-0.382-0.512-0.978-1.212-2.028-2.364-3.138-3.454l-104.020-104.9c-3.714-3.714-7.988-6.518-12.542-8.464-0.088-0.040-0.172-0.084-0.262-0.122-0.994-0.418-2.004-0.774-3.024-1.108-0.242-0.080-0.476-0.176-0.72-0.252-0.942-0.288-1.896-0.516-2.854-0.732-0.334-0.076-0.658-0.176-0.996-0.244-0.998-0.2-2.004-0.336-3.012-0.458-0.304-0.038-0.602-0.1-0.91-0.13-1.322-0.13-2.648-0.204-3.976-0.204h-31.916v-105.516h311.752v65.186c0 22.090 17.91 40 40 40h64.366v443.092h-239.87z" />
  </svg>
);