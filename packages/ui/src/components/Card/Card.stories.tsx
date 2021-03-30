import { Meta } from '@storybook/react/types-6-0';
import { Card } from '.';
import { styled } from 'styled';
import { Button } from 'components';

const WrapperDecorator = styled.div`
  padding: 5rem;
  border-radius: 1rem;
  background-color: ${({ theme }): string => theme.background};
  span {
    font-weight: 900;
  }
`;

export default {
  title: 'Components/Card',
  component: Card,
  decorators: [story => <WrapperDecorator>{story()}</WrapperDecorator>]
} as Meta;

export const Default = () => (
  <>
    <Card>content here</Card>
    <Card gradient size="large">content here</Card>
  </>
);

export const Sizes = () => (
  <>
    <Card size="small">content here</Card>
    <Card size="medium">content here</Card>
    <Card size="large">content here</Card>
  </>
);

/* Example Card Component */
const Container = styled.div`
  border-radius: 1rem;
  background-color: white;
  padding: 2rem;

  h2 {
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }
  p {
    font-weight: 600;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  button {
    margin: 0 1rem;
    &:first-child {
      margin: 0 1rem 0 0;
    }
  }
`;

export const Example = () => (
  <Container>
    <Card gradient size="large">
      <h2>This is a sick title</h2>
      <p>This is a very interesting and super cool explanation that is just awesome, like yeah...</p>
      <p>This is a very interesting and super cool explanation that is just awesome.</p>
      <p>This is a very interesting and super cool explanation that is just awesome.</p>
      <p>This is a very interesting and super cool explanation that is just awesome, like yeah...</p>
      <ButtonContainer>
        <Button onClick={() => { }} text="button one" white />
        <Button onClick={() => { }} outline text="button two" white />
      </ButtonContainer>
    </Card>
  </Container>
);
