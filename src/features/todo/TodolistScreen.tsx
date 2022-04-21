import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import Typography from '../../components/Typography';
import useTodolistScreen from './viewModels/useTodolistScreen';

const TodolistScreen = () => {
  const {
    data: {todos},
  } = useTodolistScreen();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Typography variant="title" text="Todolist" />
      </View>
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <Typography text={item.title} variant="paragraph" />
        )}
      />
    </SafeAreaView>
  );
};

export default TodolistScreen;

const styles = StyleSheet.create({});
