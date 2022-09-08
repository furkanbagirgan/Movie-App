import {StyleSheet} from 'react-native';

//Here the styles of the login screen are created.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D2C8D',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  header: {
    color: '#C996CC',
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  signupText:{
    color: '#C996CC',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 25,
  }
});

export default styles;
