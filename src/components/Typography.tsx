import React from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';

type TypograhpyProps = {
  text: string;
  variant: 'title' | 'paragraph' | 'button';
  style?: TextStyle;
};

const Typography = ({text, variant, style}: TypograhpyProps) => {
  return <Text style={[styles[variant], style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  paragraph: {
    color: 'black',
  },
  button: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Typography;
