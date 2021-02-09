import React, { useEffect, useState } from "react";
import "./reset.css";
import "./App.css";
import DetailsContainer from "./Components/DetailsContainer/DetailsContainer";
import ForecastContainer from "./Components/ForecastContainer/ForecastContainer";

function App() {
	const [weatherData, setWeatherData] = useState({ loadingWeather: true });
	const [forecastObj, setForecastObj] = useState({ loadingForecast: true });
	const [location, setLocation] = useState("");

	function getData(input) {
		fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=6bf8b98d56a02598af5baf4525e45b8a`
		)
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
		getData("Liverpool");
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
		setWeatherData({ loadingWeather: true });
		setForecastObj({ loadingForecast: true });
		if (e) {
			getData(e.currentTarget.firstChild.textContent);
		} else {
			getData(location);
		}
	}

	return (
		<div className="pageContainer">
			<ForecastContainer
				weatherData={weatherData}
				location={location}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
			<DetailsContainer weatherData={weatherData} forecastArr={forecastObj} />
		</div>
	);
}

export default App;
