import {Info} from "../Info";
import {Filter} from "../Filter";
export const ActionPanel = ({tasks, onHandleFilter}) => {
    return (
        <div>
            <Info tasks={tasks}/>
            <Filter onHandleFilter={onHandleFilter}/>
        </div>
    );
};