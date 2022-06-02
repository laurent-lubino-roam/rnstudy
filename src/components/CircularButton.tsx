import {StyleSheet, Text, TouchableHighlight, ViewStyle} from 'react-native';
import React from 'react';

type CircularButtonProps = {
  style?: ViewStyle;
  onPress: () => void;
  variant?: 'forward' | 'back' | 'close' | 'edit' | 'add';
};

const getSymbolFromVariant = (variant: CircularButtonProps['variant']) => {
  switch (variant) {
    case 'forward':
      return '>';
    case 'back':
      return '<';
    case 'close':
      return 'x';
    case 'edit':
      return 'e';
    case 'add':
      return '+';
    default:
      return '.';
  }
};

const CircularButton = ({style, onPress, variant}: CircularButtonProps) => {
  const symbol = getSymbolFromVariant(variant);

  return (
    <TouchableHighlight
      style={[styles.container, style]}
      onPress={onPress}
      underlayColor="#5f5f5f">
      <Text style={styles.symbol}>{symbol}</Text>
    </TouchableHighlight>
  );
};

export default CircularButton;

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  symbol: {
    fontWeight: 'bold',
  },
});
