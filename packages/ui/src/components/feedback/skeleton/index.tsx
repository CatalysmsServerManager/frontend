import { FC } from 'react';
import { styled } from '../../../styled';
import { keyframes } from 'styled-components';

export interface SkeletonProps {
  width?: number;
  height?: number;
  variant: Variants;
}

type Variants = 'text' | 'circular' | 'rectangular';

const skeletonLoading = keyframes`
  0% { transform: translateX(-100%); }
  40%, 100% { transform: translateX(100%); }
`;

const StyledDiv = styled.div<{ variant: Variants, s_height: number; s_width: number, }>`
  width: ${({ s_width }) => s_width}px;
  height: ${({ s_height }) => s_height}px;
  margin: 10px 0;
  overflow: hidden;
  position: relative;

  background-color: ${({ theme }): string => theme.colors.placeholder};
  &::before {
    content: '';
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient( 90deg, ${({ theme }): string => theme.colors.placeholderHighlight}d3 0, ${({ theme }): string => theme.colors.placeholderHighlight}4d 20%, ${({ theme }): string => theme.colors.placeholderHighlight}66 60%, ${({ theme }): string => theme.colors.placeholderHighlight}d3);
    animation: ${skeletonLoading} 2.5s infinite ease-in-out;
  }

  ${({ variant, s_width, s_height }) => {
    switch (variant) {
      case 'text':
        return `
        border - radius: 3px; `;
      case 'circular':
        return 'border-radius: 50%;';
    }
  }}
`;

export const Skeleton: FC<SkeletonProps> = ({ width = 210, height = 20, variant }) => {
  return (
    <StyledDiv s_height={height} s_width={width} variant={variant} />
  );
};
