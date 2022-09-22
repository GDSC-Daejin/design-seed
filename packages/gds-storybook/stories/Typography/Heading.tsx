import React, { ReactNode, forwardRef } from 'react';
import styled from 'styled-components';
import { ColorToken, FontToken } from '@gdsc-dju/styled-components';

export type HeadingProps = {
  label: ReactNode;
  size?: FontToken;
  color?: ColorToken;
};

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ label, size = 'titleXxl', color = 'grey800' }, ref) => {
    return (
      <HeadingElement size={size} color={color} ref={ref}>
        {label}
      </HeadingElement>
    );
  },
);

export const HeadingElement = styled.h1<{
  size: FontToken;
  color: ColorToken;
}>`
  font-size: ${({ theme, size }) => theme.fontSizes[size]};
  color: ${({ theme, color }) => theme.colors[color]};
`;

export default Heading;
