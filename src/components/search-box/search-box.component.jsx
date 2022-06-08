import "./search-box.styles.css";

function SearchBox(props) {
  const { className, placeholder, onChangeHandler } = props;

  return (
    <input
      // using props for input properties to make component reusable
      // using string interpolation to add both classes, search box is default
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
}

export default SearchBox;
