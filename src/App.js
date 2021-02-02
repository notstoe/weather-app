import React, { useEffect, useState } from "react";
import "./reset.css";
import "./App.css";
import DetailsContainer from "./Components/detailsContainer/DetailsContainer";
import ForecastContainer from "./Components/forecastContainer/ForecastContainer";

function App() {
	const [weatherData, setWeatherData] = useState({ loading: true });
	useEffect(() => {
		fetch(
			"http://api.openweathermap.org/data/2.5/weather?q=Liverpool&units=metric&appid=6bf8b98d56a02598af5baf4525e45b8a"
		)
			.then((response) => response.json())
			.then((data) => {
				setWeatherData({
					loading: false,
					name: data.name,
					feels_like: data.main.feels_like,
					temp: data.main.temp,
					temp_max: data.main.temp_max,
					temp_min: data.main.temp_min,
					humidity: data.main.humidity,
					pressure: data.main.pressure,
					overall: data.weather[0].description,
				});
			});
	}, []);

	return (
		<div className="pageContainer">
			{/* <p>{state.loading ? "loading..." : state.temp + " ℃"}</p> */}
			<ForecastContainer />
			<DetailsContainer />
		</div>
	);
}

export default App;
