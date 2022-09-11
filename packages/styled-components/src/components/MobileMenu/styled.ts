import styled, { css } from 'styled-components';

export const MobileMenuWrapper = styled.nav<{ animate: boolean }>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 100vw;
  z-index: 91;
  @media (min-width: 500px) {
    display: none;
  }
`;
export const MobileMenuBackground = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
  border: 0 solid;
  z-index: 900;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30%;
  border-color: ${(props) => props.theme.colors.grey200};
`;
export const StyledLink = styled.div<{ isRoute?: boolean }>`
  text-decoration: none;
  list-style: none;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey200};
  font-size: ${({ theme }) => theme.fontSizes.textXl};
  color: ${({ theme }) => theme.colors.grey900};
  margin-bottom: 10px;
  ${({ isRoute }) =>
    isRoute &&
    css`
      color: ${({ theme }) => theme.colors.blue200};
    `};
  &:hover {
    color: ${({ theme }) => theme.colors.blue200};
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    text-decoration: none;
  }
`;
export const MenuInner = styled.div`
  margin-top: 50px;
  padding: 25px;
  width: 200px;
  z-index: 999;
`;
export const MenuLogo = styled.img`
  width: 100px;
`;
