import React from "react";
import "./ForecastContainer.css";
import showerIcon from "../../Assets/Shower.png";
import locationIcon from "./Assets/locationIcon.svg";

function ForecastContainer() {
	return (
		<div className="forecastContainer">
			<button id="searchBtn">Search for places</button>
			<div className="displayWeather">
				<img src={showerIcon} alt="shower" id="weatherIcon" />
			</div>
			<p id="tempDisplay">
				15<span>°C</span>
			</p>
			<p id="description">Shower</p>
			<p id="date">
				{"Today"}&nbsp;&nbsp; • &nbsp;&nbsp;{"Tue, 2 Feb"}
			</p>
			<p className="location">
				<img src={locationIcon} alt="location icon" id="locationIcon" />
				{" Liverpool"}
			</p>
		</div>
	);
}

export default ForecastContainer;
