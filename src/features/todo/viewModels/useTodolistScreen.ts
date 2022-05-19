import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamList} from '../../../App';
import {useTodoContext} from '../../../contexts/TodoContext';

export default function useTodolistScreen() {
  const {todos, editTodo} = useTodoContext();
  const {navigate} =
    useNavigation<NativeStackScreenProps<ParamList>['navigation']>();
  const onItemCheckChange = (id: string, checked: boolean) => {
    editTodo(id, {checked});
  };

  const navigateToTodo = (id: string) => {
    navigate('Todo', {id});
  };

  return {
    data: {
      todos,
    },
    operations: {
      onItemCheckChange,
      navigateToTodo,
    },
  };
}
