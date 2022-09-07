import {StyleSheet} from 'react-native';

//Here the styles of the profile screen are created.
const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#333',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
});

export default styles;
