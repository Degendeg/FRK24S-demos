const TodoList = ({ todos, completeTodo, uuidv4 }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <div className="todo-wrapper" key={uuidv4()}>
          <li>
            <strong>Titel:</strong> {todo.title}
          </li>
          <li>
            <strong>UserId:</strong> {todo.userId}
          </li>
          <li>
            {todo.completed ? (
              <span className="text-green">Completed ✅</span>
            ) : (
              <span className="text-red">Incomplete ❌</span>
            )}
            <br />
            <button onClick={() => completeTodo(todo.id)}>
              Complete
            </button>
          </li>
        </div>
      ))}
    </ul>
  )
}
export default TodoList