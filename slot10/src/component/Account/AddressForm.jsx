// src/components/Account/AddressForm.jsx
import React from "react";
import { Form, Button } from "react-bootstrap";
import { BiGeoAlt } from "react-icons/bi";

export default function AddressForm({ prevStep }) {
  return (
    <Form>
      <h5 className="mb-3">
        <BiGeoAlt className="me-2" />
        Address Information
      </h5>

      <Form.Group className="mb-3">
        <Form.Label>Street</Form.Label>
        <Form.Control type="text" placeholder="Street name" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Country</Form.Label>
        <Form.Select>
          <option>Viet Nam</option>
          <option>USA</option>
          <option>UK</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <div className="d-flex justify-content-between mt-4">
        <Button variant="secondary" onClick={prevStep}>
          Previous
        </Button>
        <Button variant="success">Finish</Button>
      </div>
    </Form>
  );
}
