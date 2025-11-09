// src/pages/DashboardPage.jsx
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function DashboardPage() {
  const { state, dispatch } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => { dispatch({ type: "LOGOUT" }); navigate("/login"); };

  return (
    <>
      <Navbar bg="light" expand="lg" className="px-3">
        <Container>
          <Navbar.Brand>TuitionTracker</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/users">User Management</Nav.Link>
          </Nav>
          <div className="ms-auto">
            Signed in as <strong>{state.user?.fullName}</strong>{" "}
            <Button variant="outline-danger" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <h4>Dashboard – Tuition Payment</h4>
        <p>Filter & sort payment data here...</p>
      </Container>
    </>
  );
}
export default DashboardPage;
