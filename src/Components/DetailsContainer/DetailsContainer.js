import React from "react";
import CurrDetailsCard from "./CurrDetailsCard/CurrDetailsCard";
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
			<p id="sectionTitle">Today's Highlights</p>
			<div className="currCardContainer">
				<CurrDetailsCard
					data={{ title: "Feels Like", mainInfo: "10", subtitle: ["8", "13"] }}
				/>
				<CurrDetailsCard
					data={{ title: "Humidity", mainInfo: "25", subtitle: "progressBar" }}
				/>
			</div>
			<div className="currCardContainer">
				<CurrDetailsCard
					data={{
						title: "Visibility",
						mainInfo: "7 km",
						subtitle: "",
					}}
				/>
				<CurrDetailsCard
					data={{ title: "Air Pressure", mainInfo: "20 hPa", subtitle: "" }}
				/>
			</div>
		</div>
	);
}

export default DetailsContainer;
