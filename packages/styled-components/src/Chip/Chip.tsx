import React, { forwardRef } from 'react';

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
          border: 1px solid rgba(255, 255, 255, 0.6);
          color: #fff;
          opacity: 1;
        `
      : css`
          border: 1px solid ${({ theme }) => theme.colors.grey600};
          color: ${({ theme }) => theme.colors.grey900};
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
      border: 1px solid ${(props) => props.theme.colors.grey600};
      border-radius: 50px;
      margin-right: 6px;
    `};
`;

const Chip = forwardRef<HTMLDivElement, ChipProps>(
  ({ children, size, ...rest }, ref) => {
    return (
      <StyledChip isDarkMode={true} size={size} ref={ref} {...rest}>
        {children}
      </StyledChip>
    );
  },
);
export default Chip;
