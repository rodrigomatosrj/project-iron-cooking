import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./searchbar.css";
function SearchForm() {
  const [searchItem, setSearchItem] = useState("");
  const history = useHistory();

  function handleChange(event) {
    setSearchItem(event.currentTarget.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    history.push(`/search/${searchItem}`);
  }

  return (
    <form className="form-inline" onSubmit={handleSubmit}>
      <input
        type="text"
        className="inputColor form-control mb-2 mr-sm-2"
        id="inlineFormInputName2"
        placeholder="Search"
        value={searchItem}
        onChange={handleChange}
      />
      <button type="submit" className="btn  mb-2 btn-outline-danger">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
