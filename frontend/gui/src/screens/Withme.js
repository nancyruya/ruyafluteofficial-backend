import React from "react";
import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigationbar from "../components/Navigationbar";
import Footerbar from "../components/Footerbar";

function Withme() {
  return (
    <Fragment>
      <Navigationbar />
      <br />
      <br />
      <Container>
        <Row>
          <Col>
            <br />
            <br />
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h1> Work with me </h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
            <p>
              I love collaborating with people that share a similar mission and
              values as me! Having a background in Psychology and Music, I speak
              that language and understand the importance of the right messaging
              and calls to action.{" "}
            </p>
            <p>
              I am open minded and a continuous learner. Our work could range
              from flute tutorial sessions to content creating. I am passionate
              to serve my community, and very selective about the things I
              end up working on.{" "}
            </p>
            <p>
              <a href="mailto: juliac1741@gmail.com">
                <u>Contact me</u>
              </a>{" "}
              by clicking the email icon below if you’d like to discuss a
              collaboration!
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h3> Some of the Projects I've worked on:</h3>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h3> Testimonials: </h3>
          </Col>
        </Row>
        <br />
        <br />
      </Container>
      <Footerbar />
    </Fragment>
  );
}

export default Withme;
