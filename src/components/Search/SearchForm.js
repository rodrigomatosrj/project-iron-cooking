import React, { useState, useEffect } from "react";

function SearchForm() {
	const [searchItem, setSearchItem] = useState("");

	function handleChange(event) {
		setSearchItem(event.currentTarget.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<form className="form-inline" onSubmit="handleSubmit">
			<input
				type="text"
				className="form-control mb-2 mr-sm-2"
				id="inlineFormInputName2"
				placeholder="Search"
				value={searchItem}
				onChange={handleChange}
			/>
			<button type="submit" className="btn btn-primary mb-2">
				Search
			</button>
		</form>
	);
}

export default SearchForm;
