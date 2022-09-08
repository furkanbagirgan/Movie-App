import React, {useState} from 'react';
import {Alert, SafeAreaView, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';

import styles from './Signup.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {setCurrentUser} from '../../redux/authSlice';
import {setTheme} from '../../redux/themeSlice';
import axios from 'axios';

const Signup = ({navigation}) => {
  //Necessary states are created.
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();

  ////By checking the email from the server, user data and the first theme value are saved to redux and storage.
  const signup = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://192.168.1.4:3000/userLogins?email=${email}`,
      );
      if (response.status === 200) {
        const userLogins = response.data;
        if (userLogins.length === 0) {
          const userLogin = {
            email,
            password,
            userName,
          };
          const res = await axios.post(
            'http://192.168.1.4:3000/userLogins',
            userLogin,
          );
          if (res.status === 201) {
            await AsyncStorage.setItem('@userData', JSON.stringify(userLogin));
            await AsyncStorage.setItem('@themeData', JSON.stringify('light'));
            dispatch(setCurrentUser(userLogin));
            dispatch(setTheme('light'));
          } else {
            Alert.alert('Error', 'Connection error!');
          }
        } else {
          Alert.alert(
            'Error',
            'An account with this email address already exists!',
          );
        }
      } else {
        Alert.alert('Error', 'Connection error!');
      }
    } catch (error) {
      console.log(error.message);
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
      <Input
        placeholder="Repeat Password"
        placeholderTextColor="#C996CC"
        value={repeatPassword}
        iconName="lock"
        onChangeText={setRepeatPassword}
        secureTextEntry={true}
      />
      <Input
        placeholder="User Name"
        placeholderTextColor="#C996CC"
        value={userName}
        iconName="at"
        onChangeText={setUserName}
      />
      <Button title="Sign Up" loading={loading} onClick={signup} />
    </SafeAreaView>
  );
};

export default Signup;
