import {StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';
import Typography from './Typography';
import React from 'react';

type ButtonProps = {
  variant?: 'outlined' | 'contained';
  title: string;
  onPress: () => void;
};

const Button = ({title, variant = 'contained', onPress}: ButtonProps) => {
  if (variant === 'outlined') {
    return (
      <TouchableHighlight
        underlayColor="lightblue"
        style={[styles.buttonBase, styles.outlined]}
        onPress={onPress}>
        <Typography variant="button" text={title} style={styles.textOutlined} />
      </TouchableHighlight>
    );
  }

  return (
    <TouchableOpacity
      style={[styles.buttonBase, styles.contained]}
      activeOpacity={0.6}
      onPress={onPress}>
      <Typography variant="button" text={title} style={styles.textContained} />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonBase: {
    padding: 12,
    borderRadius: 6,
  },
  textContained: {
    color: 'white',
  },
  contained: {
    backgroundColor: 'blue',
  },
  textOutlined: {
    color: 'blue',
  },
  outlined: {
    borderColor: 'blue',
    borderWidth: 1,
  },
});
