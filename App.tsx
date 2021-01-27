import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Toast from 'react-native-toast-message';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

type Props = any;

const App: React.FC<Props> = () => {
  const [isDataFetched, setIsDataFetched] = useState(false);

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
              height: 70,
            },
            headerTitleStyle: {
              color: '#3776A8',
              fontFamily: 'Helvetica',
              fontWeight: '400',
            },
          }}
        />
      </Stack.Navigator>
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
    </NavigationContainer>
  );
};

export default App;
