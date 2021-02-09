import React from "react";
import getIcon from "../../../Assets/getIcon";
import "./WeekForecastCard.css";

function weekForecastCard(props) {
	const { date, idForecast, tempMax, tempMin } = props.forecastData;
	const { toF, useF } = props.tempConfig;

	return (
		<div className="weekCard">
			<p className="cardInfo">{date}</p>
			<img className="cardIcon" src={getIcon(idForecast)} alt="lightRain" />
			<div className="cardBottom">
				{useF ? (
					<p className="cardInfo">{Math.round(toF(tempMax))}°F</p>
				) : (
					<p className="cardInfo">{tempMax}°C</p>
				)}
				{useF ? (
					<p id="tempMin">{Math.round(toF(tempMin))}°F</p>
				) : (
					<p id="tempMin">{tempMin}°C</p>
				)}
			</div>
		</div>
	);
}

export default weekForecastCard;
