import { useState } from "react";
import { Accordion, Button, Container } from "react-bootstrap";
import SingolaScheda from "./SingolaScheda";

const NextDay = ({ city }) => {
  const [show, setShow] = useState(false);
  console.log(city[0].dt_txt);

  return (
    <Container>
      <Button
        className="my-5"
        variant="primary"
        onClick={() => {
          show ? setShow(false) : setShow(true);
        }}
      >
        Mostra/Nascondi Previsioni Future
      </Button>
      {show && (
        <Accordion>
          {city.map((obj, i) => (
            <Accordion.Item key={i} eventKey={i}>
              <Accordion.Header>Date : {obj.dt_txt}</Accordion.Header>
              <Accordion.Body>
                <SingolaScheda city={obj} />
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
    </Container>
  );
};

export default NextDay;
