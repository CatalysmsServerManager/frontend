import { FC, cloneElement, useState } from 'react';
import { Container, LabelContainer, Label, InputContainer, Input, ErrorContainer, Error } from '../Field/style';
import { FieldProps } from '../..';
import { useController } from 'react-hook-form';

export const TextField: FC<FieldProps> = ({
  control,
  labelText,
  placeholder,
  name,
  error,
  icon,
  readOnly,
  hint,
  required,
  loading = false
}) => {
  const [showError, setShowError] = useState(false);
  const { field: { ref, ...inputProps } } = useController({ name, control });

  if (!hint && required) {
    hint = 'Required';
  } else if (hint && required) {
    hint += '*';
  }

  if (loading) {
    return (
      <Container>
        <LabelContainer>
          <Label htmlFor={name} showError={error ? true : false}>{labelText}</Label>
        </LabelContainer>
        <InputContainer className="placeholder" />
      </Container>
    );
  }

  return (
    <Container>
      <LabelContainer>
        <Label htmlFor={name} showError={error ? true : false}>
          {labelText}
          <span>{hint}</span>
        </Label>
      </LabelContainer>
      <InputContainer>
        {icon && cloneElement(icon, { size: 22, className: 'icon' })}
        <Input
          {...inputProps}
          autoCapitalize="off"
          autoComplete="off"
          hasError={error ? true : false}
          hasIcon={icon ? true : false}
          id={name}
          name={name}
          onBlur={(): void => { setShowError(false); }}
          onFocus={(): void => { setShowError(true); }}
          placeholder={placeholder}
          readOnly={readOnly}
          ref={ref}
          type="search"
        />
      </InputContainer>
      {
        error &&
        <ErrorContainer showError={showError}>
          <Error>{error.message}</Error>
        </ErrorContainer>
      }
    </Container >
  );
};
