/* eslint-disable react/prop-types */
import { MdDone } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
const Todolist = (props) => {
  // const [isDone, setIsDone] = useState(false);
  function handleDoneClick() {
    // setIsDone(!isDone);
    props.onDone(props.id);
  }

  function handleDelete() {
    props.onDelete(props.id);
  }

  return (
    <>
      <div className="flex w-full items-center border-4 border-gray-300 p-2 text-xl gap-2">
        <div className="flex justify-center text-gray-300 w-6 h-6 hover:bg-gray-900 hover:text-white ">
          <button type="submit" onClick={handleDoneClick}>
            <MdDone />
          </button>
        </div>
        <div
          className={`flex-grow ${
            props.isDone && 'line-through text-gray-300'
          }`}
        >
          {props.todo}
        </div>
        <div className="flex justify-center text-gray-300 w-6 h-6 hover:bg-gray-900 hover:text-white">
          <button type="submit" onClick={handleDelete}>
            <RxCross2 />
          </button>
        </div>
      </div>
    </>
  );
};

export default Todolist;
