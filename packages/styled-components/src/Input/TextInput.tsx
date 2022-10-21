import React, { forwardRef } from 'react';

import styled, { css } from 'styled-components';

import { InputProps } from './props';

export const StyledInputInner = styled.input<{ disabled?: boolean }>`
  padding: 0 18px;
  margin: 2px 0;
  border: 0;
  border-radius: 10px;
  height: 48px;
  font-size: ${({ theme }) => theme.fontSizes.textL};
  outline: none;
  width: 100%;
  flex-grow: 1;
  background: none;
  font-weight: 400;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.grey700};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
    font-weight: 300;
  }
  ${(props) =>
    props.disabled &&
    css`
      background: ${({ theme }) => theme.colors.grey100};
      color: ${({ theme }) => theme.colors.grey400};
      cursor: not-allowed;
    `}
`;

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
  background: ${({ theme }) => theme.colors.background};
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

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { error, disabled, ...rest } = props;
  return (
    <StyledInputWrapper error={error} disabled={disabled}>
      <StyledInputInner className={'formInput'} {...rest} ref={ref} />
    </StyledInputWrapper>
  );
});

export default Input;
