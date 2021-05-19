import { FC, cloneElement, useState } from 'react';
import { Container, LabelContainer, Label, InputContainer, Input, ErrorContainer, Error } from '../Field/style';
import { FieldProps } from 'components';
import { useController } from 'react-hook-form';

// TODO: Add pretab and posttab [http]
// add hint (e.g. for required / optional)

export const TextField: FC<FieldProps> = ({
  control,
  labelText,
  placeholder,
  name,
  error,
  icon,
  readOnly,
  hint,
  loading = false
}) => {
  const [showError, setShowError] = useState(false);
  const { field: { ref, ...inputProps } } = useController({ name, control, defaultValue: placeholder });

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
          {hint}
        </Label>
      </LabelContainer>
      <InputContainer>
        {icon && cloneElement(icon, { size: 24, className: 'icon' })}
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
