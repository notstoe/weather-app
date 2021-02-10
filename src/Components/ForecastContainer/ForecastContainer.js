import React, { useState } from "react";
import { Transition } from "react-transition-group";
import "./ForecastContainer.css";
import "./ForecastContainerResponsive.css";
import locationIcon from "./Assets/locationIcon.svg";
import currentLocationIcon from "./Assets/currentLocationIcon.svg";
import searchIcon from "./Assets/searchIcon.svg";
import getIcon from "../../Assets/getIcon";
import SearchItem from "./SearchItem/SearchItem";

function ForecastContainer(props) {
	const [searching, setSearching] = useState(false);
	const [historyList, setHistoryList] = useState([]);

	const { temp, name, overall, id, loadingWeather } = props.weatherData;
	const { location, handleChange, handleSubmit, getData } = props;
	const { useF, toF } = props.tempConfig;

	const currDate = new Date().toLocaleDateString("en-UK", {
		weekday: "short",
		day: "numeric",
		month: "short",
	});

	function handleClick() {
		setSearching((prevValue) => !prevValue);
	}

	function addToList() {
		let newList = historyList.map((element) => element);
		if (newList.length > 5) {
			newList.pop();
			newList.unshift(location);
		} else {
			newList.unshift(location);
		}
		setHistoryList(newList);
	}

	const historyComponents = historyList.map((locationName, index) => {
		return (
			<SearchItem
				locationName={locationName}
				key={index}
				handleSubmit={handleSubmit}
			/>
		);
	});

	function getLocation() {
		let options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0,
		};

		function successPos(pos) {
			let currentPos = pos.coords;

			getData("", {
				lat: currentPos.latitude,
				lon: currentPos.longitude,
			});
		}

		function errorPos(err) {
			console.warn(`ERRO1R(${err.code}): ${err.message}`);
		}

		navigator.geolocation.getCurrentPosition(successPos, errorPos, options);
	}

	// CSS TRANSITION HANDLING

	const duration = 200; //opacity transition duration in ms

	const forecastContainer = {
		transition: `opacity ${duration}ms ease-in`,
	};

	const opacityTransition = {
		entering: { opacity: 0 },
		entered: { opacity: 1 },
		exiting: { opacity: 1 },
		exited: { opacity: 0 },
	};

	const displayTransition = {
		entering: { opacity: 0 },
		entered: { backgroundPosition: "-840% 80%", opacity: 0.06 },
		exiting: { opacity: 0.06 },
		exited: { opacity: 0 },
	};

	// COMPONENTS

	if (!searching) {
		return (
			<div className="forecastContainerBigDiv">
				<Transition
					in={!searching && !loadingWeather}
					appear={!searching && !loadingWeather}
					timeout={duration}
				>
					{(state) => (
						<div
							className="forecastContainer"
							style={{
								...forecastContainer,
								...opacityTransition[state],
							}}
						>
							<div className="searchBarInactive">
								<button id="searchBtnInactive" onClick={handleClick}>
									Search for places
								</button>
								<img
									src={currentLocationIcon}
									alt="current location"
									id="currentLocationIcon"
									onClick={getLocation}
								/>
							</div>

							<div className="displayWeather">
								<Transition
									in={!searching && !loadingWeather}
									appear={!searching && !loadingWeather}
									timeout={duration}
								>
									{(state) => (
										<div
											className="fakeAfter"
											style={{
												...displayTransition[state],
											}}
										></div>
									)}
								</Transition>
								<Transition
									in={!searching && !loadingWeather}
									appear={!searching && !loadingWeather}
									timeout={duration}
								>
									{(state) => (
										<img
											src={getIcon(id)}
											alt="weatherIcon"
											id="weatherIcon"
											style={{
												...opacityTransition[state],
											}}
										/>
									)}
								</Transition>
							</div>
							{useF ? (
								<p id="tempDisplay">
									{Math.round(toF(temp))}
									<span>°F</span>
								</p>
							) : (
								<p id="tempDisplay">
									{temp}
									<span>°C</span>
								</p>
							)}
							<p id="description">{overall}</p>
							<p id="date">
								{"Today"}&nbsp;&nbsp; • &nbsp;&nbsp;{currDate}
							</p>
							<p className="location">
								<img src={locationIcon} alt="location icon" id="locationIcon" />
								&nbsp;{name}
							</p>
						</div>
					)}
				</Transition>
			</div>
		);
	} else {
		return (
			<div
				className="forecastContainer"
				style={{ justifyContent: "flex-start" }}
			>
				<p id="closeBtn" onClick={handleClick}>
					&times;
				</p>
				<Transition in={searching} appear={searching} timeout={duration}>
					{(state) => (
						<div
							className="searchBarContainer"
							style={{
								...forecastContainer,
								...opacityTransition[state],
							}}
						>
							<div className="inputContainer">
								<img src={searchIcon} alt="searchIcon" id="searchIcon"></img>
								<input
									type="text"
									name="location"
									id="inputArea"
									placeholder="search location"
									onChange={handleChange}
									value={location}
								></input>
							</div>
							<button
								id="searchBtnActive"
								onClick={() => {
									handleSubmit();
									handleClick();
									addToList();
								}}
							>
								Search
							</button>
						</div>
					)}
				</Transition>
				<Transition in={searching} appear={searching} timeout={duration}>
					{(state) => (
						<div
							className="historyList"
							style={{
								...forecastContainer,
								...opacityTransition[state],
							}}
						>
							{historyComponents}
						</div>
					)}
				</Transition>
			</div>
		);
	}
}

export default ForecastContainer;
