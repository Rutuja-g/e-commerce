import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import categories from "../db/categories.json";

const Home = () => {
  return (
    <Container>
      <Row>
        {categories.map((c) => (
          <Col tag={Link} key={c.id} to={`/category/${c.id} `}></Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
