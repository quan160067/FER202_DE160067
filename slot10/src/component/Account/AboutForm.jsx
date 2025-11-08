// src/components/Account/AboutForm.jsx
import React from "react";
import { Form, Button } from "react-bootstrap";
import { BiPersonCircle, BiPhone, BiEnvelope, BiImage } from "react-icons/bi";

export default function AboutForm() {
  return (
    <Form>
      <h5><BiPersonCircle /> About Information</h5>
      <Form.Group className="mb-3">
        <Form.Label>First Name *</Form.Label>
        <Form.Control type="text" placeholder="First name" isInvalid={false} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last Name *</Form.Label>
        <Form.Control type="text" placeholder="Last name" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label><BiEnvelope /> Email *</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label><BiPhone /> Phone *</Form.Label>
        <Form.Control type="text" placeholder="Your phone number" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Age *</Form.Label>
        <Form.Control type="number" placeholder="Enter your age" isInvalid />
        <Form.Control.Feedback type="invalid">
          Age is required
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label><BiImage /> Avatar</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      <div className="d-flex justify-content-end mt-3">
        <Button variant="secondary" disabled>Previous</Button>
        <Button className="ms-2">Next</Button>
      </div>
    </Form>
  );
}
