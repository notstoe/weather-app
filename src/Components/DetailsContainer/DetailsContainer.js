import React from "react";
import "./DetailsContainer.css";
import WeekForecastCard from "./WeekForecastCard/WeekForecastCard";

function DetailsContainer() {
	return (
		<div className="detailsContainer">
			<div className="unitsContainer">
				<p className="units selectedUnit">°C</p>
				<p className="units ">°F</p>
			</div>
			<div className="weekContainer">
				<WeekForecastCard />
				<WeekForecastCard />
				<WeekForecastCard />
				<WeekForecastCard />
				<WeekForecastCard />
			</div>
		</div>
	);
}

export default DetailsContainer;
