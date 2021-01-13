import React, { useState } from 'react';
import { Button, Text, SearchBar } from 'react-native-elements';
import { View } from 'react-native';
import MainContainer from '../components/MainContainer';
import SearchableDropdown from '../components/SearchableDropdown';
import BestMythicPlusRuns from '../components/BestMythicPlusRuns';
import { CharacterInformation } from '../Types';

const defaultData = {
  achievement_points: 0,
  active_spec_name: '',
  active_spec_role: '',
  class: '',
  faction: '',
  gender: '',
  honorable_kills: 0,
  last_crawled_at: '',
  mythic_plus_best_runs: [],
};

const HomeScreen = (navigation: any) => {
  const [characterInformation, setCharacterInformation] = useState(defaultData);

  return (
    <MainContainer zIndex={0}>
      <View
        style={{
          width: '100%',
          height: 90,
        }}
      />
      <BestMythicPlusRuns characterRuns={characterInformation} />
      <SearchableDropdown
        placeholderOne="Realm"
        placeholderTwo="Name"
        updater={setCharacterInformation}
      />
    </MainContainer>
  );
};

export default HomeScreen;
