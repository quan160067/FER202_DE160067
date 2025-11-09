// src/components/ConfirmModal.jsx
import { Modal } from "react-bootstrap";

function ConfirmModal({ show, onHide, username }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login Successful</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Welcome <strong>{username}</strong>! Login successful 🎉
      </Modal.Body>
    </Modal>
  );
}
export default ConfirmModal;
