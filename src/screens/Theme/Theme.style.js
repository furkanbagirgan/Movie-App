import {StyleSheet} from 'react-native';

//Here the styles of the theme screen are created.
const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#1C0C5B',
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  themeWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  lightTheme: {
    width: 125,
    height: 125,
    backgroundColor: '#eee',
    borderRadius: 25,
  },
  darkTheme: {
    width: 125,
    height: 125,
    backgroundColor: '#3D2C8D',
    borderRadius: 25,
  },
  lightThemeText: {
    marginTop: 10,
    color: 'black',
    fontSize: 16,
  },
  darkThemeText: {
    marginTop: 10,
    color: '#C996CC',
    fontSize: 16,
  },
});

export default styles;
