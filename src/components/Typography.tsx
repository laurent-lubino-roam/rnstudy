import React from 'react';
import {Text, StyleSheet} from 'react-native';

type TypograhpyProps = {
  text: string;
  variant: 'title' | 'paragraph';
};

const Typography = ({text, variant}: TypograhpyProps) => {
  return <Text style={styles[variant]}>{text}</Text>;
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
});

export default Typography;
