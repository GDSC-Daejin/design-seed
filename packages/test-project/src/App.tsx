import styled, { createGlobalStyle } from 'styled-components';
import { FontScheme } from '../../styled-theme';
import ThemeToggleButton from './ThemeToggleButton';

const GlobalStyle = createGlobalStyle`
html{
  background: ${({ theme }) => theme.colors.background};
}
`;

const Title = styled.h1<{ fontSize: keyof FontScheme }>`
  color: ${({ theme }) => theme.colors.grey900};
  font-size: ${({ theme, fontSize }) => theme.fontSize[fontSize]};
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeToggleButton />
      <Title fontSize={'titleXxl'}>
        titleXxl Google Developer Student Clubs
      </Title>
      <Title fontSize={'titleXl'}>titleXl Google Developer Student Clubs</Title>
      <Title fontSize={'titleL'}>titleL Google Developer Student Clubs</Title>
      <Title fontSize={'titleM'}>titleM Google Developer Student Clubs</Title>
      <Title fontSize={'titleS'}>titleS Google Developer Student Clubs</Title>
      <Title fontSize={'textXxl'}>textXxl Google Developer Student Clubs</Title>
      <Title fontSize={'textXl'}>textXl Google Developer Student Clubs</Title>
      <Title fontSize={'textL'}>textL Google Developer Student Clubs</Title>
      <Title fontSize={'textM'}>textM Google Developer Student Clubs</Title>
      <Title fontSize={'textS'}>textS Google Developer Student Clubs</Title>
    </>
  );
}

export default App;
