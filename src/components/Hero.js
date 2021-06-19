import React from "react";
import { Row, Col, Jumbotron, Button, Image } from "react-bootstrap";
import logo from "../assets/logo_magicpay_mobile.png";
import logoDesktop from "../assets/logo_magicpay_desktop.png";
import "./Hero.scss";

const Hero = () => (
  <Jumbotron className="text-center text-ligt hero">
    <Row>
      <Col lg className="text-center my-lg-5">
        <Image className="d-lg-none" src={logo} />
        <Image
          className="float-end d-none d-lg-inline-block"
          src={logoDesktop}
        />
      </Col>
      <Col lg className="text-start my-lg-5 text-light">
        <p>Pague suas contas pelo nosso APP</p>
        <Button variant="outline-light">Abra sua Conta</Button>
      </Col>
    </Row>
  </Jumbotron>
);

export default Hero;
