export const Task = ({title}) => {
    return (
        <div>
            <p>
                <input type="checkbox" name="" />
                <span>{title}</span>
                <button>Edit</button>
                <button>Delete</button>
            </p>
        </div>
    );
}