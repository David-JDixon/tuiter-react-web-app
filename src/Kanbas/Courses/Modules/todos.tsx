import { todos } from "../../Database";
import TodoItem from "./TodoItem";

const TodoList = () => {
 return(
     <>
         <h3>To Do</h3>
         <ul className="list-group">
             { todos.map(todo => {
                     return(<TodoItem todo={{ ...todo, due_date: todo["due-date"] }}/>);
                 })}
         </ul>
     </>
 );
}
export default TodoList;