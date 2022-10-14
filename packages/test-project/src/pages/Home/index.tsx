import React from 'react';
import { Title } from '../../styles/text';
import {
  ContainerInner,
  LayoutContainer,
  TopMargin,
} from '../../styles/layouts';

const Home = () => {
  return (
    <LayoutContainer>
      <ContainerInner>
        <Title fontSize={'titleXxl'}>
          titleXxl Google Developer Student Clubs
        </Title>
        <TopMargin />
        <Title fontSize={'titleXl'}>
          titleXl Google Developer Student Clubs
        </Title>
        <TopMargin />
        <Title fontSize={'titleL'}>titleL Google Developer Student Clubs</Title>
        <TopMargin />
        <Title fontSize={'titleM'}>titleM Google Developer Student Clubs</Title>
        <TopMargin />
        <Title fontSize={'titleS'}>titleS Google Developer Student Clubs</Title>
        <TopMargin />
        <Title fontSize={'textXxl'}>
          textXxl Google Developer Student Clubs
        </Title>
        <TopMargin />
        <Title fontSize={'textXl'}>textXl Google Developer Student Clubs</Title>
        <TopMargin />
        <Title fontSize={'textL'}>textL Google Developer Student Clubs</Title>
        <TopMargin />
        <Title fontSize={'textM'}>textM Google Developer Student Clubs</Title>
        <TopMargin />
        <Title fontSize={'textS'}>textS Google Developer Student Clubs</Title>
      </ContainerInner>
    </LayoutContainer>
  );
};

export default Home;
