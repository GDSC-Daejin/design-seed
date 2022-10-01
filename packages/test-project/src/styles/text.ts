import styled from 'styled-components';
import { FontScheme } from '@gdsc-dju/styled-components-theme';

export const Title = styled.h1<{ fontSize: keyof FontScheme }>`
  color: ${({ theme }) => theme.colors.grey900};
  font-size: ${({ theme, fontSize }) => theme.fontSizes[fontSize]};
`;
