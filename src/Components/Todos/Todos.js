import "./Todos.css";
import Form from "./Form";
import List from "./List";
import { useState, useEffect } from "react";

const Todos = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([])

  

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(item => item.completed))
        break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(item => !item.completed))
        break;
      default:
        setFilteredTodos(todos)
    }
  }

  //RUN ONCE when the app start
  useEffect(() => {
    getLocalTodos();
}, [])

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="TodoPage">
      <header>
        <h1>Todo List </h1>
      </header>
      <Form
        setTodos={setTodos}
        setInputText={setInputText}
        todos={todos}
        inputText={inputText}
        setStatus={setStatus}
        
      />
      <List todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
};

export default Todos;
