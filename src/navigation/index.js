import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './AuthStack';
import ContentStack from './ContentStack';

const Navigation = () => {
  //The current user information is accessed with the useUser hook.
  //const {currentUser} = useUser();

  //Here, the appropriate navigation structure is displayed on the screen according to the user input status.
  return (
    <NavigationContainer>
      {currentUser.userName ? <ContentStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;