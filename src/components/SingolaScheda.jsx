import { Col, Row } from "react-bootstrap";

const SingolaScheda = ({ city }) => {
  return (
    <Row>
      <Col xs={12} className="mx-auto">
        <div className="d-flex my-5 justify-content-around">
          <div className="mb-4">
            <h5>{city.weather[0].main}</h5>
            <img
              src={
                "http://openweathermap.org/img/w/" +
                city.weather[0].icon +
                ".png"
              }
              alt="icon"
            />
          </div>
          <div>
            <p>Clouds : {city.clouds.all}%</p>
            <p>Humidity : {city.main.humidity}% </p>
            <p>Pressure : {city.main.pressure}b</p>
          </div>
        </div>
        <div className="d-flex my-5 justify-content-around">
          <div>
            <p>Temp : {(city.main.temp - 273).toFixed(1)}C°</p>
            <p>Max : {(city.main.temp_max - 273).toFixed(1)}C°</p>
            <p>Min : {(city.main.temp_min - 273).toFixed(1)}C°</p>
          </div>
          <div>
            <p>Wind Deg : {city.wind.deg}°</p>
            <p>Wind Speed : {city.wind.speed} m/s</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default SingolaScheda;
