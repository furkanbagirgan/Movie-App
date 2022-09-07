import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useSelector} from 'react-redux';

import styles from './Search.style';

const Search = ({navigation}) => {
  const theme = useSelector((state)=>state.theme.theme);
  //Here, the flatlist that will appear on the screen are created.
  return (
    <SafeAreaView
      style={theme === 'light' ? styles.lightContainer : styles.darkContainer}>
      <Text>{theme}</Text>
    </SafeAreaView>
  );
};

export default Search;
