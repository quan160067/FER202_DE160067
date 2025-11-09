import { Navbar, Container, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import FilterBar from "../components/FilterBar";
import PaymentTable from "../components/PaymentTable";
import { PaymentProvider } from "../contexts/PaymentContext";

function DashboardPage() {
  const { state, dispatch } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <PaymentProvider>
      <Navbar bg="light" className="px-3">
        <Container className="d-flex justify-content-between">
          <h4>TuitionTracker</h4>
          <div>
            Signed in as <strong>{state.user?.fullName}</strong>{" "}
            <Button variant="outline-danger" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <h4>Payment Management</h4>
        <FilterBar />
        <PaymentTable />
      </Container>
    </PaymentProvider>
  );
}

export default DashboardPage;
