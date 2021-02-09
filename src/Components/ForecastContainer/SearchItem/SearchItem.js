import React from "react";
import "./SearchItem.css";
import arrow from "../Assets/arrow.svg";

function SearchItem(props) {
	const { locationName, handleSubmit } = props;
	return (
		<div className="searchItemContainer" onClick={handleSubmit}>
			<span id="locationName">{locationName}</span>
			<img src={arrow} alt="arrow" id="arrow"></img>
		</div>
	);
}

export default SearchItem;
