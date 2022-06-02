import React from 'react';
import TodoProvider from './contexts/TodoContext';
import TodolistScreen from './features/todo/TodolistScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoScreen from './features/todo/TodoScreen';
import AddTodoScreen from './features/todo/AddTodoScreen';

export type ParamList = {
  Todolist: undefined;
  Todo: {id: string};
  AddTodo: undefined;
};

const Stack = createNativeStackNavigator<ParamList>();

const App = () => {
  return (
    <TodoProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Todolist">
          <Stack.Screen name="Todolist" component={TodolistScreen} />
          <Stack.Screen name="Todo" component={TodoScreen} />
          <Stack.Screen
            name="AddTodo"
            component={AddTodoScreen}
            options={{presentation: 'modal'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TodoProvider>
  );
};

export default App;
