/* eslint-disable react/prop-types */
import { useState } from 'react';
const InputForm = (props) => {
  const [todo, setTodo] = useState('');

  function handleChange(event) {
    setTodo(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      props.onAdd(todo);
      setTodo('');
      event.preventDefault();
    }
  }

  return (
    <>
      <form className="text-center">
        <input
          name="todo"
          type="text"
          placeholder="What to do?"
          className="w-full border-b-2 border-gray-900 focus:outline-none p-2 text-xl auto"
          value={todo}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          autoFocus
          autoComplete="off"
        />
      </form>
    </>
  );
};

export default InputForm;
