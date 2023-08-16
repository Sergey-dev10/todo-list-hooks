import {Task} from "../Task";
export const TaskList = ({tasks, onDeleteTask, onEditTask}) => {
    return (
        <div>
            {
                tasks.map((task) => {
                    const {id, title} = task;
                   return <Task key={id}
                                id={id}
                                title={title}
                                onDeleteTask={onDeleteTask}
                                onEditTask={onEditTask}
                   />;
                })
            }
        </div>
    );
}