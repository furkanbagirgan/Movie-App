import {StyleSheet} from 'react-native';

//Here the styles of the contactCard are created.
const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: 'white',
  },
  darkContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#1C0C5B',
  },
  lightLoadingContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  darkLoadingContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '1C0C5B',
  },
  imageWrapper: {
    width: '100%',
    height: 250,
    alignSelf: 'flex-start',
    borderRadius: 25,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  detailWrapper: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  lightName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginTop: 15,
  },
  darkName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#C996CC',
    marginTop: 15,
  },
  lightDescription: {
    color: 'black',
    marginVertical: 10,
  },
  darkDescription: {
    color: '#C996CC',
    marginVertical: 10,
  },
  lightVote: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
    alignSelf: 'center',
  },
  darkVote: {
    color: '#C996CC',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
  },
  genresWrapper: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  lightGenre: {
    color: 'black',
    fontSize: 16,
  },
  darkGenre: {
    color: '#C996CC',
    fontSize: 16,
  },
  companyWrapper: {
    flexDirection: 'row',
  },
  lightHeader: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 5,
  },
  darkHeader: {
    color: '#C996CC',
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 5,
  },
});

export default styles;
