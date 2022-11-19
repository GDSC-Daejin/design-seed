import React, { forwardRef, HTMLAttributes } from 'react';

import { ColorToken, isColorToken } from '@gdsc-dju/styled-components-theme';

import styled, { css } from 'styled-components';

import GDSCLogo from '../assets/GDSCLogo';

interface NavigationLogoProps extends HTMLAttributes<HTMLDivElement> {
  customLogo?: React.ReactNode;
  title?: string;
  pointColor?: ColorToken | string;
}

export const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.textXl};
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.windowSizes.mobile}px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const NavSubtitle = styled.div<{ color?: ColorToken | string }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grey600};
  font-size: ${({ theme }) => theme.fontSizes.textM};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  word-break: keep-all;
  margin-top: 2px;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* 인터넷익스플로러 */
  user-select: none;
  ${({ color }) =>
    color && isColorToken(color)
      ? css`
          color: ${({ theme }) => theme.colors[color]};
        `
      : css`
          color: ${color};
        `}
`;
export const LogoTitle = styled.div`
  margin-left: 4px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.textXxl};
  color: ${({ theme }) => theme.colors.grey800};
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* 인터넷익스플로러 */
  user-select: none;
`;
export const LogoTextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 4px;
  @media (max-width: ${({ theme }) => theme.windowSizes.mobile}px) {
    display: none;
  }
`;

const NavigationLogo = forwardRef<HTMLDivElement, NavigationLogoProps>(
  ({ customLogo, title, pointColor, ...rest }, ref) => {
    return (
      <>
        {customLogo ? (
          <>{customLogo}</>
        ) : (
          <StyledLogoWrapper ref={ref} {...rest}>
            <GDSCLogo />
            <LogoTextWrapper>
              <LogoTitle>GDSC</LogoTitle>
              {title ? (
                <>
                  <NavSubtitle>DJU</NavSubtitle>
                  <NavSubtitle color={pointColor}>{title}</NavSubtitle>
                </>
              ) : (
                <>
                  <NavSubtitle color={pointColor}>Daejin</NavSubtitle>
                  <NavSubtitle color={pointColor}>Univ.</NavSubtitle>
                </>
              )}
            </LogoTextWrapper>
          </StyledLogoWrapper>
        )}
      </>
    );
  },
);

export default NavigationLogo;