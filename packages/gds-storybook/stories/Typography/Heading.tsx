import React, { ReactNode, forwardRef } from 'react';
import styled from 'styled-components';
import { ColorTheme, FontToken } from '@gdsc-dju/styled-components';

export type HeadingProps = {
  label: ReactNode;
  size?: FontToken;
  color?: keyof ColorTheme;
};

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    { label, size = 'TitleXxl', color = 'grey800' as keyof ColorTheme },
    ref,
  ) => {
    return (
      <HeadingElement size={size as FontToken} color={color} ref={ref}>
        {label}
      </HeadingElement>
    );
  },
);

export const HeadingElement = styled.h1<{
  size: FontToken;
  color: keyof ColorTheme;
}>`
  font-size: ${({ theme, size }) => theme.fontSizes[size]};
  color: ${({ theme, color }) => theme.colors[color]};
`;

export default Heading;
