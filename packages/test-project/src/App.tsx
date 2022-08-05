import styled, { createGlobalStyle } from 'styled-components';
import { DarkModeContext } from '../../styled-components/index';
import { useContext } from 'react';

const GlobalStyle = createGlobalStyle`
html{
  background: ${({ theme }) => theme.colors.background};
}
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.grey900};
`;
function App() {
  const { isDarkMode, toggleTheme } = useContext(DarkModeContext);

  return (
    <>
      <GlobalStyle />
      <Title>안녕안녕</Title>
      <button onClick={() => toggleTheme()}>change theme</button>
    </>
  );
}

export default App;
