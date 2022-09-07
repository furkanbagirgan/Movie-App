import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Profile from './../screens/Profile';
import Settings from './../screens/Settings';
import Theme from './../screens/Theme';

const Stack = createNativeStackNavigator();

//It is the navigation structure that will be shown in case user is press the settings tab.
const SettingsStack=()=>{
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Theme"
        component={Theme}
        options={{
          headerStyle: {backgroundColor: '#916BBF'},
          headerTintColor: 'white',
          headerTitle: 'Select Theme',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerStyle: {backgroundColor: '#916BBF'},
          headerTintColor: 'white',
          headerTitle: 'Edit Profile',
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default SettingsStack;