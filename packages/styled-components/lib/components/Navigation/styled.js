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
  gap: 4px;
`;
export const LogoTitle = styled.div `
  margin-left: 4px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.textXxl};
  color: ${({ theme }) => theme.colors.grey800};
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
  @media (min-width: 800px) {
    display: flex;
  } ;
`;
export const StyledLi = styled.li `
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  border-radius: 8px;
  padding: 10px 15px;
  margin-left: 0;
  &:first-child {
    margin-left: 16px;
  }
  cursor: pointer;
  ${({ pointColor }) => pointColor &&
    css `
      &:hover {
        color: ${({ theme }) => theme.colors[pointColor]};
        background-color: ${({ theme }) => theme.colors.grey100};
        backdrop-filter: blur(10px);
        text-decoration: none;
      }
    `}
`;
export const StyledLink = styled(Link) `
  text-decoration: none;
  list-style: none;
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.grey700};
  transition: all 0.2s ease-in-out;
  ${({ isRoute, pointColor }) => isRoute &&
    pointColor &&
    css `
      color: ${({ theme }) => theme.colors[pointColor]};
    `};
`;
export const MenuButtonWrapper = styled.div `
  cursor: pointer;
  ${({ position }) => position === 'left' &&
    css `
      margin-right: 50px;
      @media (max-width: 600px) {
        margin-right: 20px;
      }
    `};
  ${({ position }) => position === 'left-mobile-only' &&
    css `
      margin-right: 20px;
    `};
  ${({ position }) => (position === 'right' || position === 'right-mobile-only') &&
    css `
      margin-left: 10px;
    `};
  z-index: 999;
  display: flex;
  align-items: center;
  ${({ position }) => (position == 'left-mobile-only' || position == 'right-mobile-only') &&
    css `
      @media (min-width: 800px) {
        display: none;
      }
    `}
`;
//# sourceMappingURL=styled.js.map