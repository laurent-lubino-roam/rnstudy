import {StyleSheet, View, ViewProps} from 'react-native';
import React from 'react';

const Card = ({children}: ViewProps) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 12,
    margin: 12,
    borderRadius: 12,
    backgroundColor: 'white',
    elevation: 20,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
