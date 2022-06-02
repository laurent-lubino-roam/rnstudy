import {StyleSheet, TouchableHighlight, Switch, View} from 'react-native';
import React from 'react';
import {Todo} from '../../../models/Todo';
import Typography from '../../../components/Typography';

type TodoListItemProps = {
  todo: Todo;
  onCheckChange: (id: string, value: boolean) => void;
  onPress: (id: string) => void;
};

const TodoListItem = ({todo, onCheckChange, onPress}: TodoListItemProps) => {
  return (
    <TouchableHighlight
      style={styles.itemContainer}
      onPress={() => onPress(todo.id)}
      underlayColor="#5f5f5f">
      <>
        <Switch
          value={todo.checked}
          onValueChange={value => onCheckChange(todo.id, value)}
          style={styles.checkbox}
        />
        <View style={styles.containerTitle}>
          <Typography variant="paragraph" text={todo.title} />
        </View>
        <Typography variant="paragraph" text=">" style={styles.chevron} />
      </>
    </TouchableHighlight>
  );
};

export default TodoListItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
  },
  checkbox: {
    marginRight: 10,
  },
  containerTitle: {flex: 1},
  chevron: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#afafaf',
  },
});
