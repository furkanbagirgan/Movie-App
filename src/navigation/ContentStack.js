import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Tabs from './Tabs';
import Detail from './../screens/Detail';
import Profile from './../screens/Profile';
import Theme from './../screens/Theme';

const Stack = createNativeStackNavigator();

//It is the navigation structure that will be displayed when the login is still made.
const ContentStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerStyle: {backgroundColor: '#916BBF'},
          headerTintColor: 'white',
          headerTitle: 'Movie Detail',
          headerShadowVisible: false,
        }}
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
};

export default ContentStack;