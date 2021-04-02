import { FC, useState } from 'react';
import { Container, Dot, Inner, Label } from './style';

export interface SwitchProps {
  /* Unique name, required to toggle the switch */
  name: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (isChecked: boolean) => void;
}

export const Switch: FC<SwitchProps> = ({ name, defaultChecked = false, disabled = false, onChange }) => {
  const [isChecked, setChecked] = useState(defaultChecked);

  function onCheck(): void {
    setChecked(!isChecked);
    if (typeof onChange === 'function') onChange(isChecked);
  }

  return (
    <Container>
      { /* this is the input component itself, but cannot be styled properly. */}
      <input
        disabled={disabled}
        id={name}
        name={name}
        onChange={onCheck}
        style={{ display: 'none' }}
        type="checkbox"
      >
      </input>
      <Label htmlFor={name} >
        <Inner isChecked={isChecked}>
          <Dot disabled={disabled} isChecked={isChecked} />
        </Inner>
      </Label>
    </Container>
  );
};
