import React, { useEffect, useState } from "react";
import "./reset.css";
import "./App.css";
import DetailsContainer from "./Components/DetailsContainer/DetailsContainer";
import ForecastContainer from "./Components/ForecastContainer/ForecastContainer";

function App() {
	const [weatherData, setWeatherData] = useState({ loadingWeather: true });
	const [forecastObj, setForecastObj] = useState({ loadingForecast: true });
	const [location, setLocation] = useState("");
	const [useFarh, setUseFarh] = useState(false);

	function farhToC(cTemp) {
		return (cTemp * 9) / 5 + 32;
	}

	function changeUnit() {
		setUseFarh((prevState) => !prevState);
	}

	let tempConfig = {
		toF: farhToC,
		useF: useFarh,
		changeUnit: changeUnit,
	};

	function getData(input, coords) {
		setWeatherData({ loadingWeather: true });
		setForecastObj({ loadingForecast: true });
		let dataPromise;

		if (input.length < 1) {
			dataPromise = fetch(
				`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=6bf8b98d56a02598af5baf4525e45b8a`
			);
		} else {
			dataPromise = fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=6bf8b98d56a02598af5baf4525e45b8a`
			);
		}
		dataPromise
			.then((response) => response.json())
			.then((data) => {
				setWeatherData({
					loadingWeather: false,
					name: data.name,
					temp: Math.round(Number(data.main.temp)),
					feelsLike: Math.round(Number(data.main.feels_like)),
					tempMax: Math.round(Number(data.main.temp_max)),
					tempMin: Math.round(Number(data.main.temp_min)),
					humidity: data.main.humidity,
					visibility: data.visibility,
					pressure: data.main.pressure,
					overall: data.weather[0].main,
					id: data.weather[0].id,
					coord: data.coord,
				});
			});
	}

	useEffect(() => {
		getData("London");
	}, []);

	useEffect(() => {
		if (weatherData.coord) {
			fetch(
				`https://api.openweathermap.org/data/2.5/onecall?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=6bf8b98d56a02598af5baf4525e45b8a`
			)
				.then((response) => response.json())
				.then((data) => {
					setForecastObj({
						loadingForecast: false,
						dailyArr: data.daily,
					});
				});
		}
	}, [weatherData.coord]);

	function handleChange(e) {
		const { value } = e.target;
		setLocation(value);
	}

	function handleSubmit(e) {
		if (e) {
			getData(e.currentTarget.firstChild.textContent);
		} else {
			getData(location);
		}
		setLocation("");
	}

	return (
		<div className="pageContainer">
			<ForecastContainer
				weatherData={weatherData}
				location={location}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				getData={getData}
				tempConfig={tempConfig}
			/>
			<DetailsContainer
				weatherData={weatherData}
				forecastArr={forecastObj}
				tempConfig={tempConfig}
			/>
		</div>
	);
}

export default App;
