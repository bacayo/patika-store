import React from 'react';
import {View, Image} from 'react-native';
import styles from './itemCardStyle';

const ItemCard = () => {
  return (
    <View>
      <Image style={styles.image} />
    </View>
  );
};

export default ItemCard;
