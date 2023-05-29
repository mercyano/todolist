const InputForm = () => {
  return (
    <>
      <form className="text-center">
        <input
          type="text"
          placeholder="What to do?"
          className="w-full border-b-2 border-gray-900 focus:outline-none p-2 text-xl"
          autoFocus
        />
      </form>
    </>
  );
};

export default InputForm;
