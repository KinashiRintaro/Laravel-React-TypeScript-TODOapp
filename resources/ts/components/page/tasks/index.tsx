import { useTasks } from "../../../queries/Task";
import TaskInput from "./taskConponents/TaskInput";
import TaskList from "./taskConponents/TaskList";

function TasksPage() {
    const { data: tasks, status } = useTasks();

    if (status === "loading") {
        return <div className="loader">Loading...</div>;
    } else if (status === "error") {
        return <div className="align-center">Error</div>;
    } else if (!tasks || tasks.length <= 0) {
        return <div className="align-center">登録されたTODOはありません</div>;
    }

    return (
        <>
            <TaskInput />
            <TaskList tasks={tasks} />
        </>
    );
}

export default TasksPage;
