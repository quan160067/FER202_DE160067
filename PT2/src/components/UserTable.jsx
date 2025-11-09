// src/components/UserTable.jsx
import { Table, Button, Image } from "react-bootstrap";
import { useUsers } from "../contexts/UserContext";

function UserTable() {
  const { users, filter, sort, updateUser } = useUsers();

  let data = [...users];
  if (filter) {
    const keyword = filter.toLowerCase();
    data = data.filter(
      (u) =>
        u.username.toLowerCase().includes(keyword) ||
        u.fullName.toLowerCase().includes(keyword)
    );
  }

  if (sort === "name-asc") data.sort((a, b) => a.fullName.localeCompare(b.fullName));
  if (sort === "name-desc") data.sort((a, b) => b.fullName.localeCompare(a.fullName));
  if (sort === "role") data.sort((a, b) => a.role.localeCompare(b.role));
  if (sort === "status") data.sort((a, b) => a.status.localeCompare(b.status));

  const toggleStatus = (u) => {
    const updated = { ...u, status: u.status === "active" ? "locked" : "active" };
    updateUser(updated);
  };

  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Avatar</th>
          <th>Username</th>
          <th>Full Name</th>
          <th>Role</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((u) => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td><Image src={u.avatar} width={40} height={40} roundedCircle /></td>
            <td>{u.username}</td>
            <td>{u.fullName}</td>
            <td>{u.role}</td>
            <td>{u.status}</td>
            <td>
              <Button variant="info" size="sm" className="me-2">View</Button>
              <Button
                variant={u.status === "active" ? "danger" : "success"}
                size="sm"
                onClick={() => toggleStatus(u)}
              >
                {u.status === "active" ? "Ban" : "Unban"}
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
export default UserTable;
