export const getWeatherCondition = ({ latitude, longitude }, apiKey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`,
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const filterWeatherData = (data) => {
  const result = {};

  result.city = data.name;

  const temp = data.main.temp;

  result.temp = { F: temp };
  result.type = getWeatherType(temp);

  // Mapping weather condition according to different codes with dozens of possible
  // values
  /* --------------------- */
  const weatherCode = data.weather[0].id;
  const conditions = [
    "",
    "",
    "thunderstorm",
    "rain",
    "",
    "rain",
    "snow",
    "atmosphere",
    "clouds",
  ];
  let condition;
  if (weatherCode === 800) {
    condition = "clear";
  } else {
    condition = conditions[Math.floor(weatherCode / 100)];
  }
  result.condition = condition;
  /* --------------------- */

  result.isDay = isDay(data.sys, Date.now());
  return result;
};

const isDay = ({ sunrise, sunset }, now) => {
  return sunrise * 1000 < now && sunset * 1000 > now;
};

const getWeatherType = (temp) => {
  if (temp >= 86) {
    return "hot";
  } else if (temp >= 66 && temp < 86) {
    return "warm";
  } else {
    return "cold";
  }
};
