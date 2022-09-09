import React from 'react';
import {View, Image, Text, TouchableHighlight} from 'react-native';

import styles from './MovieCard.style';

const ContactCard = ({name, image, description, vote, handlePress, theme}) => {
  //Here, the incoming name is displayed on the screen together
  //with image, description and vote.
  return (
    <TouchableHighlight onPress={handlePress} underlayColor={theme === 'light' ? "#EEE" : '#3D2C8D'}>
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image source={{uri:`https://image.tmdb.org/t/p/w500${image}`}} style={styles.image} />
        </View>
        <View style={styles.detailWrapper}>
          <Text
            style={
              theme === 'light' ? styles.lightName : styles.darkName
            }>
            {name}
          </Text>
          <Text
            style={
              theme === 'light' ? styles.lightDescription : styles.darkDescription
            }>
            {description}
          </Text>
          <Text
            style={
              theme === 'light' ? styles.lightVote : styles.darkVote
            }>
            {vote+'/10'}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ContactCard;
