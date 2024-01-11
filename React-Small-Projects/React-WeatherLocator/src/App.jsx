import { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";

function App() {
  const [city, setCity] = useState("Tinambac");
  const [weather, setWeather] = useState({
    main: { temp: "", humidity: "" },
    name: "",
    wind: { speed: "" },
    weather: [],
  });

  const apiKey = "726f2da427a59a76d063b44e24fcfcaa";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  useEffect(() => {
    async function getWeather() {
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
    }

    getWeather();
  }, [city]);

  function getCity(event) {
    event.preventDefault();
  }

  return <WeatherCard data={weather} getCity={getCity} />;
}

export default App;
