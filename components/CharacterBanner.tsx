import React, { useContext } from 'react';
import styled from '@emotion/native';
import { View, Text, Image } from 'react-native';
import { get } from 'https';
import { diff } from 'react-native-reanimated';
import RoleIcons from '../data/roleIcons';
import ClassAttributes from '../data/classAttributes';
import CharacterContext from '../context/CharacterContext';
import getTimeSinceUpdate from '../utils/TimeAndDate';
import getGearColor from '../utils/classUtils';

const BannerContainer = styled.View`
  width: 100%;
  height: 50px;
  background-color: #101114;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 1px;
  flex-wrap: wrap;
`;

const RoleImage = styled.Image`
  height: 30px;
  width: 30px;
`;

const Badge = styled.View`
  height: 35px;
  width: auto;
  display: flex;
  flex-direction: row;
  padding: 5px;
  background-color: #090b0d;
  border-radius: 8px;
`;

const SmallBadge = styled.View`
  height: 35px;
  width: auto;
  display: flex;
  flex-direction: row;
  border-radius: 8px;
`;

const BadgeText = styled.Text`
  color: white;
  font-size: 15px;
  font-family: Helvetica;
  line-height: 25px;
`;
const BadgeTitle = styled.Text`
  color: white;
  font-size: 15px;
  font-family: Helvetica;
  font-weight: 200;
  line-height: 25px;
`;

const BadgeContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const CharacterBanner = props => {
  const [characterContext, setCharacterContext] = useContext(CharacterContext);
  const { name } = characterContext;
  if (name !== '') {
    const {
      role,
      spec,
      charClass,
      itemLevel,
      timeSinceUpdate,
    } = characterContext;
    return (
      <BannerContainer>
        <BadgeContainer>
          <Badge>
            <RoleImage
              source={ClassAttributes[charClass].icon}
              style={{
                height: 20,
                width: 20,
                marginTop: 3,
              }}
            />
            <RoleImage
              style={{ height: 25, width: 25 }}
              source={RoleIcons[role]}
            />
            <BadgeText
              style={{
                color: ClassAttributes[charClass].color,
              }}
            >
              {name}
            </BadgeText>
          </Badge>
          <Badge>
            <BadgeText>{spec}</BadgeText>
          </Badge>
          <Badge>
            <BadgeTitle>{`Score `}</BadgeTitle>
            <BadgeText>{characterContext.score.toFixed(1)}</BadgeText>
          </Badge>

          <Badge>
            <BadgeTitle>{`iLvl `}</BadgeTitle>
            <BadgeText
              style={{
                color: getGearColor(itemLevel),
              }}
            >
              {itemLevel}
            </BadgeText>
          </Badge>
        </BadgeContainer>
        <SmallBadge>
          <BadgeTitle>{timeSinceUpdate}</BadgeTitle>
        </SmallBadge>
      </BannerContainer>
    );
  }
  return <></>;
};

export default CharacterBanner;
