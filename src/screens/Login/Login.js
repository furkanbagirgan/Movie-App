import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {
  //Necessary states are created.
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //The user data entered here and the initial theme are saved to the contexts and storage.
  const login = async () => {
    setLoading(true);
    try {
      const userData = JSON.stringify({
        email,
        password,
      });
      await AsyncStorage.setItem('@userData', userData);
      await AsyncStorage.setItem('@themeData', JSON.stringify('light'));
      //redux'a kaydedilecek
    } catch (error) {
      console.log('Storage Write Error');
    }
    setLoading(false);
  };

  //Here, inputs for user data and button are pressed to the screen.
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Movie App</Text>
      <Input
        placeholder="Email"
        placeholderTextColor="#C996CC"
        value={email}
        iconName="email"
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Input
        placeholder="Password"
        placeholderTextColor="#C996CC"
        value={password}
        iconName="lock"
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="Login" loading={loading} onClick={login} />
    </SafeAreaView>
  );
};

export default Login;
