import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import productData from './product_data.json';
import SearchBar from './components/SearchBar';
import ItemCard from './components/ItemCard';

const DATA = productData;

const App = () => {
  console.log(productData);
  const renderItem = ({item}) => <ItemCard products={item} />;
  return (
    <View style={styles.container}>
      <Text style={styles.storeTitle}>Patika Store</Text>
      {/* <SearchBar /> */}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={<SearchBar />}
      />
    </View>
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
