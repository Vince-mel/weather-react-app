import { useEffect, useState } from "react";
import { Alert, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import SchedaMeteo from "./SchedaMeteo";

const Home = () => {
  const [cityName, setCityName] = useState("");
  const [city, setCity] = useState(null);
  const [cityFore, setCityFore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const baseEndpoint = "https://api.openweathermap.org/data/2.5/weather?q=";
  const baseEndpoint2 = "https://api.openweathermap.org/data/2.5/forecast?q=";
  const baseEndpoint3 = "https://api.openweathermap.org/data/2.5/weather?";
  const baseEndpoint4 = "https://api.openweathermap.org/data/2.5/forecast?";
  const apiKey = "&appid=c5f9c3de77f6d924451c850c13f5a0f6";

  useEffect(() => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition((position) => {
      (async () => {
        try {
          const response = await fetch(
            baseEndpoint3 +
              "lat=" +
              position.coords.latitude.toFixed(2) +
              "&lon=" +
              position.coords.longitude.toFixed(2) +
              apiKey
          );

          if (response.ok) {
            const data = await response.json();
            setCity(data);
          }

          const response2 = await fetch(
            baseEndpoint4 +
              "lat=" +
              position.coords.latitude.toFixed(2) +
              "&lon=" +
              position.coords.longitude.toFixed(2) +
              apiKey
          );

          if (response2.ok) {
            const data2 = await response2.json();
            setCityFore(data2);
            setLoading(false);
          }
        } catch (err) {
          console.log("Si è verificato un errore", err);
          setLoading(false);
          setError(true);
        }
      })();
    });
  }, []);

  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(baseEndpoint + cityName + apiKey);

      if (response.ok) {
        const data = await response.json();
        setCity(data);
      }

      const response2 = await fetch(baseEndpoint2 + cityName + apiKey);

      if (response2.ok) {
        const data2 = await response2.json();
        setCityFore(data2);
        setLoading(false);
      }
    } catch (err) {
      console.log("Si è verificato un errore");
      setLoading(false);
      setError(true);
    }
  };

  return (
    <Container fluid className="background">
      <h1>Epic Meteo</h1>
      <Container>
        <Row>
          <Col xs={10} className="mx-auto my-3">
            <h3
              className="text-start"
              style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
            >
              Cerca una città
            </h3>
          </Col>
          <Col xs={10} className="mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                value={cityName}
                onChange={handleChange}
                placeholder="Inserisci la tua città..."
              />
            </Form>
          </Col>
        </Row>
        {loading ? (
          <Spinner className="my-5" animation="border" variant="info" />
        ) : error ? (
          <Alert className="my-5" variant="danger">
            Si è verificato un errore
          </Alert>
        ) : city && cityFore ? (
          <SchedaMeteo city={city} cityFore={cityFore} />
        ) : (
          <></>
        )}
      </Container>
    </Container>
  );
};

export default Home;
