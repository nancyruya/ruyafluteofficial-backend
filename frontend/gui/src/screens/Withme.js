import React from "react";
import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
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
              to serve my community, and very selective about the things I end
              up working on.{" "}
            </p>
            <p>
              <a href="mailto: juliac1741@gmail.com">
                <u>Contact me</u>
              </a>{" "}
              by email if you’d like to discuss a
              collaboration!
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h3> Some of the Projects I've worked on:</h3>
            <p>
              {" "}
              I create content for flute on Insta and Youtube. But, Patreon page
              below provide me the time and resources necessary to creat
              exclusive flute lessons, tutorials, Livestream and more.
            </p>
          </Col>
        </Row>
        <Row>
          <a href="https://www.patreon.com/ruyaflute">
            <Image src={require("../Patron.JPG")} fluid />
          </a>
        </Row>
        <br />
        <Row>
          <Col>
            <h3> Testimonials: </h3>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h6>
              {" "}
              I want to thank you, you're giving me a motivation to practice
              even harder than before.
            </h6>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h6>
              {" "}
              I admire the consistency, I also liked what you had to say about
              why you play.{" "}
            </h6>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h6>
              {" "}
              Dear friend, you are very good and you play with great passion. I
              congratulate you.{" "}
            </h6>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h6>
              {" "}
              You come from a musical classical background, and you kind of
              follow the rules according to that, but also you follow an own
              path and you document it all. Its pretty unique. And you have that
              kind of never ceasing flame, which only you seem to feel it burns
              for or in what direction.{" "}
            </h6>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h6>
              {" "}
              You inspire me to keep playing my instrument everyday :) {" "}
            </h6>
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
