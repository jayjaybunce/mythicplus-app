import React from 'react';
import styled from '@emotion/native';
import { View, Text, Image } from 'react-native';
import { get } from 'https';
import { diff } from 'react-native-reanimated';
import RoleIcons from '../data/roleIcons';
import ClassAttributes from '../data/classAttributes';

const getTimeSinceUpdate = (dateString: string): string => {
  const lastUpdatedDate = new Date(dateString);
  const currentDate = new Date();
  const lastUpdatedMs = lastUpdatedDate.getTime();
  const currentDateMs = currentDate.getTime();
  const difference = currentDateMs - lastUpdatedMs;

  const hoursSinceUpdate = difference / 1000 / 3600;
  const minutesSinceUpdate = difference / 3600000;
  if (hoursSinceUpdate > 24) {
    const daysSinceUpdate = hoursSinceUpdate / 24;
    if (daysSinceUpdate.toFixed(0) === '1') {
      return `Last updated a day ago`;
    }
    return `Last updated ${daysSinceUpdate.toFixed(0)} days ago`;
  }
  if (hoursSinceUpdate > 1) {
    return `Last updated ${hoursSinceUpdate.toFixed(0)} hours ago`;
  }
  if (hoursSinceUpdate < 1) {
    if (minutesSinceUpdate < 1) {
      return `Last updated a minute ago`;
    }
    return `Last updated ${minutesSinceUpdate.toFixed(0)} minutes ago`;
  }

  return `Request an update`;
};

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

// type Props = {
//   score: number;
//   name: string;
//   charClass: string;
//   active_spec_name: string;
//   active_spec_role: string;
// };

const CharacterBanner = ({ score, characterInformation }) => {
  const { name } = characterInformation;
  if (name !== '') {
    const role = characterInformation.active_spec_role;
    const spec = characterInformation.active_spec_name;
    const charClass = characterInformation.class;
    const itemLevel = characterInformation.gear.item_level_equipped;
    const timeSinceUpdate = getTimeSinceUpdate(
      characterInformation.last_crawled_at,
    );
    const getGearColor = (num: number) => {
      if (num > 200) {
        return '#8F30DF';
      }
      if (num > 190) {
        return '#0059E3';
      }
      return '#00FD3A';
    };
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
            <BadgeText>{score.toFixed(1)}</BadgeText>
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
