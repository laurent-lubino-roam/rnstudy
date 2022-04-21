import React from 'react';
import TodoProvider from './contexts/TodoContext';
import TodolistScreen from './features/todo/TodolistScreen';

const App = () => {
  return (
    <TodoProvider>
      <TodolistScreen />
    </TodoProvider>
  );
};

export default App;
