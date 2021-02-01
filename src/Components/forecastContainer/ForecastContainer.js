import React from "react";
import "./ForecastContainer.css";
import showerIcon from "../../Assets/Shower.png";

function ForecastContainer() {
	return (
		<div className="forecastContainer">
			<button id="searchBtn">Search for places</button>
			<div className="displayWeather">
				<img src={showerIcon} alt="shower" id="weatherIcon" />
			</div>
			<p className="tempDisplay">15°C</p>
			<p id="description">Shower</p>
			<p id="date">Today - Mon, 1 Feb</p>
			<p id="location">Liverpool</p>
		</div>
	);
}

export default ForecastContainer;
