import React from 'react';

import Navigation from './navigation';

const App = () => {
  //

  //Checking if there is any user data saved in the storage. If there is, this user information is saved in redux.
  const getUserData = async () => {
    try {
      const data = await AsyncStorage.getItem('@userData');
      if (data !== null) {
        const userValue = JSON.parse(data);
        //redux'a kaydetme
      }
    } catch (e) {
      console.log('Storage Read Error');
    }
  };

  //It makes the getUserData function run when the application is first launched.
  useEffect(()=>{
    getUserData();
  },[]);

  //Here, the theme and user contexts surround the application.
  return (
    <UserProvider>
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;

/*
GET /posts?title=json-server&author=typicode
GET /posts?id=1&id=2
GET /comments?author.name=typicode

GET    /posts
GET    /posts/1
POST   /posts
*/
