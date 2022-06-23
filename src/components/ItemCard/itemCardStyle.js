import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    // borderColor: 'red',
    // borderWidth: 2,
    backgroundColor: '#E3FDFD',
    // backgroundColor: 'eceff1',
    borderRadius: 10,
    margin: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    // width: '100%',
    // width: Dimensions.get('window').width / 2,
    maxWidth: '100%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
  innerContainer: {
    padding: 5,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    marginTop: 5,
    color: '#333',
    fontSize: 15,
  },
  inStock: {
    color: 'red',
    marginTop: 5,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
