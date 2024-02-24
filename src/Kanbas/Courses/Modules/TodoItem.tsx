const TodoItem = ( { todo = { done: true, title: 'Buy milk',
                              status: 'COMPLETED', due_date: "3-12-2024" } }) => {
 return (
   <li className="list-group-item">
     <input type="checkbox" className="me-2"
            defaultChecked={todo.done}/>
     {todo.title} ({todo.status}) {todo.due_date}
   </li>
 );
}
export default TodoItem;