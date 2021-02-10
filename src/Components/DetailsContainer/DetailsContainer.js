import React from "react";
import { Transition } from "react-transition-group";
import "./DetailsContainer.css";
import "./DetailsContainerResponsive.css";
import CurrDetailsCard from "./CurrDetailsCard/CurrDetailsCard";
import WeekForecastCard from "./WeekForecastCard/WeekForecastCard";
import getIcon from "../../Assets/getIcon";

function DetailsContainer(props) {
	const { useF, changeUnit } = props.tempConfig;
	const { dailyArr, loadingForecast } = props.forecastArr;
	let weekForecastComponents;
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
		{ title: "Air Pressure", mainInfo: `${pressure} hPa`, subtitle: "" },
	];

	if (dailyArr) {
		//dailyArr comes with the promise resolve, otherwise undefined
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
			return (
				<WeekForecastCard
					key={index}
					forecastData={forecastData}
					tempConfig={props.tempConfig}
				/>
			);
		});
	}

	const duration = 300; //opacity transition duration in ms

	const DtlsContainer = {
		transition: `opacity ${duration}ms ease-in`,
	};

	const DtlsContainerTransition = {
		entering: { opacity: 0 },
		entered: { opacity: 1 },
		exiting: { opacity: 1 },
		exited: { opacity: 0 },
	};

	// FUNCTIONS

	function handleUnitClick(e) {
		if (e.currentTarget.className.includes("selectedUnit")) return;
		changeUnit();
	}

	// COMPONENTS

	if (!loadingWeather && !loadingForecast) {
		return (
			<div className="detailsContainer">
				<Transition
					in={!loadingWeather && !loadingForecast}
					appear={!loadingWeather && !loadingForecast}
					timeout={duration}
				>
					{(state) => (
						<div
							style={{
								...DtlsContainer,
								...DtlsContainerTransition[state],
							}}
						>
							{useF ? (
								<div className="unitsContainer">
									<p id="celsius" className="unit" onClick={handleUnitClick}>
										°C
									</p>
									<p
										id="fahr"
										className="unit selectedUnit"
										onClick={handleUnitClick}
									>
										°F
									</p>
								</div>
							) : (
								<div className="unitsContainer">
									<p
										id="celsius"
										className="unit selectedUnit"
										onClick={handleUnitClick}
									>
										°C
									</p>
									<p id="fahr" className="unit" onClick={handleUnitClick}>
										°F
									</p>
								</div>
							)}
							<div className="weekContainer">{weekForecastComponents}</div>
							<p id="sectionTitle">Today's Highlights</p>
							<div className="currCardContainer">
								<CurrDetailsCard
									data={dataArr[0]}
									tempConfig={props.tempConfig}
								/>
								<CurrDetailsCard data={dataArr[1]} />
							</div>
							<div className="currCardContainer">
								<CurrDetailsCard data={dataArr[2]} />
								<CurrDetailsCard data={dataArr[3]} />
							</div>
						</div>
					)}
				</Transition>
				<p id="credits">
					Created by{" "}
					<a id="ghLink" href="https://github.com/notstoe">
						Gustavo Tonin
					</a>
				</p>
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
