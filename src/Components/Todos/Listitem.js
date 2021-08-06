const Listitem = ({text,todos,setTodos,todo}) => {

  const deleteHandler = () => {
    setTodos(todos.filter(item => item.id !== todo.id))
  }

  //changes the value of compeleted property 
  const completeHandler = () => {
    setTodos(todos.map(item => {
      if (item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed,
        }
        
      }
      return item;
    }))
    
  }

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : '' }` }>{text}</li>
      <button className="complete-btn" onClick={completeHandler}>
      <i className="fa fa-check"></i>
    </button>
    <button className="trash-btn" onClick={deleteHandler}>
      <i className="fa fa-trash"></i>
      </button>
      </div>
        );
};

export default Listitem;
