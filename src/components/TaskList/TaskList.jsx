import {Task} from "../Task";
export const TaskList = ({tasks}) => {
    return (
        <div>
            {
                tasks.map((task) => {
                    const {id, title} = task;
                   return <Task key={id} title={title} />;
                })
            }
        </div>
    );
}