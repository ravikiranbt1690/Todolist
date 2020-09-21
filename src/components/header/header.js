import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { onCreate } from '../../store/actions/todo';

const ENTER_KEY = 'Enter';

export function Header() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => setName(event.target.value);
  const handleCategoryChange = event => setCategory(event.target.value);

  const handleSubmit = event => {
    if (event.key !== ENTER_KEY) {
      return;
    }

    dispatch(onCreate(name,category));
    onCreate(name,category);
    setName('');
    setCategory('');
  };

  return (
    <Fragment>
       <input
        className="todo-bucket-input"
        value={category}
        onChange={handleCategoryChange}
        name="category"
        type="text"
        placeholder="Add a label/category"
      />
      <header className="header">
        <h1>TodoApp</h1>
        <input
          className="new-todo"
          placeholder="Let's get Started"
          value={name}
          onInput={handleChange}
          onKeyUp={handleSubmit}
          onChange={() => {}}
          data-testid="todo-create"
        />
      </header>
    </Fragment>
  );
}