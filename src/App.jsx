import { useState } from 'react';
import InputForm from './components/InputForm';
import Logo from './components/Logo';
import Todolist from './components/Todolist';

function App() {
  const [todolist, SetTodolist] = useState([]);

  function addNote(todo) {
    SetTodolist((prevTodo) => {
      return [todo, ...prevTodo];
    });
  }

  function deleteTodo(id) {
    SetTodolist((prevTodo) => {
      return prevTodo.filter((todoItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      <div className="mb-8">
        <Logo />
      </div>

      <InputForm onAdd={addNote} />
      <div className="flex flex-col gap-4 mt-8">
        {todolist.map((todoItem, index) => {
          return (
            <Todolist
              key={index}
              id={index}
              todo={todoItem}
              onDelete={deleteTodo}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
