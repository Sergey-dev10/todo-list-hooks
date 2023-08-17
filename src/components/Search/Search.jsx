
export const Search = ({onHandleSearch}) => {
    const handleSearch = (e) => {
        console.log(e.target.value);
        onHandleSearch(e.target.value);
    };
    return (
        <div>
            <input type="text" placeholder="Search" onChange={handleSearch}/>
        </div>
    );
};