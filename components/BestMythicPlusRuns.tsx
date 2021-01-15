import React from 'react';
import styled from '@emotion/native';
import { View } from 'react-native';
import MythicPlusRunCard from './MythicPlusRunCard';
import { Run, Affix, CharacterInformation } from '../Types';

const Container = styled.View`
  z-index: 0;
`;

type Props = {
  characterRuns: CharacterInformation | null;
};

const BestMythicPlusRuns = ({ characterRuns }: Props) => {
  const elements: React.ReactNodeArray = [];
  try {
    if (characterRuns) {
      characterRuns.mythic_plus_best_runs.forEach((run: Run, index: number) => {
        elements.push(<MythicPlusRunCard data={run} key={run.dungeon} />);
      });
    }
  } catch (e) {
    if (e) {
      console.log(e);
    }
  }
  return <Container>{elements}</Container>;
};

export default BestMythicPlusRuns;
