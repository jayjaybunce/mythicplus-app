import React, { useState } from 'react';
import { Button, Text, SearchBar } from 'react-native-elements';
import { View, ScrollView, SafeAreaView } from 'react-native';
import MainContainer from '../components/MainContainer';
import SearchableDropdown from '../components/SearchableDropdown';
import BestMythicPlusRuns from '../components/BestMythicPlusRuns';
import { CharacterInformation, Run } from '../Types';
import CharacterBanner from '../components/CharacterBanner';

const defaultData = {
  achievement_points: 0,
  name: '',
  active_spec_name: '',
  active_spec_role: '',
  class: '',
  faction: '',
  gender: '',
  honorable_kills: 0,
  last_crawled_at: '',
  mythic_plus_best_runs: [],
  gear: {
    item_level_equipped: 0,
    item_level_total: 0,
    artifact_traits: 0,
    corruption: {
      added: 0,
      resisted: 0,
      total: 0,
      cloakRank: 0,
      spells: [],
    },
    items: [],
  },
};

type Props = null;

const HomeScreen: React.FC<Props> = props => {
  const [characterInformation, setCharacterInformation] = useState(defaultData);
  const [overallScore, setOverallScore] = useState(0);
  return (
    <MainContainer zIndex={0}>
      <View
        style={{
          width: '100%',
          height: 73,
        }}
      />
      <CharacterBanner
        score={overallScore}
        characterInformation={characterInformation}
      />

      <BestMythicPlusRuns characterRuns={characterInformation} />

      <SearchableDropdown
        placeholderOne="Realm"
        placeholderTwo="Name"
        updater={setCharacterInformation}
        setOverallScore={setOverallScore}
        characterInformation={characterInformation}
      />
    </MainContainer>
  );
};

export default HomeScreen;
