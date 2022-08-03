import React, { ReactNode, forwardRef } from 'react';
import styled from 'styled-components';
import { ColorTheme } from '@gdsc-dju/styled-components';
import { fontSize } from '@gdsc-dju/styled-components/src/styles/fontSize';

export type HeadingProps = {
  /** 제목 안의 내용 */
  label: ReactNode;
  /** 사이즈 */
  size?: keyof typeof fontSize;
  color?: keyof ColorTheme;
};

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ label, size = 'h1', color = 'grey800' as keyof ColorTheme }, ref) => {
    return (
      <HeadingElement size={size} color={color}>
        {label}
      </HeadingElement>
    );
  },
);

const HeadingElement = styled.h1<{
  size: keyof typeof fontSize;
  color: keyof ColorTheme;
}>`
  font-size: ${({ theme, size }) => theme.fontSize[size]};
  color: ${({ theme, color }) => theme.colors[color]};
`;

export default Heading;
