import Listitem from './Listitem'


const List = ({todos, setTodos, filteredTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => <Listitem key={todo.id} todo={todo} todos={todos} text={todo.text} setTodos={setTodos}/>)}
            </ul>
        </div>
     );
}
 
export default List;