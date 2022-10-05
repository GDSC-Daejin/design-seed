import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ColorToken, isColorToken } from '@gdsc-dju/styled-components-theme';

export const NavWrapper = styled.nav`
  height: 70px;
  position: fixed;
  top: 0;
  z-index: 90;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 4px 30px ${({ theme }) => theme.colors.boxShadow100};
  width: 100vw;
  display: flex;
`;
export const NavLogoContainer = styled.div`
  display: flex;
  height: 70px;
  width: 100vw;
  align-items: center;
  position: absolute;
`;
export const NavLogoContainerInner = styled.div`
  width: 92%;
  margin: 0 auto;
  display: flex;
  position: relative;
  flex-direction: row;
`;
export const NavInner = styled.div`
  width: 92%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const ButtonWrapper = styled.div`
  z-index: 999;
  display: flex;
  flex-direction: row;
`;
export const NavTaskWrapper = styled.ul`
  display: flex;
  flex: 1;
  align-items: center;
  list-style: none;
  position: relative;
`;

export const LinkWrapper = styled.ul`
  margin-left: 20px;
  display: none;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  @media (min-width: 800px) {
    display: flex;
  } ;
`;
export const StyledLi = styled.li<{
  color: ColorToken | string;
}>`
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  border-radius: 8px;
  margin-left: 0;
  &:first-child {
    margin-left: 16px;
  }
  cursor: pointer;
  ${({ color }) =>
    color && isColorToken(color)
      ? css`
          &:hover {
            color: ${({ theme }) => theme.colors[color]};
            background-color: ${({ theme }) => theme.colors.grey100};
            backdrop-filter: blur(10px);
            text-decoration: none;
          }
        `
      : css`
          &:hover {
            color: ${color};
            background-color: ${({ theme }) => theme.colors.grey100};
            backdrop-filter: blur(10px);
            text-decoration: none;
          }
        `}
`;

export const StyledLink = styled(Link)<{
  active: boolean;
  color: ColorToken | string;
}>`
  padding: 10px 15px;
  list-style: none;
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.grey700};
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-transform: capitalize;
  ${({ active, color }) =>
    active && color && isColorToken(color)
      ? css`
          color: ${({ theme }) => theme.colors[color]};
        `
      : css`
          color: ${color};
        `};
`;

export const MenuButtonWrapper = styled.div<{
  position: 'left' | 'right' | 'left-mobile-only' | 'right-mobile-only';
}>`
  cursor: pointer;
  ${({ position }) =>
    position === 'left' &&
    css`
      margin-right: 50px;
      @media (max-width: 600px) {
        margin-right: 20px;
      }
    `};
  ${({ position }) =>
    position === 'left-mobile-only' &&
    css`
      margin-right: 20px;
    `};
  ${({ position }) =>
    (position === 'right' || position === 'right-mobile-only') &&
    css`
      margin-left: 10px;
    `};
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ position }) =>
    (position == 'left-mobile-only' || position == 'right-mobile-only') &&
    css`
      @media (min-width: 800px) {
        display: none;
      }
    `}
`;
