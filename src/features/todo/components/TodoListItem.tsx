import {StyleSheet, Text, TouchableHighlight, Switch} from 'react-native';
import React from 'react';
import {Todo} from '../../../models/Todo';

type TodoListItemProps = {
  todo: Todo;
  onCheckChange: (id: string, value: boolean) => void;
  onPress: (id: string) => void;
};

const TodoListItem = ({todo, onCheckChange, onPress}: TodoListItemProps) => {
  return (
    <TouchableHighlight
      style={styles.itemContainer}
      onPress={() => onPress(todo.id)}>
      <>
        <Switch
          value={todo.checked}
          onValueChange={value => onCheckChange(todo.id, value)}
          style={styles.checkbox}
        />
        <Text>{todo.title}</Text>
      </>
    </TouchableHighlight>
  );
};

export default TodoListItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  checkbox: {
    marginRight: 10,
  },
});
