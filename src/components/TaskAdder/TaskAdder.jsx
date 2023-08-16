import {useState} from "react";

export const TaskAdder = ({onAddTask}) => {
  const [task, setTask] = useState("");

  const handleInputChange = (e) => {
      setTask(e.target.value);
  };
  const handleSubmit = (e) => {
      e.preventDefault();
      onAddTask(task);
      setTask("");
  };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                       placeholder="Add new task"
                       value={task}
                       onChange={handleInputChange}
                />
                <button>Add</button>
            </form>
        </div>
    );
}