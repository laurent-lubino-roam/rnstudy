import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamList} from '../../../App';
import {useTodoContext} from '../../../contexts/TodoContext';
import {TodoInitialValues} from '../../../models/Todo';

export default function useAddTodoScreen() {
  const {addTodo} = useTodoContext();
  const navigation =
    useNavigation<NativeStackScreenProps<ParamList>['navigation']>();
  const handleAddTodo = (todo: TodoInitialValues) => {
    addTodo(todo);
    navigation.navigate('Todolist');
  };
  return {operations: {handleAddTodo}};
}
