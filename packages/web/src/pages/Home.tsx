import React from 'react';

import styled from 'styled-components';

import { useTheme } from '../hooks/useTheme';
import { ContainerInner, LayoutContainer } from '../styles/layouts';

const StyledH1 = styled.h1`
  color: var(--grey900);
`;

const Home = () => {
  const [theme, themeHandler] = useTheme();
  return (
    <LayoutContainer>
      <ContainerInner>
        <StyledH1>home</StyledH1>
        <button onClick={() => themeHandler()}>theme toggle</button>
      </ContainerInner>
    </LayoutContainer>
  );
};

export default Home;
