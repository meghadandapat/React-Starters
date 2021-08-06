//destructuring prop object so we don't have to use the keyword props

const Form = ({ setInputText, setTodos, inputText, todos, setStatus }) => {
  const inputTexthandler = (e) => {
    setInputText(e.target.value);
  };
  const todosHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, {
      text: inputText,
      completed: false,
      id: Math.random() * 1000,
    }]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
    <form>
      <input
        type="text"
        value={inputText}
        className="todo-input"
        onChange={inputTexthandler}
      />
      <button className="todo-button" type="submit" onClick={todosHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler}name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
