import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import InputForm from './components/InputForm';
import Logo from './components/Logo';
import Todolist from './components/Todolist';

function App() {
  const [todolist, SetTodolist] = useState(() => {
    const storedTodolist = localStorage.getItem('todolist');
    return storedTodolist ? JSON.parse(storedTodolist) : [];
  });

  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(todolist));
  }, [todolist]);

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

  function strikeTodo(id) {
    SetTodolist((prevTodo) => {
      return prevTodo.map((todoItem, index) => {
        if (index === id) {
          return { ...todoItem, isDone: !todoItem.isDone };
        }
        return todoItem;
      });
    });
  }

  function editTodo(id, todo) {
    SetTodolist((prevTodo) => {
      return prevTodo.map((todoItem, index) => {
        if (index === id) {
          return { ...todoItem, todoItem: todo };
        }
        return todoItem;
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
              todo={todoItem.todoItem}
              onDelete={deleteTodo}
              onDone={strikeTodo}
              onChange={editTodo}
              isDone={todoItem.isDone}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
