import React, { useState } from 'react';
import {SafeAreaView, Text, FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';

import styles from './Home.style';

const Home = ({navigation}) => {
  //Necessary context data and states are created.
  const userSession = useSelector((state)=>state.auth.currentUser);
  const theme = useSelector((state)=>state.theme.theme);
  const [data,setData]=useState([]);

  const keyExtractor = item => {
    return String(item.id);
  };

  //Here, there is a function that adjusts how the areas to be repeated in the
  //flatlist will appear on the screen. Also, a contactCard component is created for each chat.
  const renderItem = ({item}) => {
    //const name = item.firstName + ' ' + item.lastName;
    return (
      <Text>Naber</Text>
    );
    /*return (
      <ContactCard
        name={name}
        image={item.image}
        userName={item.userName}
        handlePress={() => goToChatDetail(item, name, 'contacts')}
        theme={theme}
      />
    );*/
  };

  //Here is the function that allows switching to the chat screen when each contactCard component is clicked.
  const goToChatDetail = (receiver, chatName, type) => {
    navigation.navigate('Detail', {receiver, chatName, type});
  };

  //Here is the function that creates a line to appear between the areas to repeat in the flatlist.
  const ItemDivider = () => {
    return <View style={styles.divider} />;
  };

  //Here, the flatlist that will appear on the screen are created.
  return (
    <SafeAreaView
      style={theme === 'light' ? styles.lightContainer : styles.darkContainer}>
      <FlatList
        keyExtractor={keyExtractor}
        data={data}
        renderItem={renderItem}
        overScrollMode="never"
        bounces={false}
        ItemSeparatorComponent={ItemDivider}
      />
    </SafeAreaView>
  );
};

export default Home;
