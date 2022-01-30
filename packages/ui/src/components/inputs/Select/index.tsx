// TODO: <Select/>
import { createRef, CSSProperties, FC, useState } from 'react';
import { Container, DropDownContainer, SelectedContainer, Option, ArrowContainer, CheckMarkContainer } from './style';
import { Control, FieldError, useController } from 'react-hook-form';
import { usePopper } from 'react-popper';
import { useOutsideAlerter } from '../../../hooks';
import { ErrorContainer, Error } from '../Field/style';
import {
  AiOutlineDown as ArrowDownIcon,
  AiOutlineUp as ArrowUpIcon,
  AiOutlineCheck as CheckMarkIcon
} from 'react-icons/ai';

import 'simplebar/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react';

type OptionType = {
  value: string;
  label: string;
}

export interface SelectProps {
  options: OptionType[];
  name: string;
  control: Control<any>;
  label?: string;
  placeholder: string;
  readOnly?: boolean;
  defaultValue?: OptionType;
  error?: FieldError;
}

export const Select: FC<SelectProps> = ({
  options,
  control,
  name,
  error,
  label,
  readOnly = false,
  defaultValue,
  placeholder,
}) => {
  const { field: { ref, ...inputProps } } = useController({ name, control });
  const [referenceElement, setReferenceElement] = useState<any>(null);
  const [popperElement, setPopperElement] = useState<any>(null);
  const [showError, setShowError] = useState(false);
  const [selected, setSelected] = useState<OptionType | undefined>(defaultValue);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      { name: 'offset', options: { offset: [0, 10] } }
    ],
  });

  const [visible, setVisible] = useState<boolean>(false);
  const parentRef = createRef<HTMLDivElement>();
  useOutsideAlerter(parentRef, () => { setVisible(false); });

  return (
    <Container
      ref={parentRef}
    >
      <label onClick={() => { setVisible(!visible); }}>{label}</label>
      <SelectedContainer
        className={readOnly ? 'read-only' : ''}
        hasError={error ? true : false}
        onBlur={() => setShowError(false)}
        onClick={() => setVisible(!visible)}
        onFocus={() => setShowError(true)}
        ref={setReferenceElement}
      >
        <ArrowContainer>
          {visible ? <ArrowUpIcon size={18} /> : <ArrowDownIcon size={18} />}
        </ArrowContainer>
        <p>
          {selected?.label ? selected.label : placeholder}
        </p>
        {/* This is here to work with useForm */}
        <select {...inputProps}> {options.map(({ label, value }) => <option key={value} value={value}>{label}</option>)}</select>
      </SelectedContainer>
      {
        visible &&
        <DropDownContainer
          ref={setPopperElement}
          style={styles.popper as CSSProperties}
          {...attributes.popper}
        >
          <SimpleBar style={{ maxHeight: '40vh' }}>
            {options.map(({ label, value }) => (
              <Option
                onClick={(): void => {
                  setVisible(false);
                  setSelected({ value: value, label: label });
                }}
                selected={selected?.value === value && selected.label === label ? true : false}
              >
                <span>{label}</span>

                {
                  selected?.value === value && selected.label === label &&
                  <CheckMarkContainer>
                    <CheckMarkIcon size={18} />
                  </CheckMarkContainer>
                }
              </Option>
            ))}
          </SimpleBar>
        </DropDownContainer>
      }
      {
        error &&
        <ErrorContainer showError={showError}>
          <Error>{error.message}</Error>
        </ErrorContainer>
      }
    </Container>
  );
};
