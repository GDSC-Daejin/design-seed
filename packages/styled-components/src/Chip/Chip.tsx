import React, { forwardRef, useContext } from 'react';

import { DarkModeContext } from '@gdsc-dju/styled-components-theme';

import styled, { css } from 'styled-components';

import { ChipProps } from './props';

export const StyledChip = styled.div<{
  isDarkMode: boolean;
  size?: 'S' | 'L';
}>`
  padding: 1px 10px;
  border-radius: 50px;
  margin-right: 6px;
  opacity: 0.6;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSizes.textS};
  cursor: pointer;
  user-select: none;
  ${({ isDarkMode }) =>
    isDarkMode
      ? css`
          border: 1px solid ${({ theme }) => theme.colors.grey900};
          color: ${({ theme }) => theme.colors.grey900};
          opacity: 1;
        `
      : css`
          border: 1px solid ${({ theme }) => theme.colors.grey900};
          color: ${({ theme }) => theme.colors.grey900};
          opacity: 1;
        `};
  ${({ size }) =>
    size === 'L' &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.textL};
    `};
  ${({ size }) =>
    size === 'S' &&
    css`
      height: 17px;
      padding: 1px 10px;
      border-radius: 50px;
      margin-right: 6px;
    `};
`;

const Chip = forwardRef<HTMLDivElement, ChipProps>(
  ({ children, size = 'L', ...rest }, ref) => {
    const { isDarkMode } = useContext(DarkModeContext);

    return (
      <StyledChip isDarkMode={isDarkMode} size={size} ref={ref} {...rest}>
        {children}
      </StyledChip>
    );
  },
);
export default Chip;
