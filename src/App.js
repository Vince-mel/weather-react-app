import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col sm={6}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
