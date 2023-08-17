import {useState} from "react";
import {TaskEditor} from "../TaskEditor";

export const Task = ({id,
                         title,
                         completed,
                         onDeleteTask,
                         onEditTask,
                         onTaskCompletionToggle}) => {
    const [isEdit, setIsEdit] = useState(false);
    const [isCompleted, setIsCompleted] = useState(completed);
    const handleDeleteTask = () => {
        onDeleteTask(id);
    };
    const handleEditTask = (title) => {
        onEditTask(id, title)
        setIsEdit(false);
    };
    const handleEditBtn = () => {
        setIsEdit(true);
    };

    const handleTaskCompletionToggle = (e) => {
        setIsCompleted(e.target.checked);
        onTaskCompletionToggle(id, e.target.checked);
    };

    return (
        <div>
            {
                isEdit ? <TaskEditor title={title} onEditTask={handleEditTask}/> :
                    (
                        <p>
                            <input type="checkbox"
                                   checked={isCompleted}
                                   onChange={handleTaskCompletionToggle}
                            />
                            <span>{title}</span>
                            <button onClick={handleEditBtn}>Edit</button>
                            <button onClick={handleDeleteTask}>Delete</button>
                        </p>
                    )
            }

        </div>
    );
}