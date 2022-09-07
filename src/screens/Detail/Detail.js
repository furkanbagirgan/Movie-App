import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import styles from './Detail.style';

const Detail = ({navigation}) => {
  //Here, the flatlist that will appear on the screen are created.
  return (
    <SafeAreaView
      style={theme === 'light' ? styles.lightContainer : styles.darkContainer}>
      <Text>Detail</Text>
    </SafeAreaView>
  );
};

export default Detail;
