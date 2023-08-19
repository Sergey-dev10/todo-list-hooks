import {Infowrapper} from "./Info.styles.js";
export const Info = ({tasks}) => {
    const incompleteTasks = tasks.filter(task => task.completed === false).length;
    return (
        <Infowrapper>
            <span>{incompleteTasks} items left</span>
        </Infowrapper>
    );
};