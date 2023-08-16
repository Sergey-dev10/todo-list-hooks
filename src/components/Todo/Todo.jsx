import {useState} from "react";
import {Title} from "../Title";
import {TaskAdder} from "../TaskAdder";
import {TaskList} from "../TaskList";
import {nanoid} from "nanoid";

export const  Todo = () => {
    const [tasks, setTasks] = useState([
        {id: 1, title: "1 task"},
        {id: 2, title: "2 task"},
        {id: 3, title: "2 task"},
    ]);

    const handleAddTask = (title) => {
        const id = nanoid();
        setTasks((prevState) => [...prevState, {id, title}])
    };
    const handleDeleteTask = (id) => {
        setTasks(prevState => [...prevState.filter((task) => {
            return task.id !== id;
        })])
    };
    const handleEditTask = (id, title) => {
        setTasks(tasks.map((task) => {
            return task.id === id ? {...task, title} : task;
        }));
    };

    return (
        <>
            <Title />
            <TaskAdder onAddTask={handleAddTask}/>
            <TaskList tasks={tasks}
                      onDeleteTask={handleDeleteTask}
                      onEditTask={handleEditTask}
            />
        </>
    );
}