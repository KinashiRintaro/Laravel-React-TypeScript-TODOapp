import { Task } from "../../../../types/Task";

const TaskItem = (task: Task) => {
    return (
        <li key={task.id}>
            <label className="checkbox-label">
                <input type="checkbox" className="checkbox-input" />
            </label>
            <div>
                <span>{task.title}</span>
            </div>
            <button className="btn is-delete">削除</button>
        </li>
    );
};

export default TaskItem;
