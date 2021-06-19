import React from "react";
import { Container, Row, Button } from "react-bootstrap";

const CenteredButton = ({ children }) => (
  <Container>
    <Row className=" justify-content-center">
      <Button className="my-5 px-5 py-2 w-auto" variant="success">
        {children}
      </Button>
    </Row>
  </Container>
);

export default CenteredButton;
