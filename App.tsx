import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

type Props = any;

const App: React.FC<Props> = () => {
  return (
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
            },
            headerTitleStyle: {
              color: '#3776A8',
              fontFamily: 'Helvetica',
              fontWeight: '400',
            },
          }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
