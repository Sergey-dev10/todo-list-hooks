export const Filter = ({onHandleFilter}) => {
    const handleFilter = (e) => {
      onHandleFilter(e.target.textContent)
    };

    return (
        <div>
            <button onClick={handleFilter}>All</button>
            <button onClick={handleFilter}>Active</button>
            <button onClick={handleFilter}>Completed</button>
        </div>
    );
};