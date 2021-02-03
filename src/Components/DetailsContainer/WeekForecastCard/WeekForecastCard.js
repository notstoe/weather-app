import React from "react";
import lightRain from "../../../Assets/LightRain.png";
import "./WeekForecastCard.css";

function weekForecastCard() {
	return (
		<div className="weekCard">
			<p className="cardInfo">Tomorrow</p>
			<img className="cardIcon" src={lightRain} alt="lightRain" />
			<div className="cardBottom">
				<p className="cardInfo">16°C</p>
				<p id="tempMin">11°C</p>
			</div>
		</div>
	);
}

export default weekForecastCard;
