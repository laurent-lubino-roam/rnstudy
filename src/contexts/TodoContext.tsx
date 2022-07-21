import React, {createContext, useContext, useEffect, useState} from 'react';
import {Todo, TodoInitialValues} from '../models/Todo';
import RNSI from 'react-native-sensitive-info';

type TodoContext = {
  todos: Todo[];
  addTodo: (todo: TodoInitialValues) => void;
  deleteTodo: (id: Todo['id']) => void;
  getTodoById: (id: Todo['id']) => Todo | undefined;
  editTodo: (
    id: Todo['id'],
    changes: Partial<Pick<Todo, 'title' | 'description' | 'checked'>>,
  ) => void;
};

export const TodoContext = createContext<TodoContext>({
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
  getTodoById: () => {
    return undefined;
  },
  editTodo: () => {},
});

export const useTodoContext = () => useContext(TodoContext);

const {Provider} = TodoContext;

const TODO_SECURE_KEY = 'todolist';
const secureStorageConfig = {
  sharedPreferencesName: 'todo',
  keychainService: 'todo',
};

const TodoProvider: React.FC = ({children}) => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const getTodoFromStorage = async () => {
    const todosFromStorageStringified = await RNSI.getItem(
      TODO_SECURE_KEY,
      secureStorageConfig,
    );
    const todoStorage = JSON.parse(todosFromStorageStringified) || [];
    setTodos(todoStorage);
  };

  useEffect(() => {
    getTodoFromStorage();
  }, []);

  const getTodoById = (id: Todo['id']): Todo | undefined => {
    return todos.find(todo => todo.id === id);
  };
  const addTodo = (todo: TodoInitialValues): void => {
    const newTodos = todos;
    newTodos.push(new Todo(todo));
    RNSI.setItem(
      TODO_SECURE_KEY,
      JSON.stringify(newTodos),
      secureStorageConfig,
    );
    setTodos([...newTodos]);
  };
  const deleteTodo = (id: Todo['id']): void => {
    const newTodos = todos.filter(todo => todo.id === id);
    RNSI.setItem(
      TODO_SECURE_KEY,
      JSON.stringify(newTodos),
      secureStorageConfig,
    );
    setTodos([...newTodos]);
  };
  const editTodo = (
    id: Todo['id'],
    changes: Partial<Pick<Todo, 'title' | 'description' | 'checked'>>,
  ): void => {
    const index = todos.findIndex(todo => todo.id === id);
    if (index === -1) {
      console.warn(`No todo found with id: ${id}`);
      return;
    }
    const newTodos = todos;
    Object.entries(changes).forEach(([k, v]) => {
      // @ts-ignore
      newTodos[index][k] = v;
    });
    RNSI.setItem(
      TODO_SECURE_KEY,
      JSON.stringify(newTodos),
      secureStorageConfig,
    );
    setTodos([...newTodos]);
  };

  return (
    <Provider value={{todos, addTodo, deleteTodo, getTodoById, editTodo}}>
      {children}
    </Provider>
  );
};

export default TodoProvider;
