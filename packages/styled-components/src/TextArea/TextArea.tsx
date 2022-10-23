import React, { forwardRef } from 'react';

import styled, { css } from 'styled-components';

import { TextAreaProps } from './props';

export const StyledTextAreaWrapper = styled.div<{
  error?: boolean;
  disabled?: boolean;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px auto 0;
  height: fit-content;
  border: none;
  outline: none;
  appearance: none;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSizes.textL};
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.grey300};
  cursor: auto;
  &:hover {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.blue200};
    ${(props) =>
      props.error &&
      css`
        box-shadow: inset 0 0 0 2px ${props.theme.colors.blue200};
      `}
  }
  .formInput:focus {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.blue600} !important;
    ${(props) =>
      props.error &&
      css`
        box-shadow: inset 0 0 0 2px ${props.theme.colors.red600};
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
export const StyledTextArea = styled.textarea<{
  color?: string;
  disabled?: boolean;
  error?: boolean;
}>`
  min-height: 100px;
  max-height: 350px;
  font-family: sans-serif;
  overflow: auto;
  flex-grow: 1;
  outline: 0;
  border: 0;
  background: none;
  padding: 18px 18px;
  margin: 0;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSizes.textL};
  color: ${({ theme }) => theme.colors.grey800};
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.grey300};
  cursor: auto;
  transition: box-shadow 0.3s;
  resize: vertical;
  font-weight: 400;
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
  }
  ${(props) =>
    props.disabled &&
    css`
      background: ${({ theme }) => theme.colors.grey100};
      color: ${({ theme }) => theme.colors.grey400};
      cursor: not-allowed;
    `}
`;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const { error, disabled, ...rest } = props;
    return (
      <StyledTextAreaWrapper error={error} disabled={disabled}>
        <StyledTextArea
          ref={ref}
          className={'formInput'}
          disabled={disabled}
          {...rest}
        />
      </StyledTextAreaWrapper>
    );
  },
);
export default TextArea;
