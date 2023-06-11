import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

type Task = {
    id: number
    title : string
    is_Done : boolean
    created_at: Date
    updated_at: Date
}

function TasksPage() {
    // 以下のコードはuseQueryを使用して置き換えることができる
    // const [tasks, setTasks] = useState<Task[]>([])
    // const getTasks = async () => {
    //     const {data} = await axios.get<Task[]>('api/tasks');
    //     setTasks(data);
    // }
    // useEffect(() => {
    //     getTasks();
    // }, []);

    const { data:tasks, status} = useQuery('tasks()', async () => {
        const {data} = await axios.get<Task[]>('api/tasks');
        return data;
    });

    if (status === 'loading') {
        return <div className="loader">Loading...</div>;
    } else if (status === 'error') {
        return <div className="align-center">Error</div>;
    } else if (!tasks || tasks.length <= 0) {
        return <div className="align-center">登録されたTODOはありません</div>;
    };

    return (
        <>
            <form className="input-form">
                <div className="inner">
                    <input
                        type="text"
                        className="input"
                        placeholder="TODOを入力してください。"
                        defaultValue=""
                    />
                    <button className="btn is-primary">追加</button>
                </div>
            </form>
            <div className="inner">
                <ul className="task-list">
                    {tasks.map((task) =>
                    <li key={task.id}>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" />
                        </label>
                        <div>
                            <span>{task.title}</span>
                        </div>
                        <button className="btn is-delete">削除</button>
                    </li>)}
                </ul>
            </div>
        </>
    );
}

export default TasksPage;
