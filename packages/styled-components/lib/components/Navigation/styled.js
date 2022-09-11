import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
export const NavWrapper = styled.nav `
  height: 70px;
  position: fixed;
  top: 0;
  z-index: 90;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 4px 30px ${({ theme }) => theme.colors.boxShadow100};
  width: 100vw;
  display: flex;
`;
export const NavInner = styled.div `
  width: 92%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
export const NavTaskWrapper = styled.ul `
  display: flex;
  flex: 1;
  align-items: center;
  list-style: none;
  padding-left: 0;
`;
export const StyledLogoWrapper = styled(Link) `
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.textXl};
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;
export const LogoTitle = styled.div `
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.textXxl};
  color: ${({ theme }) => theme.colors.grey800}; ;
`;
export const NavSubtitle = styled.div `
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grey600};
  font-size: ${({ theme }) => theme.fontSizes.textM};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  word-break: keep-all;
  margin-top: 2px;
  ${({ color }) => color &&
    css `
      color: ${({ theme }) => theme.colors[color]};
    `}
`;
export const LinkWrapper = styled.ul `
  margin-left: 20px;
  display: none;
  flex-direction: row;
  @media (min-width: ${({ theme }) => theme.windowSizes.mobile}px) {
    display: flex;
  } ;
`;
export const StyledLi = styled.li `
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  border-radius: 8px;
  padding: 10px 15px;
  margin-left: 20px;
  ${({ pointColor }) => pointColor &&
    css `
      &:hover {
        color: ${({ theme }) => theme.colors[pointColor]};
        background-color: ${({ theme }) => theme.colors[pointColor]};
        backdrop-filter: blur(10px);
        opacity: 0.01;
        text-decoration: none;
        StyledLink {
          color: ${({ theme }) => theme.colors[pointColor]};
        }
      }
    `}
`;
export const StyledLink = styled(Link) `
  text-decoration: none;
  list-style: none;
  font-size: ${({ theme }) => theme.fontSizes.textL};
  color: ${({ theme }) => theme.colors.grey700};
  cursor: pointer;
  ${({ isRoute, pointColor }) => isRoute &&
    pointColor &&
    css `
      color: ${({ theme }) => theme.colors[pointColor]};
    `};
  &:first-child {
    border-left: 0;
  }
`;
//# sourceMappingURL=styled.js.map