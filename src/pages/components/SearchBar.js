
const SearchBar = (props) => {
  return (
    <div className="SearchBar">
      <div className="search">
        <input type="search" name="searchBar"></input>
      </div>
      <div className="wel-back">
        <h2>Welcome back, {props.name}</h2>
      </div>
    </div>
  );
};
export default SearchBar;
