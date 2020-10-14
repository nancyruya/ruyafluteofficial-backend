import React from "react";
import {
  Container,
  Row,
  Carousel,
  Col,
  Jumbotron,
  Button,
  Accordion,
  Card,
} from "react-bootstrap";
import Image from "react-bootstrap/Image";

const RuyaFlute = () => {
  return (
    <div className="ruyaflute">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../mount.JPG")}
            width="100%"
            height="auto"
            fluid
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
      <div id="Pokeme">
        <br />
        <br />

        <Jumbotron>
          <h1> Hello y'all, welcome to my little world! </h1>

          <p>
            This is a place where you can play around with me. And I can play
            around with you.
          </p>
          <p>By poking me, you agree to buy me coffee.</p>
          <Button
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://www.buymeacoffee.com/ruyaflute";
            }}
          >
            {" "}
            Poke Me{" "}
          </Button>
          <br />
          <br />
          <p><u>Show your support! </u></p>
          <ul>
            <li>Venmo: ruyaflute</li>
            <li>PayPal: paypal.me/ruyaflute</li>
            <li>Zelle: juliac1741@gmail.com</li>
          </ul>
        </Jumbotron>
      </div>

      <Container>
        <Row>
          <Col md={4}>
            <Image src={require("../ruyaflute.JPG")} thumbnail roundedCircle />
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="primary" eventKey="0">
                    My key to happiness:
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <a href="https://www.youtube.com/watch?v=BK6d3U3oOw0">
                      {" "}
                      <u>Practice Practice Practice</u>{" "}
                    </a>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="primary" eventKey="1">
                    Click me!
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Exploration is fun isn't it?</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 8, offset: 3 }}>
            Please comment and subscribe my{" "}
            <a href="https://www.youtube.com/user/nancyruya">
              {" "}
              Youtube channel{" "}
            </a>{" "}
            to show your support!
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RuyaFlute;
