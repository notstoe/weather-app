import React from "react";
import "./ForecastContainer.css";
import showerIcon from "../../Assets/Shower.png";
import locationIcon from "./Assets/locationIcon.svg";
import currentLocationIcon from "./Assets/currentLocationIcon.svg";

function ForecastContainer() {
	return (
		<div className="forecastContainer">
			<div className="searchBar">
				<button id="searchBtn">Search for places</button>
				<img
					src={currentLocationIcon}
					alt="current location"
					id="currentLocationIcon"
				/>
			</div>
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
