import React from 'react';
import styled from '@emotion/native';
import { View, Text } from 'react-native';

const BannerContainer = styled.View`
  width: 100%;
  height: 50px;
  background-color: #101114;
`;
type Props = {
  score: number;
  name: string;
  charClass: string;
  active_spec_name: string;
  active_spec_role: string;
};

const CharacterBanner = ({
  score,
  name,
  charClass,
  active_spec_name,
  active_spec_role,
}: Props) => {
  if (name !== '') {
    return (
      <BannerContainer>
        <Text>{score}</Text>
      </BannerContainer>
    );
  }
  return <></>;
};

export default CharacterBanner;
