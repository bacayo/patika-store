import React from 'react';
import {View, SafeAreaView, Text, FlatList, StyleSheet} from 'react-native';
import productData from './product_data.json';
import SearchBar from './components/SearchBar';

const DATA = productData;

const App = () => {
  console.log(productData);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SearchBar />
        <FlatList
          data={DATA}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
});

export default App;
