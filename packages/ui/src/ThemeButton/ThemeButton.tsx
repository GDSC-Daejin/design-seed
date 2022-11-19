import React, { useContext, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import DarkModeIcon from '../assets/darkModeIcon';
import LightModeIcon from '../assets/lightModeIcon';
import { DarkModeContext } from '@gdsc-dju/styled-components-theme';

const startAnimation = keyframes`
  0% {
    transform: rotate(200deg);
    scale: 0.5;
    opacity: 0.5;
  }
  100% {
    transform: rotate(360deg);
    scale: 1;
    opacity: 1;
  }
`;

const StyledThemeButton = styled.button`
  padding: 7px;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 0 solid transparent;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    transition: 0.3s;
    background: ${({ theme }) => theme.colors.grey50};
  }
`;
const ButtonWrapper = styled.div<{ isActive: boolean }>`
  animation-fill-mode: forwards;
  animation: ${({ isActive }) => isActive && startAnimation} 0.6s ease-in-out;
`;

const ThemeButton = () => {
  const { isDarkMode, toggleTheme } = useContext(DarkModeContext);
  const [animate, setAnimate] = useState(false);

  return (
    <StyledThemeButton
      name={'theme-toggle-button'}
      aria-label={'theme-toggle-button'}
      onClick={() => {
        setAnimate(true);
        toggleTheme();
      }}
    >
      <ButtonWrapper
        isActive={animate}
        onAnimationEnd={() => setAnimate(false)}
      >
        {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
      </ButtonWrapper>
    </StyledThemeButton>
  );
};
export default ThemeButton;