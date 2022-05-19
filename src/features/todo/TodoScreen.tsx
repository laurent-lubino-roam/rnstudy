import {Text, SafeAreaView} from 'react-native';
import React from 'react';
import {useTodoScreen} from './viewModels/useTodoScreen';
import {useRoute} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamList} from '../../App';

const TodoScreen = () => {
  const {
    params: {id},
  } = useRoute<NativeStackScreenProps<ParamList, 'Todo'>['route']>();
  const {
    data: {todo},
  } = useTodoScreen(id);
  return (
    <SafeAreaView>
      <Text>{todo?.title}</Text>
      <Text>{todo?.description}</Text>
    </SafeAreaView>
  );
};

export default TodoScreen;
