import { Story, Meta } from '@storybook/react';
import { Select, SelectProps } from '.';
import { SubmitHandler, useForm } from 'react-hook-form';

export default {
  title: 'Inputs/Select',
  component: Select,
} as Meta;

export const SelectComponent: Story<SelectProps> = () => {
  type FormFields = { carBrand: string }
  const { control, handleSubmit } = useForm<FormFields>();

  const submit: SubmitHandler<FormFields> = ({ carBrand }) => { };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Select
        control={control}
        label="Car Brand"
        name="car-brand"
        options={[
          { value: 'partTime', label: 'Part Time' },
          { value: 'fullTime', label: 'Full Time' },
          { value: 'casual', label: 'Casual' }
        ]}
        placeholder="Select Car Brand"
      />
      <button>submit form</button>
    </form>
  );
};
