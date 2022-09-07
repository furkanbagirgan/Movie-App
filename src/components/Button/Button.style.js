import {StyleSheet} from 'react-native';

//Here the styles of the button are created.
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 15,
    backgroundColor: '#3D2C8D',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#C996CC',
  },
});

export default styles;
