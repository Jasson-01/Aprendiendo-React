import { useState } from "react";

export const WheatherApp = () => {
  const urlBase = "https://api.openweathermap.org/data/2.5/weather";
//  const API_KEY = "e7b8b539977e1b7d82096befbc0136cb";

  const difKelvin = 273.15;

  const [ciudad, setCiudad] = useState("");
  const [dataClima, setDataClima] = useState(null);

  const handleCambioCiudad = (e) => {
    setCiudad(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ciudad.length > 0) fetchClima();
  };

  const fetchClima = async () => {
    try {
      const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`);
      const data = await response.json();
      setDataClima(data);
    } catch (error) {
      console.error("Ocurrio el siguiente problema: ", error);
    }
  };

  return (
    <div className="container">
      <h1>Aplicación del Clima</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={ciudad} onChange={handleCambioCiudad} />
        <button type="submit">Buscar</button>
      </form>
      {dataClima && (
        <div>
          <h2>{dataClima.name}</h2>
          <p>Temperatura: {parseInt(dataClima?.main?.temp - difKelvin)}°C</p>
          <p>Condición metereologica: {dataClima.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`}
            alt=""
          />
        </div>
      )}
    </div>
  );
};
// Hacemos un form para poder consumir lo que esta en el input
