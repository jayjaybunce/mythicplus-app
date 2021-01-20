import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import styled from '@emotion/native';
import { runInContext } from 'vm';
import AffixImages from '../data/affixImages';
import DungeonSplashImages from '../data/dungeonSplashImages';
import { Run } from '../Types';

const Card = styled.View`
  width: 100%;
  margin: 0 auto;
  height: 100px;
  display: flex;
  flex-direction: row;
  z-index: 0;
  border-left-width: 5px;
  padding: 5px;
`;

const CardImage = styled.ImageBackground`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
`;

const AffixImage = styled.Image`
  height: 20px;
  width: 20px;
  z-index: 0;
`;

const AffixContainer = styled.View`
  z-index: 0;
  position: absolute;
  margin-top: 68px;
  width: 100%;
`;

const InnerAffixContainer = styled.View`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: rgba(17, 18, 20, 0.6);

  padding: 5px;
  border-radius: 5px;
  margin: 0 auto;
`;
const Title = styled.Text`
  font-family: Helvetica;
  font-size: 22px;
  color: white;
  font-weight: 400;
  width: 55%;
  text-shadow: 0 0 3px #2c6999;
  margin-top: 10px;
  margin-left: 10px;
  position: absolute;
`;

const Level = styled.Text`
  font-family: Helvetica;
  font-size: 25px;
  color: #e6c47b;
  font-weight: 500;
  text-align: right;
  line-height: 100px;
  position: absolute;
  width: 100%;
  height: 100%;
`;

type Props = {
  data: Run;
};

const colors = {
  '0': '#00FE39',
  '1': '#0069F9',
  '2': '#9734E5',
  '3': '#FF7120',
};

const MythicPlusRunCard = ({ data }: Props) => {
  return (
    <CardImage source={DungeonSplashImages[data.dungeon]}>
      <Card
        style={{
          borderLeftColor: colors[`${data.num_keystone_upgrades}`],
        }}
      >
        <Title>{data.dungeon}</Title>

        {/* {data.num_keystone_upgrades} */}
        <Level
          style={
            {
              // color: colors[`${data.num_keystone_upgrades}`]
            }
          }
        >
          {`+${data.mythic_level}`}
        </Level>
        <AffixContainer>
          <InnerAffixContainer>
            {data.affixes.map((affix, index) => {
              return (
                <AffixImage source={AffixImages[affix.name]} key={affix.name} />
              );
            })}
          </InnerAffixContainer>
        </AffixContainer>
      </Card>
    </CardImage>
  );
};

export default MythicPlusRunCard;
