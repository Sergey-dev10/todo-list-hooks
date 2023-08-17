import {useState} from "react";
import {Title} from "../Title";
import {TaskAdder} from "../TaskAdder";
import {TaskList} from "../TaskList";
import {nanoid} from "nanoid";

export const  Todo = () => {
    const [tasks, setTasks] = useState([
        {id: 1, title: "1 task", completed: false},
        {id: 2, title: "2 task", completed: false},
        {id: 3, title: "3 task", completed: false},
    ]);

    const handleAddTask = (title) => {
        const id = nanoid();
        setTasks((prevState) => [...prevState, {id, title, completed: false}])
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

    const handleTaskCompletionToggle = (id, completed) => {
        console.log(completed);
        setTasks(tasks.map((task) => {
            return task.id === id ? {...task, completed}: task;
        }));
    };

    return (
        <>
            <Title />
            <TaskAdder onAddTask={handleAddTask}/>
            <TaskList tasks={tasks}
                      onDeleteTask={handleDeleteTask}
                      onEditTask={handleEditTask}
                      onTaskCompletionToggle={handleTaskCompletionToggle}
            />
        </>
    );
}