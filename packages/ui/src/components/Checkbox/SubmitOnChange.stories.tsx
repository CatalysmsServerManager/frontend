import { Meta, Story } from '@storybook/react';
import { styled } from '../../styled';
import { Checkbox, CheckboxProps } from '.';
import { useForm, useWatch } from 'react-hook-form';

const ResultContainer = styled.div`
  margin-top: 3rem;
`;

export default {
  title: 'Components/Form/Checkbox/onChange',
  component: Checkbox,
} as Meta;

// Example
export const ExampleOnSubmit: Story<CheckboxProps> = () => {
  type FormFields = {
    hasCar: boolean;
  }
  const { control } = useForm<FormFields>();
  const result = useWatch({ control, name: 'hasCar', defaultValue: false });

  return (
    <>
      <Checkbox
        control={control}
        labelPosition="left"
        labelText="Do you have a car?"
        name="hasCar"
      />
      <ResultContainer>
        Result: {result ? 'true' : 'false'}
      </ResultContainer>
    </>
  );
};
