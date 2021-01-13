import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from '@emotion/native';
import AffixImages from '../data/affixImages';
import dungeonImages from '../data/dungeonImages';
import { Run } from '../Types';

const Card = styled.View`
  width: 80%;
  height: 30px;
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
  );
};

export default MythicPlusRunCard;
