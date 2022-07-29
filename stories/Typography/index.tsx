import React, { ReactNode, forwardRef } from 'react';
import styled from 'styled-components';
import { fontSize } from '../../src/styles/fontSize';
import { lightColors } from '../../src/styles/lightColors';

export type HeadingProps = {
  /** 제목 안의 내용 */
  label: ReactNode;
  /** 사이즈 */
  size?: keyof typeof fontSize;
  color?: keyof typeof lightColors;
};

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ label, size = 'h1', color = 'grey800' }, ref) => {
    return (
      <HeadingElement size={size} color={color}>
        {label}
      </HeadingElement>
    );
  },
);

const HeadingElement = styled.h1<{
  size: keyof typeof fontSize;
  color: keyof typeof lightColors;
}>`
  font-size: ${({ theme, size }) => theme.fontSize[size]};
  color: ${({ theme, color }) => theme.colors[color]};
`;

export default Heading;
