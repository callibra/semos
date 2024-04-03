import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <ul id="nav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <ul>
        <li>
          <Link to="/contact/us">Us</Link>
        </li>
      </ul>
      <li><Link to="/users">Users</Link></li>
    </ul>
  );
};
