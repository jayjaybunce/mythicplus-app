import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import UserContext from './context/UserContext';
import CharacterContext from './context/CharacterContext';

const Stack = createStackNavigator();

type Props = any;

const defContext = {
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

const App: React.FC<Props> = () => {
  const userContextHook = useState({ user: null });
  const charContextHook = useState(defContext);
  return (
    <UserContext.Provider value={userContextHook}>
      <CharacterContext.Provider value={charContextHook}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'Find your Character',
                headerStyle: {
                  backgroundColor: '#0e1014',
                  borderBottomWidth: 0,
                  shadowColor: 'transparent',
                  height: 70,
                },
                headerTitleStyle: {
                  color: '#3776A8',
                  fontFamily: 'Helvetica',
                  fontWeight: '400',
                },
              }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                title: 'Login',
                headerStyle: {
                  backgroundColor: '#0e1014',
                  borderBottomWidth: 0,
                  shadowColor: 'transparent',
                  height: 40,
                },
                headerTitleStyle: {
                  color: '#3776A8',
                  fontFamily: 'Helvetica',
                  fontWeight: '400',
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </CharacterContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
