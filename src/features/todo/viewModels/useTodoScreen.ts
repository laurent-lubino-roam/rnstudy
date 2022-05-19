import {useTodoContext} from '../../../contexts/TodoContext';

export function useTodoScreen(id: string) {
  const {getTodoById} = useTodoContext();

  const todo = getTodoById(id);

  return {
    data: {
      todo,
    },
    operations: {},
  };
}
