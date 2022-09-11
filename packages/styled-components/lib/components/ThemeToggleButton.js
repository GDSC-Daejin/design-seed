import { jsx as _jsx } from "react/jsx-runtime";
import { useContext, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import DarkModeIcon from '../assets/darkModeIcon';
import LightModeIcon from '../assets/lightModeIcon';
import { DarkModeContext } from '../contexts/DarkModeContext';
const startAnimation = keyframes `
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
const ThemeButton = styled.button `
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
const ButtonWrapper = styled.div `
  animation-fill-mode: forwards;
  animation: ${({ isActive }) => isActive && startAnimation} 0.6s ease-in-out;
`;
export const ThemeToggleButton = () => {
    const { isDarkMode, toggleTheme } = useContext(DarkModeContext);
    const [animate, setAnimate] = useState(false);
    return (_jsx(ThemeButton, { onClick: () => {
            setAnimate(true);
            toggleTheme();
        }, children: _jsx(ButtonWrapper, { isActive: animate, onAnimationEnd: () => setAnimate(false), children: isDarkMode ? _jsx(DarkModeIcon, {}) : _jsx(LightModeIcon, {}) }) }));
};
//# sourceMappingURL=ThemeToggleButton.js.map