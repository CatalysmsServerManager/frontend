import { FC, ReactNode, CSSProperties } from 'react';
import { styled } from 'styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: .7rem;
`;

const ImageContainer = styled.div<{ customStyle?: CSSProperties }>`
  height: 40px;
  margin-bottom: 1rem;
  svg {
    height: 100%;
    margin: auto;
  }
`;

const Description = styled.div`
  color: ${({ theme }) => theme.gray};
`;

export interface EmptyProps {
  description?: string | ReactNode;
  image?: React.ReactNode;
  /* To style the image container and children */
  imageStyle?: CSSProperties;
}

export const Empty: FC<EmptyProps> = ({ description = 'No Data', image, imageStyle }) => {
  return (
    <Container>
      {/* TODO: fix custom image support */}
      <ImageContainer customStyle={imageStyle}>
        <svg className="ant-empty-img-simple" height="41" viewBox="0 0 64 41" width="64" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd" transform="translate(0 1)" >
            <ellipse cx="32" cy="33" fill="#f5f5f5" rx="32" ry="7"></ellipse>
            <g fill="#d9d9d9" fill-rule="nonzero">
              <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
              <path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" fill="#fafafa">
              </path>
            </g>
          </g>
        </svg>
      </ImageContainer>
      <Description>{description}</Description>
    </Container>
  );
};