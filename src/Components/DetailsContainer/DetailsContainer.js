import React from "react";
import "./DetailsContainer.css";
import CurrDetailsCard from "./CurrDetailsCard/CurrDetailsCard";
import WeekForecastCard from "./WeekForecastCard/WeekForecastCard";
import getIcon from "../../Assets/getIcon";

function DetailsContainer(props) {
	const {
		loadingWeather,
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

	const { dailyArr, loadingForecast } = props.forecastArr; //comes with the promise resolve, otherwise undefined

	let weekForecastComponents;

	if (dailyArr) {
		const fiveDaysArr = dailyArr.slice(1, 6);

		weekForecastComponents = fiveDaysArr.map((dayForecast, index) => {
			const forecastData = {
				date: new Date(dayForecast.dt * 1000).toLocaleDateString("en-UK", {
					weekday: "short",
					day: "numeric",
					month: "short",
				}),
				tempMin: Math.round(Number(dayForecast.temp.min)),
				tempMax: Math.round(Number(dayForecast.temp.max)),
				idForecast: dayForecast.weather[0].id,
			};
			return <WeekForecastCard key={index} forecastData={forecastData} />;
		});
	}

	if (!loadingWeather && !loadingForecast) {
		return (
			<div className="detailsContainer">
				<div className="unitsContainer">
					<p className="units selectedUnit">°C</p>
					<p className="units ">°F</p>
				</div>
				<div className="weekContainer">{weekForecastComponents}</div>
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
	} else {
		return (
			<div className="detailsContainer">
				<img src={getIcon(804)} alt="cloud" id="loadingCloud" />
			</div>
		);
	}
}

export default DetailsContainer;
