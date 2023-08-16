import {useState} from "react";

export const TaskEditor  = ({title, onEditTask}) => {
    const [newTitle, steNewTitle] = useState(title);

    const handleTitleChange = (e) => {
        steNewTitle(e.target.value);
    };
    const handleSaveNewTitle = () => {
        onEditTask(newTitle);
    };
    return (
        <p>
            <input type="text" value={newTitle} onChange={handleTitleChange}/>
            <button onClick={handleSaveNewTitle}>Save</button>
        </p>
    );
}