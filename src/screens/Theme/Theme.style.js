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
    backgroundColor: '#333',
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
    borderWidth: 1,
    borderColor: '#8C8C8C',
  },
  darkTheme: {
    width: 125,
    height: 125,
    backgroundColor: 'black',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#8C8C8C',
  },
  lightThemeText: {
    marginTop: 10,
    color: 'black',
    fontSize: 16,
  },
  darkThemeText: {
    marginTop: 10,
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
