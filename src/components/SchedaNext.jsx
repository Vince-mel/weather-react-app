import { Col, Row } from "react-bootstrap";

const SchedaNext = ({ city }) => {
  let dataOra = city.dt_txt;
  let parti = dataOra.split(" ");

  let ora = parti[1].substring(0, 5);

  let data = parti[0].split("-").reverse().join("-");

  let risultato = data + " " + ora;

  return (
    <Row className="mb-1">
      <Col xs={12} className="mx-auto">
        <div>
          <h5>Data : {risultato}</h5>
        </div>
        <div className="d-flex my-1 justify-content-around">
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
            <p>Temp : {(city.main.temp - 273).toFixed(1)}C°</p>
            <p>Max : {(city.main.temp_max - 273).toFixed(1)}C°</p>
            <p>Min : {(city.main.temp_min - 273).toFixed(1)}C°</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default SchedaNext;
