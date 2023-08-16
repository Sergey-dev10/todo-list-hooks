import {useState} from "react";
import {TaskEditor} from "../TaskEditor";

export const Task = ({id, title, onDeleteTask, onEditTask}) => {
    const [isEdit, setIsEdit] = useState(false);
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

    return (
        <div>
            {
                isEdit ? <TaskEditor title={title} onEditTask={handleEditTask}/> :
                    (
                        <p>
                            <input type="checkbox" name="" />
                            <span>{title}</span>
                            <button onClick={handleEditBtn}>Edit</button>
                            <button onClick={handleDeleteTask}>Delete</button>
                        </p>
                    )
            }

        </div>
    );
}