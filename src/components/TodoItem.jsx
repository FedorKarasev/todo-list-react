import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';
import { removeTodoItem, completeTodoItem, updateTodoItem } from '../store/todoListSlice';

export const TodoItem = ({ todoItem }) => {
  const { id, text, completed, createdAt } = todoItem;
  const dispatch = useDispatch();

  const textInputRef = useRef();
  const textRef = useRef();
  const editButtonRef = useRef();
  const okButtonRef = useRef();
  const cancelButtonRef = useRef();

  let className = 'todo-item';
  if (completed) className += ' checked';

  const deleteTodoItemHandler = () => {
    dispatch(removeTodoItem(id));
  };

  const completeHandler = () => {
    dispatch(completeTodoItem(id));
  };

  const editTodoItemHandler = () => {
    textRef.current.hidden = true;

    textInputRef.current.hidden = false;
    textInputRef.current.value = text;

    editButtonRef.current.hidden = true;
    okButtonRef.current.hidden = false;
    cancelButtonRef.current.hidden = false;
  };

  const cancelEditHandler = () => {
    editButtonRef.current.hidden = false;
    okButtonRef.current.hidden = true;
    cancelButtonRef.current.hidden = true;
    textRef.current.hidden = false;
    textInputRef.current.hidden = true;
  };

  const updateTodoItemHandler = () => {
    dispatch(updateTodoItem({ id, text: textInputRef.current.value }));
    okButtonRef.current.hidden = true;
    cancelButtonRef.current.hidden = true;
    editButtonRef.current.hidden = false;
    textInputRef.current.hidden = true;
    textRef.current.hidden = false;
  };

  return (
    <li className={className}>
      <div className='todo-info-container'>
        <FontAwesomeIcon onClick={completeHandler} className='icon' icon={faCircleCheck} size='lg' />
        <p ref={textRef} className='todo-text'>
          {text}
        </p>
        <input ref={textInputRef} type='text' className='input' hidden />
      </div>
      <div className='buttons-container'>
        <button ref={editButtonRef} onClick={editTodoItemHandler} className='button button-edit'>
          Редактировать
        </button>
        <button ref={okButtonRef} onClick={updateTodoItemHandler} className='button button-ok' hidden>
          Ok
        </button>
        <button ref={cancelButtonRef} onClick={cancelEditHandler} className='button button-edit' hidden>
          Отменить
        </button>
        <button onClick={deleteTodoItemHandler} className='button button-delete'>
          Удалить
        </button>
      </div>
    </li>
  );
};
