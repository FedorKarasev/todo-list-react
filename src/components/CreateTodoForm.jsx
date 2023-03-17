import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoItem } from '../store/todoListSlice';

export const CreateTodoForm = () => {
  const todoInputRef = useRef();
  const dispatch = useDispatch();

  const addTodoHandler = () => {
    if (!todoInputRef.current.value) {
      alert('Введите задачу');
      return;
    }

    const todo = {
      id: Date.now().toString(16),
      text: todoInputRef.current.value,
      completed: false,
      createdAt: Date.now(),
    };
    dispatch(addTodoItem(todo));
    todoInputRef.current.value = '';
  };

  return (
    <header className='app-header'>
      <input ref={todoInputRef} id='todo-input' className='input' placeholder='Задача' autoFocus />
      <button className='button' onClick={addTodoHandler}>
        Добавить задачу
      </button>
    </header>
  );
};
