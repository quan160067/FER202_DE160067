// src/components/UserFilter.jsx
import { Form, Row, Col } from "react-bootstrap";
import { useUsers } from "../contexts/UserContext";

function UserFilter() {
  const { filter, sort, dispatch } = useUsers();

  return (
    <Form className="mb-3">
      <Row>
        <Col md={6}>
          <Form.Control
            placeholder="Search username or name..."
            value={filter}
            onChange={(e) => dispatch({ type: "SET_FILTER", payload: e.target.value })}
          />
        </Col>
        <Col md={6}>
          <Form.Select
            value={sort}
            onChange={(e) => dispatch({ type: "SET_SORT", payload: e.target.value })}
          >
            <option value="">Sort by...</option>
            <option value="name-asc">Name A→Z</option>
            <option value="name-desc">Name Z→A</option>
            <option value="role">Role</option>
            <option value="status">Status</option>
          </Form.Select>
        </Col>
      </Row>
    </Form>
  );
}
export default UserFilter;
