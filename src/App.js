import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [state, setNewState] = useState({ loading: true });

	useEffect(() => {
		fetch(
			"http://api.openweathermap.org/data/2.5/weather?q=Liverpool&units=metric&appid=6bf8b98d56a02598af5baf4525e45b8a"
		)
			.then((response) => response.json())
			.then((data) => {
				setNewState({
					loading: false,
					name: data.name,
					feels_like: data.main.feels_like,
					temp: data.main.temp,
					temp_max: data.main.temp_max,
					temp_min: data.main.temp_min,
					humidity: data.main.humidity,
					pressure: data.main.pressure,
					overall: data.weather[0].main,
				});
			});
	}, []);

	return (
		<div>
			<p>{state.loading ? "loading..." : state.temp + " ℃"}</p>
		</div>
	);
}

export default App;
