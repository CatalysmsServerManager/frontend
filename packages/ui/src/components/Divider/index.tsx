import { FC } from 'react';
import { styled } from '../../styled';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 70%;
  margin: 3rem auto 3rem auto;
`;
const Label = styled.label<{ position: 'left' | 'center' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  p {
    z-index: 20;
    color: gray;
    background-color: white;
    font-size: 1.325rem;
    padding: 0 .5rem;
  }

  ${({ position }) => {
    switch (position) {
      case 'left':
        return `
          left: 0;
        `;
      case 'center':
        return `
        left: 50%;
        `;
      case 'right':
        return `
        right: 0
        `;
    }
  }}
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray};
  z-index: 0;
`;

type LabelProps = {
  text: string;
  labelPosition: 'left' | 'center' | 'right';
}

export interface DividerProps {
  label?: LabelProps;
}

export const Divider: FC<DividerProps> = ({ label }) => {
  return (
    <Container>
      <Line />
      {
        label && <Label position={label.labelPosition}><p>{label.text}</p></Label>
      }
    </Container>
  );
};
