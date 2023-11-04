import { Col, Container, Row } from "react-bootstrap";
import NextDay from "./NextDay";
import SchedaNext from "./SchedaNext";
import SingolaScheda from "./SingolaScheda";

const SchedaMeteo = ({ city, cityFore }) => {
  return (
    <Container className="myContainer">
      <Row className="my-3">
        <Col xs={5} className="mx-auto my-2">
          <h3>
            {city.name}
            {", "} {city.sys.country}
          </h3>
          <div>
            <span>
              lat : {city.coord.lat}, lon : {city.coord.lon}
            </span>
          </div>
        </Col>
      </Row>
      <Row className="my-5">
        <Col xs={5} className="mx-auto">
          <Row>
            <Col xs={5} className="mx-auto">
              <h4>Now</h4>
            </Col>
            <SingolaScheda city={city} />
          </Row>
        </Col>
        <Col xs={5} className="mx-auto">
          {cityFore.list.map((obj, i) => {
            return i < 3 && <SchedaNext key={i} city={obj} />;
          })}
        </Col>
      </Row>
      <Row>
        <Col xs={10} className="mx-auto">
          <NextDay city={cityFore.list} />
        </Col>
      </Row>
    </Container>
  );
};

export default SchedaMeteo;
