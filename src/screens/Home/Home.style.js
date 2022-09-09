import {Dimensions, StyleSheet} from 'react-native';

//Here the styles of the contacts screen are created.
const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#1C0C5B',
  },
  errorWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
  divider: {
    width: Dimensions.get('screen').width - 30,
    height: 0.7,
    backgroundColor: '#ddd',
    alignSelf: 'flex-end',
    marginLeft: 15,
  },
});

export default styles;
