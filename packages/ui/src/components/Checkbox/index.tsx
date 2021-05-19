import { FC, useState } from 'react';
import { CheckboxContainer, CheckMarkContainer, Container, Label, Input } from './style';
import { AiOutlineCheck as Icon } from 'react-icons/ai';
import { Control, useController } from 'react-hook-form';

export interface CheckboxProps {
  name: string;
  control: Control<any>;
  loading?: boolean;
  defaultValue?: boolean;
  readOnly?: boolean;
  labelText?: string;
  labelPosition?: 'left' | 'right';
  onChange?: (e: React.MouseEvent<HTMLDivElement | HTMLLabelElement>) => void;
}

export const Checkbox: FC<CheckboxProps> = ({
  control,
  defaultValue = false,
  readOnly = false,
  labelText,
  labelPosition = 'right',
  name,
  loading = false,
  onChange
}) => {
  const [isChecked, setChecked] = useState<boolean>(defaultValue);
  const { field: { ref, ...inputProps } } = useController({ name, control, defaultValue: defaultValue });

  function onCheck(e: React.MouseEvent<HTMLDivElement | HTMLLabelElement>): void {
    if (readOnly) {
      return;
    }
    setChecked(!isChecked);

    // check if parent function is defined
    if (typeof (onChange) === 'function') {
      setTimeout(() => {
        onChange(e);
      }, 100); // timeout because the value change takes a second
    }
  }

  if (loading) {
    return (
      <Container>
        {
          labelPosition === 'left' && labelText ? <Label onClick={onCheck}>{labelText}</Label> : ''
        }
        <CheckboxContainer className="placeholder" isChecked={isChecked} />
        {
          labelPosition === 'right' && labelText ? <Label onClick={onCheck}>{labelText}</Label> : ''
        }
      </Container>
    );
  }

  return (
    <Container>
      {labelPosition === 'left' && labelText ? <Label onClick={onCheck}>{labelText}</Label> : null}
      <CheckboxContainer isChecked={isChecked} onClick={onCheck} >
        <CheckMarkContainer isChecked={isChecked}>
          <Icon size={18} />
        </CheckMarkContainer>
        <Input
          {...inputProps}
          checked={isChecked}
          id={name}
          name={name}
          onChange={(): void => { }} /* required to make it controlled */
          readOnly={readOnly}
          ref={ref}
          type="checkbox"
        />
      </CheckboxContainer>
      {
        labelPosition === 'right' && labelText ? <Label onClick={onCheck}>{labelText}</Label> : ''
      }
    </Container>
  );
};
