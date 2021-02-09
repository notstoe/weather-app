import React, { useState } from "react";
import { Transition } from "react-transition-group";
import "./ForecastContainer.css";
import locationIcon from "./Assets/locationIcon.svg";
import currentLocationIcon from "./Assets/currentLocationIcon.svg";
import searchIcon from "./Assets/searchIcon.svg";
import getIcon from "../../Assets/getIcon";
import SearchItem from "./SearchItem/SearchItem";

function ForecastContainer(props) {
	const [searching, setSearching] = useState(false);

	const { temp, name, overall, id } = props.weatherData;
	const { location, handleChange, handleSubmit } = props;

	const currDate = new Date().toLocaleDateString("en-UK", {
		weekday: "short",
		day: "numeric",
		month: "short",
	});

	function handleClick() {
		setSearching((prevValue) => !prevValue);
	}

	const durationForecast = 150; //opacity transition duration in ms

	const forecastContainer = {
		transition: `opacity ${durationForecast}ms ease-in`,
	};

	const forecastContainerTransition = {
		entering: { opacity: 0 },
		entered: { opacity: 1 },
		exiting: { opacity: 1 },
		exited: { opacity: 0 },
	};

	const durationDisplay = 150;

	const displayTransition = {
		entering: { opacity: 0 },
		entered: { backgroundPosition: "-840% 80%", opacity: 0.06 },
		exiting: { opacity: 0.06 },
		exited: { opacity: 0 },
	};

	const weatherIconDefault = {
		transition: `opacity 2.8s ease-in`,
	};

	const weatherIconTransition = {
		entering: { opacity: 0 },
		entered: { opacity: 1 },
		exiting: { opacity: 1 },
		exited: { opacity: 0 },
	};

	if (!searching) {
		return (
			<div className="forecastContainerBigDiv">
				<Transition
					in={!searching}
					appear={!searching}
					timeout={durationForecast}
				>
					{(state) => (
						<div
							className="forecastContainer"
							style={{
								...forecastContainer,
								...forecastContainerTransition[state],
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
								/>
							</div>

							<div className="displayWeather">
								<Transition
									in={!searching}
									appear={!searching}
									timeout={durationDisplay}
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
								<Transition in={!searching} appear={!searching} timeout={150}>
									{(state) => (
										<img
											src={getIcon(id)}
											alt="weatherIcon"
											id="weatherIcon"
											style={{
												...weatherIconDefault,
												...weatherIconTransition[state],
											}}
										/>
									)}
								</Transition>
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
				<div className="searchBarContainer">
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
						}}
					>
						Search
					</button>
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
