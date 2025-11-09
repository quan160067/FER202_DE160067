// src/pages/UserListPage.jsx
import { Container, Navbar, Nav } from "react-bootstrap";
import UserFilter from "../components/UserFilter";
import UserTable from "../components/UserTable";
import { UserProvider } from "../contexts/UserContext";
import { Link } from "react-router-dom";

function UserListPage() {
  return (
    <UserProvider>
      <Navbar bg="light" className="px-3">
        <Container>
          <Navbar.Brand>User Management</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/home">Back to Dashboard</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <UserFilter />
        <UserTable />
      </Container>
    </UserProvider>
  );
}
export default UserListPage;
