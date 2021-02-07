import React from "react";
import getIcon from "../../../Assets/getIcon";
import "./WeekForecastCard.css";

function weekForecastCard(props) {
	const { date, idForecast, tempMax, tempMin } = props.forecastData;

	return (
		<div className="weekCard">
			<p className="cardInfo">{date}</p>
			<img className="cardIcon" src={getIcon(idForecast)} alt="lightRain" />
			<div className="cardBottom">
				<p className="cardInfo">{tempMax}°C</p>
				<p id="tempMin">{tempMin}°C</p>
			</div>
		</div>
	);
}

export default weekForecastCard;
