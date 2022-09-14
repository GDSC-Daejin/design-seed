import styled, { css } from 'styled-components';

export const MobileMenuWrapper = styled.nav<{ animate: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 91;
  transition: all 0.3s ease-out;
  ${({ animate }) =>
    animate
      ? css`
          visibility: visible;
          opacity: 1;
          //transform: translateX(100vw);
        `
      : css`
          visibility: hidden;
          opacity: 0;
          //transform: translateX(-100vw);
        `};
`;
