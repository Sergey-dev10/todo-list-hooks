import {Task} from "../Task";

export const TaskList = ({tasks, onDeleteTask, onEditTask, onTaskCompletionToggle}) => {
    return (
        <div>
            {
                tasks.map((task) => {
                    const {id, title, completed} = task;
                    return <Task key={id}
                                 id={id}
                                 title={title}
                                 completed={completed}
                                 onDeleteTask={onDeleteTask}
                                 onEditTask={onEditTask}
                                 onTaskCompletionToggle={onTaskCompletionToggle}
                    />;
                })
            }
        </div>
    );
}