import React from 'react';

import styled, { css } from 'styled-components';

import { FooterProps } from './props';

export const FooterText = styled.a<{ google?: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.textL};
  font-weight: 600;
  margin-right: 20px;
  color: ${({ theme }) => theme.colors.grey600};
  cursor: pointer;
  white-space: nowrap;
  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}px) {
    margin-top: 10px;
  }
  ${({ google }) =>
    google &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.textXl};
      font-weight: 700;
      color: ${({ theme }) => theme.colors.grey700};
    `}
`;

export const FooterCopyRight = styled.span`
  display: inline-block;
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.grey600};
  white-space: nowrap;
  @media (max-width: ${({ theme }) => theme.windowSizes.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.textS};
  }
`;
export const FooterWrapper = styled.div`
  display: flex;
  bottom: 0;
  padding: 30px 40px;
  justify-content: space-between;
  width: 100vw;
  box-sizing: border-box;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.01);
  backdrop-filter: blur(10px);
  @media (max-width: ${({ theme }) => theme.windowSizes.mobile}px) {
    padding: 30px 20px;
  }
`;
export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex: 1;
  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}px) {
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const Footer = ({ disable = false, pages }: FooterProps) => {
  return (
    <>
      {!disable && (
        <FooterWrapper>
          <FooterLogo>
            <FooterText google={true} href={'https://developers.google.com/'}>
              Google
            </FooterText>
            <FooterText
              href={'https://developers.google.com/community-guidelines'}
            >
              Community guidelines
            </FooterText>
            {pages &&
              pages.map((page) => (
                <FooterText key={page.text} href={page.link}>
                  {page.text}
                </FooterText>
              ))}
          </FooterLogo>
          <FooterCopyRight>{'Copyright © '}GDSC Daejin</FooterCopyRight>
        </FooterWrapper>
      )}
    </>
  );
};
export default Footer;
