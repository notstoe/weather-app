import React from "react";
import "./DetailsContainer.css";

function DetailsContainer() {
	return (
		<div className="detailsContainer">
			<div className="unitsContainer">
				<p className="units selectedUnit">°C</p>
				<p className="units ">°F</p>
			</div>
		</div>
	);
}

export default DetailsContainer;
