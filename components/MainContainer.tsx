import React from 'react';
import styled from '@emotion/native';
import { View } from 'react-native';

const Container = styled.View`
  background-color: #101114;
  margin: 0;
  padding: 0;
  height: 100%;
`;

const MainContainer = ({ children }: any) => {
  return <Container>{children}</Container>;
};

export default MainContainer;
