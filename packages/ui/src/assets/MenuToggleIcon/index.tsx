import React, { useContext } from 'react';

import styled, { css, useTheme } from 'styled-components';

import { StyledMenuButton } from './styled';

const MiddlePath = styled.path<{ isMenuOpen: boolean }>`
  ${({ isMenuOpen }) =>
    isMenuOpen
      ? css`
          opacity: 0;
        `
      : css`
          opacity: 1;
        `}
`;

const MenuToggleIcon = () => {
  const theme = useTheme();
  const { isMenuOpen, toggleMenu } = useContext(MenuContext);
  return (
    <StyledMenuButton onClick={toggleMenu}>
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill={theme.colors.grey900}
      >
        <path
          fill={theme.colors.grey900}
          strokeWidth="3"
          stroke={theme.colors.grey900}
          strokeLinecap="round"
          d={isMenuOpen ? 'M 3 16.5 L 17 2.5' : 'M 2 2.5 L 20 2.5'}
          // variants={{
          //   closed: { d: 'M 2 2.5 L 20 2.5' },
          //   open: { d: 'M 3 16.5 L 17 2.5' },
          // }}
        />
        <MiddlePath
          fill={theme.colors.grey900}
          strokeWidth="3"
          stroke={theme.colors.grey900}
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          isMenuOpen={isMenuOpen}
          // variants={{
          //   closed: { opacity: 1 },
          //   open: { opacity: 0 },
          // }}
        />
        <path
          fill={theme.colors.grey900}
          strokeWidth="3"
          stroke={theme.colors.grey900}
          strokeLinecap="round"
          d={isMenuOpen ? 'M 3 2.5 L 17 16.346' : 'M 2 16.346 L 20 16.346'}
          // variants={{
          //   closed: { d: 'M 2 16.346 L 20 16.346' },
          //   open: { d: 'M 3 2.5 L 17 16.346' },
          // }}
        />
      </svg>
    </StyledMenuButton>
  );
};

export default MenuToggleIcon;
