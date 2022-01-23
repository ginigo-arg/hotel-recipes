import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState, useEffect } from "react";
import { Form, InputGroup, Row, Col, Container } from "react-bootstrap";
import { useLocation } from "wouter";

export default function SearchRecipes() {
  const [path, pushLocation] = useLocation();
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
    console.log(keyword);
  };
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <Container className="mb-4">
      <Form onSubmit={handleSubmit}>
        <Row className="align-items-center">
          <Col xs="12">
            <Form.Control
              type="text"
              onChange={handleChange}
              placeholder="Search Recipes..."
              value={keyword}
            ></Form.Control>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
