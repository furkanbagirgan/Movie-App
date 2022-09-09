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
  searchBar: {
    width: '100%',
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  inputWrapper: {
    width: '75%',
    height: 65,
    paddingVertical: 10,
  },
  buttonWrapper: {
    width: '20%',
    height: 45,
    borderRadius: 15,
    backgroundColor: '#C996CC',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
