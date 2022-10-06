import React, { forwardRef, useState } from 'react';
import styled, { css } from 'styled-components';
import FolderIcon from '../assets/FolderIcon';
import { FileInputProps } from './props';

export const StyledInputWrapper = styled.div<{
  color?: string;
  disabled?: boolean;
  error?: boolean;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px auto 0;
  height: 48px;
  border: none;
  outline: none;
  appearance: none;
  border-radius: 10px;
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.grey300};
  cursor: auto;
  &:hover {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.blue200} !important;
    ${({ error }) =>
      error &&
      css`
        box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.red600};
      `}
  }
  .formInput:focus {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.blue600};
    ${({ error }) =>
      error &&
      css`
        box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.red900};
      `}
  }
  ${({ disabled }) =>
    !disabled &&
    css`
      &:hover {
        box-shadow: none;
      }
    `}
  ${({ error }) =>
    error &&
    css`
      box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.red900};
    `}
  transition: 0.3s;
`;

export const InputImageWrapper = styled.div`
  height: 20px;
  width: 20px;
  margin: 0 -8px 0 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const StyledFileInput = styled.div`
  color: ${({ theme }) => theme.colors.grey500};
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  flex-grow: 1;
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSizes.textL};
  padding: 0 18px;
`;

const FileInput = forwardRef<HTMLInputElement, FileInputProps>((props, ref) => {
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
});
export default FileInput;
