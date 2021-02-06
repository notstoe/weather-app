import React from "react";
import "./ForecastContainer.css";
import locationIcon from "./Assets/locationIcon.svg";
import currentLocationIcon from "./Assets/currentLocationIcon.svg";
import getIcon from "../../Assets/getIcon";

function ForecastContainer(props) {
	const { temp, name, overall, id } = props.weatherData;

	const currDate = new Date().toLocaleDateString("en-UK", {
		weekday: "short",
		day: "numeric",
		month: "short",
	});

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
				<img src={getIcon(id)} alt="weatherIcon" id="weatherIcon" />
			</div>
			<p id="tempDisplay">
				{temp}
				<span>°C</span>
			</p>
			<p id="description">{overall}</p>
			<p id="date">
				{"Today"}&nbsp;&nbsp; • &nbsp;&nbsp;{currDate}
			</p>
			<p className="location">
				<img src={locationIcon} alt="location icon" id="locationIcon" />
				&nbsp;{name}
			</p>
		</div>
	);
}

export default ForecastContainer;
