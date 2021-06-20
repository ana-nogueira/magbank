import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, Image } from "react-bootstrap";
import IconText from "./IconText";
import creditCard from "../assets/credit-card.jpg";
import "./CreditCard.scss";

const CreditCard = () => (
  <Container className="my-5">
    <Row>
      <Col xs={12} lg={7} className="mb-5 mb-lg-0 px-5 px-lg-0">
        <Row>
          <h2 className="my-5 credit-card-title">Cartão de crédito</h2>
        </Row>
        <Row>
          <Col xs={12} lg={6} className="mb-4">
            <IconText
              icon="credit-card"
              size={2}
              color="#f05656"
              textClassName="h5 text-muted"
            >
              Crédito Pessoal
            </IconText>
          </Col>
          <Col xs={12} lg={6} className="mb-4">
            <IconText
              icon="shopping-cart"
              size={2}
              color="#f05656"
              textClassName="h5 text-muted"
            >
              Pagamentos Online
            </IconText>
          </Col>
          <Col xs={12} lg={6} className="mb-4">
            <IconText
              icon="mobile"
              size={2}
              color="#f05656"
              textClassName="h5 text-muted"
            >
              APP
            </IconText>
          </Col>
          <Col xs={12} lg={6} className="mb-4">
            <IconText
              icon="wallet"
              size={2}
              color="#f05656"
              textClassName="h5 text-muted"
            >
              Carteira Digital
            </IconText>
          </Col>
        </Row>
      </Col>
      <Col xs={12} lg={5}>
        <Image src={creditCard} alt="Magbank Credit Card Example" fluid />
      </Col>
    </Row>
  </Container>
);

export default CreditCard;
