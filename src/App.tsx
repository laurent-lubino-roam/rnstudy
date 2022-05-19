import React from 'react';
import TodoProvider from './contexts/TodoContext';
import TodolistScreen from './features/todo/TodolistScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoScreen from './features/todo/TodoScreen';

export type ParamList = {
  Todolist: undefined;
  Todo: {id: string};
};

const Stack = createNativeStackNavigator<ParamList>();

const App = () => {
  return (
    <TodoProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Todolist">
          <Stack.Screen
            name="Todolist"
            component={TodolistScreen}
            options={{headerShown: true}}
          />
          <Stack.Screen name="Todo" component={TodoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TodoProvider>
  );
};

export default App;
