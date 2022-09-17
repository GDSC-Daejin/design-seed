import styled, { css } from 'styled-components';
export const SideMenuWrapper = styled.nav `
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 91;
  transition: all 0.3s ease-out;
  background: #222222;
  backdrop-filter: blur(10px);
  ${({ animate }) => animate
    ? css `
          visibility: visible;
          opacity: 0.7;
          //transform: translateX(100vw);
        `
    : css `
          visibility: hidden;
          opacity: 0;
          //transform: translateX(-100vw);
        `};
`;
//# sourceMappingURL=styled.js.map