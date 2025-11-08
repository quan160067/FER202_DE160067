// src/components/Account/AccountForm.jsx
import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { BiUser, BiLock, BiQuestionMark } from "react-icons/bi";

export default function AccountForm({ prevStep, nextStep }) {
  return (
    <Form>
      <h5 className="mb-3">
        <BiLock className="me-2" />
        Account Information
      </h5>

      <InputGroup className="mb-3">
        <InputGroup.Text>
          <BiUser />
        </InputGroup.Text>
        <Form.Control placeholder="Username" />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>
          <BiLock />
        </InputGroup.Text>
        <Form.Control type="password" placeholder="Password" />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>
          <BiLock />
        </InputGroup.Text>
        <Form.Control type="password" placeholder="Confirm Password" />
      </InputGroup>

      <Form.Group className="mb-3">
        <Form.Label>
          <BiQuestionMark className="me-2" />
          Secret Question
        </Form.Label>
        <Form.Control type="text" placeholder="Your secret question" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Answer</Form.Label>
        <Form.Control type="text" placeholder="Answer" />
      </Form.Group>

      <div className="d-flex justify-content-between mt-4">
        <Button variant="secondary" onClick={prevStep}>
          Previous
        </Button>
        <Button variant="primary" onClick={nextStep}>
          Next
        </Button>
      </div>
    </Form>
  );
}
