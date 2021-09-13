import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/MAGbank.png";
import appleStore from "../assets/appStore.jpg";
import googlePlay from "../assets/googlePlay.jpg";
import "./Footer.scss";

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row className="text-center py-5">
        <Col xs={12} lg={6} className="d-lg-flex text-lg-left">
          <Image src={logo} />
        </Col>
        <Col xs={12} lg={4}>
          <Image src={appleStore} />
          <Image src={googlePlay} className="ml-2" />
        </Col>
        <Col
          sx={12}
          lg={2}
          className="d-flex align-items-center justify-content-center"
        >
          <a
            href="http://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebookSquare}
              color="#7c7c7c"
              size="2x"
            />
          </a>
          <a
            href="http://twitter.com/"
            target="_blank"
            rel="noopener
            noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} color="#7c7c7c" size="2x" />
          </a>
          <a
            href="http://youtube.com/"
            target="_blank"
            rel="noopener
            noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} color="#7c7c7c" size="2x" />
          </a>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
