import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import IconText from "./IconText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faShieldAlt,
  faUserTie,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

import "./Faq.scss";

const Faq = () => {
  const options = [
    { icon: faCreditCard, text: "Cartão de crédito" },
    { icon: faWallet, text: "Conta e abertura" },
    { icon: faShieldAlt, text: "Token Digital" },
    { icon: faUserTie, text: "Produtos e serviços" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log(index);
  }, [index]);

  return (
    <section className="faq text-light">
      <Container className="py-5">
        <Row className="justify-content-center">
          <h2 className="faq-title my-5">Dúvidas frequentes</h2>
        </Row>

        <Row className="d-flex align-items-center justify-items-center">
          <Col className="d-lg-none mb-5" xs={12}>
            <Row>
              {options.map(({ icon }, key) => (
                <Col className="d-flex justify-content-center" key={key}>
                  <FontAwesomeIcon
                    icon={icon}
                    size="2x"
                    color={key === index ? "#fff" : "#bbb"}
                    onClick={() => setIndex(key)}
                  />
                </Col>
              ))}
            </Row>
            <Row className="justify-content-center mt-5">
              <p className="lead">{options[index].text}</p>
            </Row>
          </Col>

          <Col className="d-none d-lg-block">
            {options.map(({ icon, text }, key) => (
              <IconText
                icon={icon}
                size={3}
                className="faq-clickable mb-3"
                textClassName="lead"
                color={key === index ? "#fff" : "#bbb"}
                onClick={() => setIndex(key)}
                key={key}
              >
                {" "}
                {text}
              </IconText>
            ))}
          </Col>

          <Col>
            <Accordion defaultActiveKey="0" activeKey={`${index}`}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Lorem ipsum dolor sit amet
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    vel quisquam amet recusandae necessitatibus harum beatae in
                    alias et, inventore, doloribus, nemo sint voluptate
                    aspernatur tempora autem ab libero ipsam!Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Quo cupiditate,
                    dolores possimus iusto expedita laborum necessitatibus
                    itaque eaque aliquam at eum perferendis ex! Quo assumenda
                    veritatis fuga laboriosam neque laudantium!
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  Nulla porttitor eros ac ex tristique posuere
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    vel quisquam amet recusandae necessitatibus harum beatae in
                    alias et, inventore, doloribus, nemo sint voluptate
                    aspernatur tempora autem ab libero ipsam!Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Quo cupiditate,
                    dolores possimus iusto expedita laborum necessitatibus
                    itaque eaque aliquam at eum perferendis ex! Quo assumenda
                    veritatis fuga laboriosam neque laudantium!
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  Quisque frincilla tincidunt arcu
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    vel quisquam amet recusandae necessitatibus harum beatae in
                    alias et, inventore, doloribus, nemo sint voluptate
                    aspernatur tempora autem ab libero ipsam!Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Quo cupiditate,
                    dolores possimus iusto expedita laborum necessitatibus
                    itaque eaque aliquam at eum perferendis ex! Quo assumenda
                    veritatis fuga laboriosam neque laudantium!
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  Nam elementum lobortis purus a maximus tortor
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    vel quisquam amet recusandae necessitatibus harum beatae in
                    alias et, inventore, doloribus, nemo sint voluptate
                    aspernatur tempora autem ab libero ipsam!Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Quo cupiditate,
                    dolores possimus iusto expedita laborum necessitatibus
                    itaque eaque aliquam at eum perferendis ex! Quo assumenda
                    veritatis fuga laboriosam neque laudantium!
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Faq;
