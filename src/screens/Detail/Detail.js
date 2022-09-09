import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, Image, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {getMovieDetail} from '../../redux/detailSlice';
import styles from './Detail.style';

const Detail = ({route}) => {
  //Necessary states are created.
  const {movieId} = route.params;
  const theme = useSelector(state => state.theme.theme);
  const movie = useSelector(state => state.detail.movie);
  const loading = useSelector(state => state.detail.loading);
  const error = useSelector(state => state.detail.error);
  const dispatch = useDispatch();

  //When the page is opened for the first time, the movie detail is displayed.
  useEffect(() => {
    dispatch(getMovieDetail(movieId));
  }, [dispatch, movieId]);

  //If loading is true this place works
  if (loading || typeof movie !== 'object') {
    return (
      <SafeAreaView
        style={
          theme === 'light'
            ? styles.lightLoadingContainer
            : styles.darkLoadingContainer
        }>
        <ActivityIndicator size={40} color="C996CC" />
      </SafeAreaView>
    );
  }
  //Here, the movie detail that will appear on the screen are created.
  return (
    <SafeAreaView
      style={theme === 'light' ? styles.lightContainer : styles.darkContainer}>
      {error ? (
        <View style={styles.errorWrapper}>
          <Text style={styles.errorText}>Connection Error</Text>
        </View>
      ) : (
        <>
          <View style={styles.imageWrapper}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.detailWrapper}>
            <Text
              style={theme === 'light' ? styles.lightName : styles.darkName}>
              {movie.title}
            </Text>
            <Text
              style={
                theme === 'light'
                  ? styles.lightDescription
                  : styles.darkDescription
              }>
              {movie.overview}
            </Text>
            <Text
              style={theme === 'light' ? styles.lightVote : styles.darkVote}>
              {Number(movie.vote_average).toFixed(1) + '/10'}
            </Text>
            <Text
              style={
                theme === 'light' ? styles.lightHeader : styles.darkHeader
              }>
              Genres:
            </Text>
            <View style={styles.genresWrapper}>
              {movie.genres.map((item, index) => (
                <Text
                  key={item.id}
                  style={
                    theme === 'light' ? styles.lightGenre : styles.darkGenre
                  }>
                  {item.name + (movie.genres.length - 1 !== index ? ' | ' : '')}
                </Text>
              ))}
            </View>
            <Text
              style={
                theme === 'light' ? styles.lightHeader : styles.darkHeader
              }>
              Companies:
            </Text>
            <View style={styles.companyWrapper}>
              {movie.production_companies.map((item, index) => (
                <Text
                  key={item.id}
                  style={
                    theme === 'light' ? styles.lightGenre : styles.darkGenre
                  }>
                  {item.name + (movie.genres.length - 1 !== index ? ' | ' : '')}
                </Text>
              ))}
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Detail;
