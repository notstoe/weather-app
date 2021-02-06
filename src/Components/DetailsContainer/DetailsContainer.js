import React from "react";
import "./DetailsContainer.css";
import CurrDetailsCard from "./CurrDetailsCard/CurrDetailsCard";
import WeekForecastCard from "./WeekForecastCard/WeekForecastCard";

function DetailsContainer() {
	const dataArr = [
		{
			title: "Feels Like",
			mainInfo: "10",
			subtitle: ["8", "13"],
		},
		{ title: "Humidity", mainInfo: "75", subtitle: "progressBar" },
		{
			title: "Visibility",
			mainInfo: "7 km",
			subtitle: "",
		},
		{ title: "Air Pressure", mainInfo: "20 hPa", subtitle: "" },
	];

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
				<CurrDetailsCard data={dataArr[0]} />
				<CurrDetailsCard data={dataArr[1]} />
			</div>
			<div className="currCardContainer">
				<CurrDetailsCard data={dataArr[2]} />
				<CurrDetailsCard data={dataArr[3]} />
			</div>
		</div>
	);
}

export default DetailsContainer;
