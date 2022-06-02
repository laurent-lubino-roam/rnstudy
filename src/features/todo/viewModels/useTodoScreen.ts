import {useNavigation} from '@react-navigation/native';
import {useTodoContext} from '../../../contexts/TodoContext';

export function useTodoScreen(id: string) {
  const {getTodoById} = useTodoContext();
  const navigation = useNavigation();
  const todo = getTodoById(id);
  const goBack = () => {
    navigation.goBack();
  };
  return {
    data: {
      todo,
    },
    operations: {goBack},
  };
}
