import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import Toast from 'react-native-toast-message';
import MainContainer from '../components/MainContainer';
import SearchableDropdown from '../components/SearchableDropdown';
import BestMythicPlusRuns from '../components/BestMythicPlusRuns';

import CharacterBanner from '../components/CharacterBanner';
import CharacterContext from '../context/CharacterContext';

const defaultData = {
  achievement_points: 0,
  name: '',
  region: '',
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

const displayToast = (status, message) => {
  Toast.show({
    text1: status,
    text2: message,
    topOffset: 50,
  });
};

const HomeScreen = props => {
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
      <CharacterBanner />
      <BestMythicPlusRuns />
      <Toast ref={ref => Toast.setRef(ref)} />
      <SearchableDropdown
        placeholderOne="Realm"
        placeholderTwo="Name"
        displayToast={displayToast}
      />
    </MainContainer>
  );
};

export default HomeScreen;
