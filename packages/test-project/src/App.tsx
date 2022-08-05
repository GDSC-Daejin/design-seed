import styled, { createGlobalStyle } from 'styled-components';
import { DarkModeContext, FontScheme } from '../../styled-components/index';
import { useContext } from 'react';

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
  const { isDarkMode, toggleTheme } = useContext(DarkModeContext);
  return (
    <>
      <GlobalStyle />
      <button onClick={() => toggleTheme()}>
        {isDarkMode ? 'dark' : 'light'}
      </button>
      <Title fontSize={'h1'}>h1 Google Developer Student Clubs</Title>
      <Title fontSize={'h2'}>h2 Google Developer Student Clubs</Title>
      <Title fontSize={'h3'}>h3 Google Developer Student Clubs</Title>
      <Title fontSize={'h4'}>h4 Google Developer Student Clubs</Title>
      <Title fontSize={'h5'}>h5 Google Developer Student Clubs</Title>
      <Title fontSize={'h6'}>h6 Google Developer Student Clubs</Title>
      <Title fontSize={'h7'}>h7 Google Developer Student Clubs</Title>
      <Title fontSize={'body1'}>body1 Google Developer Student Clubs</Title>
      <Title fontSize={'body2'}>body2 Google Developer Student Clubs</Title>
      <Title fontSize={'body3'}>body3 Google Developer Student Clubs</Title>
      <Title fontSize={'body4'}>body4 Google Developer Student Clubs</Title>
    </>
  );
}

export default App;
