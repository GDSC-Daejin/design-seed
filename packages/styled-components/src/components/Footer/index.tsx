import {
  FooterCopyRight,
  FooterLogo,
  FooterText,
  FooterWrapper,
} from './styled';

export interface FooterProps {
  disable?: boolean;
  pages?: { text: string; link: string }[];
}

export const Footer = ({ disable = false, pages }: FooterProps) => {
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
                <FooterText key={page.text} google={true} href={page.link}>
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
