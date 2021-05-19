import { Meta, Story } from '@storybook/react';
import styled from 'styled';
import { Checkbox, CheckboxProps } from 'components';
import { useForm } from 'react-hook-form';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 2rem;
  padding: 5rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 1rem;
`;

export default {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as Meta;

const Template: Story<CheckboxProps> = (args) => {
  const { control } = useForm();

  return (
    <Checkbox
      {...args}
      control={control}
    />
  );
}
  ;

// Default Checkbox
export const Default = Template.bind({});
Default.args = { name: 'checkbox01' };

export const DefaultChecked = Template.bind({});
DefaultChecked.args = { name: 'checkbox02', defaultValue: true };

export const Loading = Template.bind({});
Loading.args = { name: 'checkbox03', loading: true };

export const ReadOnly = Template.bind({});
ReadOnly.args = { name: 'checkbox04', readOnly: true };
