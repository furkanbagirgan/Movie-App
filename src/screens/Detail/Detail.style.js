import {Dimensions, StyleSheet} from 'react-native';

//Here the styles of the contacts screen are created.
const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#333',
  },
  divider: {
    width: Dimensions.get('screen').width - 94,
    height: 0.7,
    backgroundColor: '#ddd',
    alignSelf: 'flex-end',
    marginRight: 15,
  },
});

export default styles;
