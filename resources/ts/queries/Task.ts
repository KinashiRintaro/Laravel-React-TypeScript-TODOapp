import * as api from "../api/Task";
import { useQuery } from "react-query";

const useTasks = () => {
    return useQuery("tasks", () => api.getTasks());
};

export { useTasks };
