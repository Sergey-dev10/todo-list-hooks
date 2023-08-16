import {useState} from "react";
import {Title} from "../Title";
import {TaskAdder} from "../TaskAdder";
import {TaskList} from "../TaskList/index.js";

export const  Todo = () => {
    const [tasks, setTasks] = useState([
        {id: 1, title: "1 task"},
        {id: 2, title: "2 task"},
        {id: 3, title: "2 task"},
    ]);

    return (
        <>
            <Title />
            <TaskAdder />
            <TaskList tasks={tasks}/>
        </>
    );
}