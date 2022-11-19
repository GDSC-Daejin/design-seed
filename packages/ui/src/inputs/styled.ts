import styled, { css } from 'styled-components';

export const StyledInputWrapper = styled.div<{
  isDisabled?: boolean;
  hasError?: boolean;
  isFocused?: boolean;
  borderless?: boolean;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 1px auto 0;
  height: fit-content;
  min-height: 50px;
  outline: none;
  appearance: none;
  border-radius: 10px;
  border: none;
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.grey300};
  background: ${({ theme }) => theme.colors.background};
  cursor: auto;
  &:hover {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.blue400};
    ${({ hasError }) =>
      hasError &&
      css`
        box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.red600};
      `}
  }
  ${({ isFocused }) =>
    isFocused &&
    css`
      box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.blue600};
    `}
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      box-shadow: none;
    `}
  ${({ hasError }) =>
    hasError &&
    css`
      box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.red900};
    `}
    ${({ borderless }) =>
    borderless &&
    css`
      box-shadow: none;
      &:hover {
        box-shadow: none;
      }
    `}
  
  transition: 0.3s;
`;

export const inputDefaultStyle = css`
  box-sizing: border-box;
  padding: 0 18px;
  margin: 1px 0;
  border: none;
  border-radius: 10px;
  height: 48px;
  width: 100%;
  outline: none;
  flex-grow: 1;
  background: none;
`;

export const inputTextStyles = css`
  font-size: ${({ theme }) => theme.fontSizes.textL};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.grey800};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey500};
  }
`;
