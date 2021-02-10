import React from "react";
import "./CurrDetailsCard.css";
import "./CurrDetailsCardResponsive.css";

function CurrDetailsCard(props) {
	const { title, mainInfo, subtitle } = props.data;

	if (subtitle === "progressBar") {
		return (
			<div className="detailsCard">
				<p id="title">{title}</p>
				<p id="mainInfo">{mainInfo}%</p>
				<div className="progressBarInfoContainer">
					<p className="progressBarInfo">0</p>
					<p className="progressBarInfo">50</p>
					<p className="progressBarInfo">100</p>
				</div>
				<div id="progressBar">
					<span
						id="progressBarFilling"
						style={{ width: `${mainInfo}%` }}
					></span>
				</div>
				<div className="percentageContainer">
					<p id="percentageUnit" className="progressBarInfo">
						%
					</p>
				</div>
			</div>
		);
	} else if (subtitle.length > 1) {
		const { useF, toF } = props.tempConfig;
		return (
			<div className="detailsCard">
				<p id="title">{title}</p>
				{useF ? (
					<p id="mainInfo">{Math.round(toF(mainInfo))}°F</p>
				) : (
					<p id="mainInfo">{mainInfo}°C</p>
				)}
				<div className="feelsLikeSubtitle">
					{useF ? (
						<p id="minTemp">{Math.round(toF(subtitle[0]))}°F</p>
					) : (
						<p id="minTemp">{subtitle[0]}°C</p>
					)}
					{useF ? (
						<p id="maxTemp">{Math.round(toF(subtitle[1]))}°F</p>
					) : (
						<p id="maxTemp">{subtitle[1]}°C</p>
					)}
				</div>
			</div>
		);
	} else if (subtitle.length < 1) {
		return (
			<div className="detailsCard" style={{ height: "15vh" }}>
				<p id="title">{title}</p>
				<p id="mainInfo">{mainInfo}</p>
			</div>
		);
	}
}

export default CurrDetailsCard;
