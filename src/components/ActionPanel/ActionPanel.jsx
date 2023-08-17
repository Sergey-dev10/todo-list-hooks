import {Info} from "../Info";
import {Filter} from "../Filter";
import {ToggleAddSearch} from "../ToggleAddSearch";
export const ActionPanel = ({tasks, onHandleFilter, onHandleToggleAction}) => {
    return (
        <div>
            <ToggleAddSearch onHandleToggleAction={onHandleToggleAction}/>
            <Info tasks={tasks} />
            <Filter onHandleFilter={onHandleFilter} />
        </div>
    );
};