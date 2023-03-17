import React from 'react';
import { TodoItem } from './TodoItem';
import { useSelector } from 'react-redux';

export const TodoList = () => {
  const todoList = useSelector((state) => state.todoList);

  return (
    <ul className='main'>
      {todoList.todos.length ? (
        todoList.todos.map((todoItem) => {
          return <TodoItem todoItem={todoItem} key={todoItem.id} />;
        })
      ) : (
        <p>Добавьте первую задачу</p>
      )}
    </ul>
  );
};
