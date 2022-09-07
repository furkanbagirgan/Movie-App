import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './Profile.style';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Profile = () => {
  //Necessary context data and states are created.
  //const {currentUser, setCurrentUser} = useUser();
  //const {theme} = useTheme();
  const [theme,setTheme]=useState('light');
  const [firstName, setFirstName] = useState(currentUser.firstName);
  const [lastName, setLastName] = useState(currentUser.lastName);
  const [userName, setUserName] = useState(currentUser.userName);

  //Changed user data here is updated via context and storage.
  const save = async () => {
    try {
      const userValue = JSON.stringify({
        ...currentUser,
        firstName,
        lastName,
        userName,
      });
      await AsyncStorage.mergeItem('@userValue', userValue);
      /*setCurrentUser({
        ...currentUser,
        firstName,
        lastName,
        userName,
      });*/
    } catch (error) {
      console.log('Storage Write Error');
    }
  };

  //Here, the inputs to update the user data and the save button are pressed on the screen.
  return (
    <SafeAreaView
      style={theme === 'light' ? styles.lightContainer : styles.darkContainer}>
      <Input
        placeholder="First Name"
        theme={theme}
        placeholderTextColor="#8C8C8C"
        value={firstName}
        iconName="account-details"
        onChangeText={setFirstName}
      />
      <Input
        placeholder="Last Name"
        theme={theme}
        placeholderTextColor="#8C8C8C"
        value={lastName}
        iconName="account-details"
        onChangeText={setLastName}
      />
      <Input
        placeholder="User Name"
        theme={theme}
        placeholderTextColor="#8C8C8C"
        value={userName}
        iconName="account-box"
        onChangeText={setUserName}
      />
      <Button title="Save" onClick={save} />
    </SafeAreaView>
  );
};

export default Profile;
