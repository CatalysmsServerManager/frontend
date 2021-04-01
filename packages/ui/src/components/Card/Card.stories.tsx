import { Meta } from '@storybook/react/types-6-0';
import { Card } from '.';
import { styled } from 'styled';
import { Button, Empty } from 'components';
import milk from 'images/milk.png';

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
    <Card>Blank Default Card</Card>
    <Card gradient size="large">Gradient Card</Card>
  </>
);

export const Sizes = () => (
  <>
    <Card size="small"><Empty description="Small Card" /></Card>
    <Card size="medium"><Empty description="Medium Card" /></Card>
    <Card size="large"><Empty description="Large Card" /></Card>
  </>
);

/* Example Card Component */
const Container = styled.div`
  border-radius: 1rem;
  background-color: white;
  padding: 2rem;
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

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }
  p {
    font-weight: 600;
  }
`;

const ImageContainer = styled.div`

img {
  width: 350px;
  height: auto;
}
`;

export const Example = () => (
  <Container>
    <Card gradient size="large">
      <FlexContainer>
        <div>
          <h2>Drink milk, it is good for you!</h2>
          <p>Reduced Fat and Low Fat Milk (also know as 2% or 1% milk) have the same amount of calcium, protein, vitamins and minerals as whole milk, just less fat and fewer calories.</p>
          <ButtonContainer>
            <Button onClick={() => { }} text="button one" white />
            <Button onClick={() => { }} outline text="button two" white />
          </ButtonContainer>
        </div>
        <ImageContainer>
          <img alt="milk" src={milk} />
        </ImageContainer>
      </FlexContainer>
    </Card>
  </Container>
);
