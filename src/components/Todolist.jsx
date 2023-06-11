/* eslint-disable react/prop-types */
import { MdDone } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
const Todolist = (props) => {
  function handleDoneClick() {
    props.onDone(props.id);
  }

  function handleDelete() {
    props.onDelete(props.id);
  }

  function handleChange(event) {
    props.onChange(props.id, event.target.value);
  }

  return (
    <>
      <div className="flex w-full items-center border-4 border-gray-300 p-2 text-xl gap-2">
        <div className="flex justify-center text-gray-300 w-6 h-6 hover:bg-gray-900 hover:text-white ">
          <button
            type="submit"
            aria-label="Strikethrough the task"
            onClick={handleDoneClick}
          >
            <MdDone />
          </button>
        </div>
        <div className="flex-grow">
          <form>
            <input
              type="text"
              aria-label="Edit the task"
              value={props.todo}
              className={`w-full focus:outline-none ${
                props.isDone && 'line-through text-gray-300'
              }`}
              onChange={handleChange}
              autoComplete="off"
            />
          </form>
        </div>
        <div className="flex justify-center text-gray-300 w-6 h-6 hover:bg-gray-900 hover:text-white">
          <button
            type="submit"
            aria-label="Delete the task"
            onClick={handleDelete}
          >
            <RxCross2 />
          </button>
        </div>
      </div>
    </>
  );
};

export default Todolist;
