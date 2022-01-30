// TODO: Improve accessibility
import React, { FC, useEffect, useState } from 'react';
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
  const { field: checkbox } = useController({ name, control, defaultValue: defaultValue });

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

  useEffect(() => {
    checkbox.onChange(isChecked);
  }, [isChecked]);

  if (loading) {
    return (
      <Container>
        { /* CASE: Show labelText before <CheckBox /> */}
        { labelPosition === 'left' && labelText && <Label onClick={onCheck} position={labelPosition}>{labelText}</Label>}
        <CheckboxContainer className="placeholder" isChecked={isChecked} />
        { /* CASE: show labelText after <CheckBox /> */}
        { labelPosition === 'right' && labelText && <Label onClick={onCheck} position={labelPosition}>{labelText}</Label>}
      </Container>
    );
  }

  return (
    <Container>
      { /* CASE: Show labelText before <CheckBox /> */}
      {labelPosition === 'left' && labelText && <Label onClick={onCheck} position={labelPosition}>{labelText}</Label>}
      <CheckboxContainer isChecked={isChecked} onClick={onCheck}>
        <CheckMarkContainer isChecked={isChecked}>
          <Icon size={18} />
        </CheckMarkContainer>

        {
          /*
            ##########################################
            Ignore this input field it is just here
            for the controller, but it is not visible for the user.
            ##########################################
          */
        }
        <Input
          {...checkbox}
          checked={isChecked}
          id={name}
          name={name}
          readOnly={readOnly}
          type="checkbox"
        />
      </CheckboxContainer>
      { /* CASE: show labelText after <CheckBox /> */}
      { labelPosition === 'right' && labelText && <Label onClick={onCheck} position={labelPosition}>{labelText}</Label>}
    </Container>
  );
};
