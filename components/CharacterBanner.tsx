import React from 'react';
import styled from '@emotion/native';
import { View, Text, Image } from 'react-native';
import RoleIcons from '../data/roleIcons';
import ClassAttributes from '../data/classAttributes';

const getTimeSinceUpdate = (dateString: string) => {
  const lastUpdatedDate = new Date(dateString);
  const currentDate = new Date();
  const lastUpdatedMs = lastUpdatedDate.getTime();
  const currentDateMs = currentDate.getTime();
  const difference = currentDateMs - lastUpdatedMs;
};

const BannerContainer = styled.View`
  width: 100%;
  height: 50px;
  background-color: #101114;
  display: flex;
  flex-direction: row;
  padding: 1px;
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
  background-color: #171a20;
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
    return (
      <BannerContainer>
        <Badge>
          <BadgeText
            style={{
              color: ClassAttributes[charClass].color,
            }}
          >
            {name}
          </BadgeText>
        </Badge>
        <Badge>
          <BadgeTitle>{`Score `}</BadgeTitle>
          <BadgeText>{score.toFixed(1)}</BadgeText>
        </Badge>

        <Badge>
          <BadgeTitle>{`Item Level `}</BadgeTitle>
          <BadgeText>{itemLevel}</BadgeText>
        </Badge>
        <RoleImage source={RoleIcons[role]} />
        <RoleImage source={ClassAttributes[charClass].icon} />
      </BannerContainer>
    );
  }
  return <></>;
};

export default CharacterBanner;
