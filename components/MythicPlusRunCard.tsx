import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import styled from '@emotion/native';
import AffixImages from '../data/affixImages';
import DungeonSplashImages from '../data/dungeonSplashImages';
import { Run } from '../Types';

const Card = styled.View`
  width: 90%;
  margin: 0 auto;
  height: 100px;
  display: flex;
  flex-direction: row;
  z-index: 0;
`;

const AffixImage = styled.Image`
  height: 20px;
  width: 20px;
  z-index: 0;
`;

const AffixContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 30%;
  justify-content: space-around;
  z-index: 0;
`;
const Title = styled.Text``;

type Props = {
  data: Run;
};

const MythicPlusRunCard = ({ data }: Props) => {
  return (
    <ImageBackground
      source={DungeonSplashImages[data.dungeon]}
      style={{
        width: '100%',
        height: 100,
      }}
    >
      <Card>
        <Title>{data.dungeon}</Title>

        <Text>
          {data.mythic_level}

          {data.num_keystone_upgrades}
        </Text>
        <AffixContainer>
          {data.affixes.map((affix, index) => {
            return (
              <AffixImage source={AffixImages[affix.name]} key={affix.name} />
            );
          })}
        </AffixContainer>
      </Card>
    </ImageBackground>
  );
};

export default MythicPlusRunCard;
