const weatherDataModule = require("./weather-data");

const showWeatherInfo = async (location) => {
  const weather = await weatherDataModule.getWeatherData(location);
  console.log(
    `Pogoda w ${location}: ${weather.weather[0].main || ""},  ${
      weather.weather[0].description || ""
    }`
  );
};

module.exports = { showWeatherInfo };
