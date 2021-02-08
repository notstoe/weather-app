import React from "react";
import "./ForecastContainer.css";
import locationIcon from "./Assets/locationIcon.svg";
import currentLocationIcon from "./Assets/currentLocationIcon.svg";
import searchIcon from "./Assets/searchIcon.svg";
import getIcon from "../../Assets/getIcon";
import SearchItem from "./SearchItem/SearchItem";

function ForecastContainer(props) {
	const { temp, name, overall, id, loadingWeather } = props.weatherData;

	const currDate = new Date().toLocaleDateString("en-UK", {
		weekday: "short",
		day: "numeric",
		month: "short",
	});

	if (!loadingWeather) {
		return (
			<div className="forecastContainer">
				<div className="searchBarInactive">
					<button id="searchBtnInactive">Search for places</button>
					<img
						src={currentLocationIcon}
						alt="current location"
						id="currentLocationIcon"
					/>
				</div>
				<div className="displayWeather">
					<img src={getIcon(id)} alt="weatherIcon" id="weatherIcon" />
				</div>
				<p id="tempDisplay">
					{temp}
					<span>°C</span>
				</p>
				<p id="description">{overall}</p>
				<p id="date">
					{"Today"}&nbsp;&nbsp; • &nbsp;&nbsp;{currDate}
				</p>
				<p className="location">
					<img src={locationIcon} alt="location icon" id="locationIcon" />
					&nbsp;{name}
				</p>
			</div>
		);
	} else {
		return (
			<div
				className="forecastContainer"
				style={{ justifyContent: "flex-start" }}
			>
				<p id="closeBtn">&times;</p>
				<div className="searchBarContainer">
					<div className="inputContainer">
						<img src={searchIcon} alt="searchIcon" id="searchIcon"></img>
						<input
							type="text"
							name="cityName"
							id="inputArea"
							placeholder="search location"
						></input>
					</div>
					<button id="searchBtnActive">Search</button>
				</div>
				<SearchItem />
				<SearchItem />
				<SearchItem />
				<SearchItem />
			</div>
		);
	}
}

export default ForecastContainer;
