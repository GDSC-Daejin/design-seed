import { ColorToken, isColorToken } from '@gdsc-dju/styled-components-theme';
import React from 'react';
import GDSCLogo from '../../assets/GDSCLogo';

import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

type NavigationLogoProps = {
  customLogo?: React.ReactNode;
  title?: string;
  pointColor?: ColorToken | string;
};

export const StyledLogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.textXl};
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;

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

const NavigationLogo = ({
  customLogo,
  title,
  pointColor,
}: NavigationLogoProps) => {
  return (
    <>
      {customLogo ? (
        <>{customLogo}</>
      ) : (
        <StyledLogoWrapper to={'/'}>
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
};

export default NavigationLogo;
