import { useState } from "react";
import "./App.css";

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}
function App() {
  const key = "79403fc4f94038be252498fae55ec143";
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  console.log(city);
  const fetchWeather = async () => {
    setLoading(true);
    setError(""); // reset error
    setWeather(null); // optional: clear previous weather
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
      );
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  console.log(weather);
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[350px] flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4 text-blue-700">Weather App</h1>

        <div className="flex w-full mb-4">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="Enter city"
            className="flex-1 bg-gray-100 border-2 border-gray-300 px-4 py-2 rounded-l-lg outline-none"
          />
          <button
            onClick={fetchWeather}
            className="bg-blue-700 text-white px-4 py-2 rounded-r-lg"
          >
            Search
          </button>
        </div>

        {/* Result Box with min-height to prevent layout shift */}
        <div className="min-h-[120px] flex flex-col items-center justify-center w-full">
          {loading && <p className="text-blue-600">Loading...</p>}
          {error && <p className="text-red-600">{error}</p>}

          {weather && !loading && !error && (
            <div className="text-center">
              <h2 className="text-xl font-semibold">{weather.name}</h2>
              <p className="text-lg">
                {(weather.main.temp - 273.15).toFixed(2)}°C
              </p>
              <p className="capitalize text-gray-600">
                {weather.weather[0].description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
