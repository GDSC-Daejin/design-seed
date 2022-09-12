import styled, { css } from 'styled-components';
export const MobileMenuWrapper = styled.nav `
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 100vw;
  z-index: 91;
  transition: all 0.3s ease-out;
  ${({ animate }) => animate
    ? css `
          transform: translateX(100vw);
        `
    : css `
          transform: translateX(-100vw);
        `};
`;
//# sourceMappingURL=styled.js.map