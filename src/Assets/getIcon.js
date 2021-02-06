import clear from "./Clear.png";
import lightCloud from "./LightCloud.png";
import heavyCloud from "./HeavyCloud.png";
import lightRain from "./LightRain.png";
import heavyRain from "./HeavyRain.png";
import shower from "./Shower.png";
import thunderstorm from "./Thunderstorm.png";
import snow from "./Snow.png";
import sleet from "./Sleet.png";
import hail from "./Hail.png";

const iconsObj = {
	clear: clear,
	lightCloud: lightCloud,
	heavyCloud: heavyCloud,
	lightRain: lightRain,
	heavyRain: heavyRain,
	shower: shower,
	thunderstorm: thunderstorm,
	snow: snow,
	sleet: sleet,
	hail: hail,
};

//Support function to get icons
//id is always a 3-digit number (based on API documentation) https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2

function getIcon(id) {
	let iconImg;
	switch (
		Math.floor(id / 100) //id is always a 3-digit number (based on API documentation) https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
	) {
		case 2:
			iconImg = iconsObj.thunderstorm;
			break;

		case 3:
			iconImg = iconsObj.lightRain;
			break;

		case 5:
			if (id < 502) {
				iconImg = iconsObj.lightRain;
			} else if (id < 505) {
				iconImg = iconsObj.heavyRain;
			} else if (id < 512) {
				iconImg = iconsObj.hail;
			} else if (id < 532) {
				iconImg = iconsObj.shower;
			}
			break;

		case 6:
			if (id < 603) {
				iconImg = iconsObj.snow;
			} else if (id < 623) {
				iconImg = iconsObj.sleet;
			}
			break;

		case 7:
			iconImg = iconsObj.lightCloud;
			break;

		case 8:
			if (id === 800) {
				iconImg = iconsObj.clear;
			} else if (id < 803) {
				iconImg = iconsObj.lightCloud;
			} else if (id < 805) {
				iconImg = iconsObj.heavyCloud;
			}
			break;

		default:
			console.log("Oops! Something went wrong");
			break;
	}
	return iconImg;
}

export default getIcon;
