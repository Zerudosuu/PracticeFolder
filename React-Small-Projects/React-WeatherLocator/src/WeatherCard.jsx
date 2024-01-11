import "./style/WeatherCard.scss";

const WeatherCard = (props) => {
  const weather = props.data;
  const getCity = props.getCity;

  if (!weather || !weather.weather || weather.weather.length === 0) {
    // Handle the case when weather data is not available
    return <div>No weather data available</div>;
  }

  let WeatherImage =
    weather.weather[0].main === "Clouds"
      ? "/images/clouds.png"
      : weather.weather[0].main === "Clear"
      ? "/images/clear.png"
      : weather.weather[0].main === "Rain"
      ? "/images/rain.png"
      : weather.weather[0].main === "Drizzle"
      ? "/images/drizzle.png"
      : weather.weather[0].main === "Mist"
      ? "/images/mist.png"
      : weather.weather[0].main === "Snow"
      ? "/images/snow.png"
      : "/images/default.png";

  return (
    <div className="card">
      <form className="search">
        <input
          type="text"
          className="cityname"
          placeholder="Enter the city name"
          spellCheck="false"
        />
        <button className="searchbutton" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </form>

      <div className="weather">
        {/* Display dynamic data */}
        <img src={WeatherImage} className="weather-icon" alt="" />
        <h1 className="temp">{props.data.main?.temp || "N/A"}</h1>
        <h2 className="city">{props.data.name || "N/A"}</h2>
        <div className="details">
          <div className="col">
            <img src={WeatherImage} alt="" />
            <div>
              <p className="humidity">{props.data.main?.humidity || "N/A"}</p>
              <p>Humidity</p>
            </div>
          </div>
          <div className="col">
            <img src="public/images/wind.png" alt="" />
            <div>
              <p className="wind">{`${
                props.data.wind?.speed || "N/A"
              } km/h`}</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
