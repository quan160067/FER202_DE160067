import Button from "react-bootstrap/Button";
import "./Footer.css";

function MyFooter({ author, email, linkGithub }) {
  return (
    <footer>
      <p>Author: {author}</p>
      <p>Created by: {email}</p>
      <p>&copy; {new Date().getFullYear()} {author}. All rights reserved</p>
      <Button variant="link" href={linkGithub}>
        My Link Github's project: Movies Management
      </Button>
    </footer>
  );
}

export default MyFooter;
