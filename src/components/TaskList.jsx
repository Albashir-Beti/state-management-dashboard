
import { useSelector, useDispatch } from "react-redux";
import {
  toggleTask,
  deleteTask,
} from "../features/tasks/taskSlice";

function TaskList() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div className="task-list">
      <h2>My Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks available. Add a new task!</p>
      ) : (
        tasks.map((task) => (
          <div className="task-item" key={task.id}>
            <span
              className={task.completed ? "completed" : ""}
            >
              {task.title}
            </span>

            <div className="task-actions">
              <button onClick={() => dispatch(toggleTask(task.id))}>
                {task.completed ? "Undo" : "Complete"}
              </button>

              <button onClick={() => dispatch(deleteTask(task.id))}>
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;
