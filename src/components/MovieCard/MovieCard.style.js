import {Dimensions, StyleSheet} from 'react-native';

//Here the styles of the contactCard are created.
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  imageWrapper: {
    width: 100,
    height: 150,
    alignSelf: 'flex-start',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  detailWrapper: {
    width: Dimensions.get('screen').width - 140,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  lightName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  darkName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  lightDescription: {
    color: 'black',
    marginTop: 5,
  },
  darkDescription: {
    color: 'white',
    marginTop: 5,
  },
  lightVote: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
  darkVote: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
});

export default styles;
