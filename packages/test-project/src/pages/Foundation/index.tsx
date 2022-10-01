import React from 'react';
import { FileInput, TextArea, TextInput } from '@gdsc-dju/styled-components';
import { Title } from '../../styles/text';
import {
  ContainerInner,
  LayoutContainer,
  TopMargin,
} from '../../styles/layouts';

const Foundation = () => {
  const ref = React.useRef<HTMLInputElement>(null);

  return (
    <LayoutContainer>
      <ContainerInner>
        <Title fontSize={'titleXl'}>TextInput</Title>
        <TextInput placeholder={'값을 입력해주세요'} />
        <TopMargin />
        <Title fontSize={'titleXl'}>TextArea</Title>
        <TextArea placeholder={'값을 입력해주세요'} />
        <TopMargin />
        <Title fontSize={'titleXl'}>FileInput</Title>
        <FileInput defaultPlaceholder={'Choose File'} ref={ref} />
      </ContainerInner>
    </LayoutContainer>
  );
};

export default Foundation;
