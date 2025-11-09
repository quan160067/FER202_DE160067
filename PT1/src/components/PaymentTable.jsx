import { Table, Button } from "react-bootstrap";
import { usePayments } from "../contexts/PaymentContext";

function PaymentTable() {
  const { payments, deletePayment, filter, sort } = usePayments();

  let data = [...payments];

  // Filter
  if (filter) {
    const keyword = filter.toLowerCase();
    data = data.filter(
      (p) =>
        p.courseName.toLowerCase().includes(keyword) ||
        p.semester.toLowerCase().includes(keyword)
    );
  }

  // Sort
  if (sort === "name-asc") data.sort((a, b) => a.courseName.localeCompare(b.courseName));
  if (sort === "name-desc") data.sort((a, b) => b.courseName.localeCompare(a.courseName));
  if (sort === "date-asc") data.sort((a, b) => new Date(a.date) - new Date(b.date));
  if (sort === "date-desc") data.sort((a, b) => new Date(b.date) - new Date(a.date));
  if (sort === "amount-asc") data.sort((a, b) => a.amount - b.amount);
  if (sort === "amount-desc") data.sort((a, b) => b.amount - a.amount);

  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>Semester</th>
          <th>Course Name</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((p) => (
          <tr key={p.id}>
            <td>{p.semester}</td>
            <td>{p.courseName}</td>
            <td>{p.amount.toLocaleString()}₫</td>
            <td>{p.date}</td>
            <td>
              <Button
                variant="danger"
                size="sm"
                onClick={() => deletePayment(p.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default PaymentTable;
