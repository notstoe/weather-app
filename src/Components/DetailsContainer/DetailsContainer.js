import React from "react";
import "./DetailsContainer.css";
import CurrDetailsCard from "./CurrDetailsCard/CurrDetailsCard";
import WeekForecastCard from "./WeekForecastCard/WeekForecastCard";

function DetailsContainer(props) {
	const {
		feelsLike,
		tempMax,
		tempMin,
		humidity,
		visibility,
		pressure,
	} = props.weatherData;

	const dataArr = [
		{
			title: "Feels Like",
			mainInfo: feelsLike,
			subtitle: [tempMax, tempMin],
		},
		{ title: "Humidity", mainInfo: humidity, subtitle: "progressBar" },
		{
			title: "Visibility",
			mainInfo: `${visibility / 1000} km`,
			subtitle: "",
		},
		{ title: "Air Pressure", mainInfo: `${pressure / 1000} atm`, subtitle: "" },
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
