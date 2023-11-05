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
          {city.map((obj, i) => {
            let dataOra = obj.dt_txt;
            let parti = dataOra.split(" ");

            let ora = parti[1].substring(0, 5);

            let data = parti[0].split("-").reverse().join("-");

            let risultato = data + " " + ora;

            return (
              <Accordion.Item key={i} eventKey={i}>
                <Accordion.Header>Data : {risultato}</Accordion.Header>
                <Accordion.Body>
                  <SingolaScheda city={obj} />
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      )}
    </Container>
  );
};

export default NextDay;
