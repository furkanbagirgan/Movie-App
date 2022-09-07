import {StyleSheet} from 'react-native';

//Here the styles of the settings screen are created.
const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#333',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  imageWrapper: {
    width: 150,
    height: 150,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 75,
  },
});

export default styles;
