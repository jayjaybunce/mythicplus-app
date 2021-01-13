import React, { useState } from 'react';
import { Button, Text, Input } from 'react-native-elements';
import styled from '@emotion/native';
import { View } from 'react-native';
import MainContainer from '../components/MainContainer';

function onPressLogin() {
  alert('Try to log the user in using Battle.net OAuth');
}
const LoginScreen = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <MainContainer>
      <Input
        placeholder="email@emailadress.com"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={onPressLogin} />
    </MainContainer>
  );
};

export default LoginScreen;
