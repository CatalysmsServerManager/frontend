import { Meta, Story } from '@storybook/react';
import styled from 'styled';
import { Checkbox, CheckboxProps, Button } from 'components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';

const ResultContainer = styled.div`
  margin-top: 3rem;
`;

export default {
  title: 'Components/Form/Checkbox/OnSubmit',
  component: Checkbox,
} as Meta;

// Example
export const ExampleOnSubmit: Story<CheckboxProps> = () => {
  const [result, setResult] = useState<boolean>(false);

  type FormFields = {
    hasCar: boolean;
  }
  const { control, handleSubmit } = useForm<FormFields>();

  const submit: SubmitHandler<FormFields> = ({ hasCar }) => {
    setResult(hasCar);
  };

  // TODO: improve this visually
  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <Checkbox
          control={control}
          labelPosition="left"
          labelText="Do you have a car?"
          name="hasCar"
        />
        <Button onClick={() => {/* placeholder */ }} text="Submit Form" type="submit" />
      </form>
      <ResultContainer>
        Result: {result ? 'true' : 'false'}
      </ResultContainer>
    </>
  );
};
