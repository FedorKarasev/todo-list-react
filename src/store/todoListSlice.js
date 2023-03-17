import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos:
    JSON.parse(localStorage.getItem('todos'), (key, value) => {
      if (key === 'createdAt') {
        return new Date(value);
      }
      return value;
    }) || [],
};

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodoItem: (state, action) => {
      state.todos = [...state.todos, action.payload];
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    removeTodoItem: (state, action) => {
      state.todos = state.todos.filter((todoItem) => todoItem.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    completeTodoItem: (state, action) => {
      state.todos = state.todos.map((todoItem) => {
        if (todoItem.id === action.payload) {
          if (todoItem.completed) {
            todoItem = {
              id: todoItem.id,
              text: todoItem.text,
              completed: false,
              createdAt: todoItem.createdAt,
            };
          } else {
            todoItem = {
              id: todoItem.id,
              text: todoItem.text,
              completed: true,
              createdAt: todoItem.createdAt,
            };
          }
        }
        return todoItem;
      });
      //   localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    updateTodoItem: (state, action) => {
      console.log(action.payload);
      state.todos = state.todos.map((todoItem) => {
        if (todoItem.id === action.payload.id) {
          todoItem = {
            id: action.payload.id,
            text: action.payload.text,
            completed: todoItem.completed,
            createdAt: todoItem.createdAt,
          };
        }
        return todoItem;
      });
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
});

export const { addTodoItem, removeTodoItem, completeTodoItem, updateTodoItem } = todoListSlice.actions;
export default todoListSlice.reducer;
