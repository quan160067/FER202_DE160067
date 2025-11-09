import { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { api } from "../services/api";
import { useAuth } from "../contexts/AuthContext";
import ConfirmModal from "./ConfirmModal";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return setError("Username is required");
    if (!password.trim()) return setError("Password is required");

    try {
      const res = await api.get("/users");
      const user = res.data.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        dispatch({ type: "LOGIN", payload: user });
        setShowModal(true);
        setTimeout(() => navigate("/home"), 2000);
      } else {
        setError("Invalid username or password!");
      }
    } catch {
      setError("Server error!");
    }
  };

  return (
    <Card className="p-4 shadow mt-5" style={{ width: "400px", margin: "auto" }}>
      <h3 className="text-center mb-3">Login</h3>
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            isInvalid={!username && error.includes("Username")}
          />
          <Form.Control.Feedback type="invalid">
            Username is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={!password && error.includes("Password")}
          />
          <Form.Control.Feedback type="invalid">
            Password is required
          </Form.Control.Feedback>
        </Form.Group>

        <div className="d-flex justify-content-between">
          <Button type="submit" variant="primary">
            Login
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setUsername("");
              setPassword("");
              setError("");
            }}
          >
            Cancel
          </Button>
        </div>
      </Form>

      <ConfirmModal
        show={showModal}
        onHide={() => setShowModal(false)}
        username={username}
      />
    </Card>
  );
}

export default LoginForm;
