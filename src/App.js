import React from 'react';
import {View, SafeAreaView, Text, FlatList, StyleSheet} from 'react-native';
import productData from './product_data.json';
import SearchBar from './components/SearchBar';
import ItemCard from './components/ItemCard';

const DATA = productData;

const App = () => {
  console.log(productData);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.storeTitle}>Patika Store</Text>
        <SearchBar />
        <FlatList
          data={DATA}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />
      </View>
      <ItemCard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  storeTitle: {
    color: '#222831',
    textAlign: 'center',
    fontSize: 24,
    marginTop: 10,
  },
});

export default App;
