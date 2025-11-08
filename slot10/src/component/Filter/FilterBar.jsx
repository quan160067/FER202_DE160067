// src/components/Filter/FilterBar.jsx
import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function FilterBar() {
  return (
    <Form className="mb-4 p-3 bg-light rounded">
      <Row className="align-items-end">
        <Col md={4}>
          <Form.Group controlId="search">
            <Form.Label>Search movie</Form.Label>
            <Form.Control type="text" placeholder="Enter title or description..." />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group controlId="filterYear">
            <Form.Label>Filter by Year</Form.Label>
            <Form.Select>
              <option>All</option>
              <option>≤2000</option>
              <option>2001–2015</option>
              <option>≥2016</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group controlId="sort">
            <Form.Label>Sort</Form.Label>
            <Form.Select>
              <option>Title A–Z</option>
              <option>Title Z–A</option>
              <option>Year ↑</option>
              <option>Year ↓</option>
              <option>Duration ↑</option>
              <option>Duration ↓</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={2}>
          <Button variant="primary" className="w-100">Filter</Button>
        </Col>
      </Row>
    </Form>
  );
}
