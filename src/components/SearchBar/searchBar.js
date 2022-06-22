import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './searchBarStyle';

const SearchBar = () => {
  return (
    <View>
      <TextInput style={styles.searchBarInput} placeholder="Search" />
    </View>
  );
};

export default SearchBar;
