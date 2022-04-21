import {useTodoContext} from '../../../contexts/TodoContext';

export default function useTodolistScreen() {
  const {todos} = useTodoContext();

  return {
    data: {
      todos,
    },
    operations: {},
  };
}
