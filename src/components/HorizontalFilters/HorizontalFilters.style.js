import {StyleSheet} from 'react-native';

//Here the styles of the horizontal filters screen are created.
const styles = StyleSheet.create({
  filterContainer: {
    width: '100%',
    height: 35,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  filterItem: {
    paddingHorizontal: 20,
    height: 35,
    backgroundColor: '#916BBF',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5
  },
  activeFilter: {
    paddingHorizontal: 20,
    height: 35,
    backgroundColor: '#3D2C8D',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5
  },
  filterTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
