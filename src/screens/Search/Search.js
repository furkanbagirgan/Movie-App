import React, {useState} from 'react';
import {SafeAreaView, Text, FlatList, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Search.style';
import MovieCard from '../../components/MovieCard';
import Input from '../../components/Input';
import {getSearchedMovies} from '../../redux/searchSlice';

const Search = ({navigation}) => {
  //Necessary context data and states are created.
  const theme = useSelector(state => state.theme.theme);
  const movies = useSelector(state => state.search.searchedMovies);
  const loading = useSelector(state => state.search.loading);
  const error = useSelector(state => state.search.error);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  //function that returns movies according to the searched text
  const getMoviesBySearch = () => {
    dispatch(getSearchedMovies(encodeURI(searchText)));
  };

  //Here is the function where key assignments of the fields to repeat in the flatlist are made.
  const keyExtractor = item => {
    return String(item.id);
  };

  //Here, there is a function that adjusts how the areas to be repeated in the
  //flatlist will appear on the screen. Also, a movieCard component is created for each chat.
  const renderItem = ({item}) => {
    return (
      <MovieCard
        name={item.title}
        image={item.poster_path}
        description={item.overview}
        vote={item.vote_average}
        handlePress={() => goToMovieDetail(item.id)}
        theme={theme}
      />
    );
  };

  //Here is the function that allows switching to the detail screen when each movieCard component is clicked.
  const goToMovieDetail = movieId => {
    navigation.navigate('Detail', {movieId});
  };

  //Here is the function that creates a line to appear between the areas to repeat in the flatlist.
  const ItemDivider = () => {
    return <View style={styles.divider} />;
  };

  //Here, the flatlist that will appear on the screen are created.
  return (
    <SafeAreaView
      style={theme === 'light' ? styles.lightContainer : styles.darkContainer}>
      {error ? (
        <View style={styles.errorWrapper}>
          <Text style={styles.errorText}>Connection Error</Text>
        </View>
      ) : (
        <FlatList
          keyExtractor={keyExtractor}
          data={movies}
          renderItem={renderItem}
          refreshing={loading}
          onRefresh={getMoviesBySearch}
          overScrollMode="never"
          bounces={false}
          ItemSeparatorComponent={ItemDivider}
          ListHeaderComponent={
            <View style={styles.searchBar}>
              <View style={styles.inputWrapper}>
                <Input
                  placeholder="Movie Title..."
                  placeholderTextColor="#C996CC"
                  value={searchText}
                  iconName="magnify"
                  onChangeText={setSearchText}
                />
              </View>
              <View style={styles.buttonWrapper}>
                <Icon
                  name="magnify"
                  size={25}
                  color="white"
                  onPress={getMoviesBySearch}
                />
              </View>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
