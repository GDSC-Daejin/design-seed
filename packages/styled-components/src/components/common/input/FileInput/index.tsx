import React, {
  ChangeEvent,
  HTMLAttributes,
  RefObject,
  forwardRef,
  useState,
} from 'react';
import FolderIcon from 'src/assets/FolderIcon';

import {
  InputImageWrapper,
  StyledFileInput,
  StyledInputWrapper,
} from '../TextInput/styled';

export interface FileInputProps extends HTMLAttributes<HTMLInputElement> {
  defaultPlaceholder: string;
  errorToggle?: boolean;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  (props, ref) => {
    const { defaultPlaceholder, errorToggle, disabled, onChange, ...rest } =
      props;
    const [placeholder, setPlaceholder] = useState(
      defaultPlaceholder || 'Choose a file',
    );
    const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        setPlaceholder(e.target.files[0].name);
        onChange && onChange(e);
      }
    };
    const inputRef = document.getElementById('formInput') as HTMLInputElement;
    return (
      <StyledInputWrapper
        error={errorToggle}
        disabled={!disabled}
        onClick={() => {
          inputRef && inputRef.click();
        }}
      >
        <InputImageWrapper>
          <FolderIcon />
        </InputImageWrapper>
        <StyledFileInput>{placeholder}</StyledFileInput>
        <input
          {...rest}
          id={'formInput'}
          ref={ref}
          type={'file'}
          style={{ display: 'none' }}
          onChange={fileHandler}
        />
      </StyledInputWrapper>
    );
  },
);
