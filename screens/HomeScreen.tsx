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
};

const HomeScreen = (navigation: any) => {
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
      <SafeAreaView
        style={
          {
            //   marginTop: -17,
          }
        }
      >
        <ScrollView
          bounces={false}
          style={{
            height: 530,
          }}
        >
          <BestMythicPlusRuns characterRuns={characterInformation} />
        </ScrollView>
      </SafeAreaView>

      <SearchableDropdown
        placeholderOne="Realm"
        placeholderTwo="Name"
        updater={setCharacterInformation}
        setOverallScore={setOverallScore}
      />
    </MainContainer>
  );
};

export default HomeScreen;
