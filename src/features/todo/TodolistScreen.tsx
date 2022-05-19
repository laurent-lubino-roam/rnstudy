import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import Typography from '../../components/Typography';
import useTodolistScreen from './viewModels/useTodolistScreen';
import TodoListItem from './components/TodoListItem';

const TodolistScreen = () => {
  const {
    data: {todos},
    operations: {onItemCheckChange, navigateToTodo},
  } = useTodolistScreen();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <View>
            <Typography variant="title" text="Todolist" />
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
});
