const axios = require("axios");

const getWeatherData = async (name) => {
  try {
    const weatherData = await axios(
      encodeURI(
        `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q=${name}`
      )
    );

    return weatherData.data;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getWeatherData };
