import React, { useEffect, useState } from "react";
import "./reset.css";
import "./App.css";
import DetailsContainer from "./Components/DetailsContainer/DetailsContainer";
import ForecastContainer from "./Components/ForecastContainer/ForecastContainer";

function App() {
	const [weatherData, setWeatherData] = useState({ loading: true });
	useEffect(() => {
		//useEffect as ComponentDidMount
		fetch(
			"http://api.openweathermap.org/data/2.5/weather?q=Liverpool&units=metric&appid=6bf8b98d56a02598af5baf4525e45b8a"
		)
			.then((response) => response.json())
			.then((data) => {
				setWeatherData({
					loading: false,
					name: data.name,
					temp: data.main.temp,
					feels_like: data.main.feels_like,
					temp_max: data.main.temp_max,
					temp_min: data.main.temp_min,
					humidity: data.main.humidity,
					visibility: data.visibility,
					pressure: data.main.pressure,
					overall: data.weather[0].description,
				});
			});
	}, []);

	return (
		<div className="pageContainer">
			<ForecastContainer weatherData={weatherData} />
			<DetailsContainer />
		</div>
	);
}

export default App;
