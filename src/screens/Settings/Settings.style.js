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
    backgroundColor: '#1C0C5B',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  imageWrapper: {
    width: 150,
    height: 150,
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 75,
  },
  lightUserName: {
    color: 'black',
    fontSize: 16,
    marginBottom: 20,
  },
  darkUserName: {
    color: '#C996CC',
    fontSize: 16,
    marginBottom: 20,
  },
});

export default styles;
