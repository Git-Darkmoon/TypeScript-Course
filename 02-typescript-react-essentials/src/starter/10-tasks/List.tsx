import { ListProps } from "./types"

function List({ tasks, toggleTask }: ListProps) {
  return (
    <ul className="list">
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <p className="task-text">{task.description}</p>
            <input
              type="checkbox"
              name="taskCompleted"
              checked={task.isCompleted}
              onChange={() => toggleTask({ id: task.id })}
            />
          </li>
        )
      })}
    </ul>
  )
}
export default List
