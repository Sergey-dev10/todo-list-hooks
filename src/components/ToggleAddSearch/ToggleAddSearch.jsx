export const ToggleAddSearch = ({onHandleToggleAction}) => {
    const handleToggleAction = (e) => {
        onHandleToggleAction(e.target.value);
    };

    return (
        <div>
            <button value="add" onClick={handleToggleAction}>Add Task</button>
            <button value="search" onClick={handleToggleAction}>Search</button>
        </div>
    );
};