import TaskItem from "./TaskItem";
import { Task } from "../../../../types/Task";
import { FC } from "react";

type Props = {
    tasks: Task[];
};

/**
 * タスクリスト
 * @returns
 */
const TaskList: FC<Props> = ({ tasks }) => {
    return (
        <div className="inner">
            <ul className="task-list">
                {tasks.map((task) => (
                    <li key={task.id}>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" />
                        </label>
                        <div>
                            <span>{task.title}</span>
                        </div>
                        <button className="btn is-delete">削除</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
