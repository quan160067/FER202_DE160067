import React from "react";
import { Card, Row, Col, Badge, Button } from "react-bootstrap";
import { movies } from "../../data/movies";

export default function MovieCard() {
  return (
    <div className="container mt-5">
      <h4 className="mb-3 text-center">Now Showing</h4>
      <Row>
        {movies.map((m) => (
          <Col key={m.id} md={4} sm={6} xs={12} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={m.poster}
                alt={m.title}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{m.title}</Card.Title>
                <Card.Text style={{ fontSize: "0.9rem" }}>
                  {m.description}
                </Card.Text>
                <div className="mb-2">
                  <Badge bg="info" className="me-1">
                    {m.genre}
                  </Badge>
                  <Badge bg="secondary">{m.year}</Badge>
                </div>
                <Button variant="primary" className="me-2">
                  Details
                </Button>
                <Button variant="warning">Add to Favourites</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
