import { Form, Row, Col } from "react-bootstrap";
import { usePayments } from "../contexts/PaymentContext";

function FilterBar() {
  const { dispatch, filter, sort } = usePayments();

  const handleFilterChange = (e) => {
    dispatch({ type: "SET_FILTER", payload: e.target.value });
  };

  const handleSortChange = (e) => {
    dispatch({ type: "SET_SORT", payload: e.target.value });
  };

  return (
    <Form className="mb-3">
      <Row>
        <Col md={6}>
          <Form.Control
            placeholder="Search by course name or semester..."
            value={filter}
            onChange={handleFilterChange}
          />
        </Col>
        <Col md={6}>
          <Form.Select value={sort} onChange={handleSortChange}>
            <option value="">Sort by...</option>
            <option value="name-asc">Course A → Z</option>
            <option value="name-desc">Course Z → A</option>
            <option value="date-asc">Date ↑</option>
            <option value="date-desc">Date ↓</option>
            <option value="amount-asc">Amount ↑</option>
            <option value="amount-desc">Amount ↓</option>
          </Form.Select>
        </Col>
      </Row>
    </Form>
  );
}

export default FilterBar;
