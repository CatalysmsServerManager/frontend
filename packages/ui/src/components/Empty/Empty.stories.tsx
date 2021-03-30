import { Meta } from '@storybook/react/types-6-0';
import { Empty } from '.';
import { styled } from 'styled';

const Wrapper = styled.div`
  padding: 5rem;
  border-radius: 1rem;
  span {
    font-weight: 900;
  }
`;

export default {
  title: 'Components/Empty',
  component: Empty,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as Meta;

export const Default = () => (
  <>
    <Empty />
    <Empty description="custom description" />
    <Empty description={<span className="custom-styled-span">custom description</span>} />
  </>
);
