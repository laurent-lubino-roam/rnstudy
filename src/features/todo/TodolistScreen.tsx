import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import Typography from '../../components/Typography';
import useTodolistScreen from './viewModels/useTodolistScreen';
import TodoListItem from './components/TodoListItem';
import CircularButton from '../../components/CircularButton';

const TodolistScreen = () => {
  const {
    data: {todos},
    operations: {onItemCheckChange, navigateToTodo, openAddTodo},
  } = useTodolistScreen();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <View style={styles.header}>
            <Typography variant="title" text="Todolist" />
            <CircularButton variant="add" onPress={openAddTodo} />
          </View>
        }
        data={todos}
        renderItem={({item}) => (
          <TodoListItem
            todo={item}
            onCheckChange={onItemCheckChange}
            onPress={navigateToTodo}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default TodolistScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {
    flexDirection: 'row',
    padding: 6,
    marginBottom: 6,
    justifyContent: 'space-between',
  },
});
