import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li>
        {/* <a href="/">Home</a> */}
        <Link to="/">Home</Link>
      </li>
      <li>
        {/* <a href="/instructors">Instructors</a> */}
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        {/* <a href="/contact">Contact</a> */}
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
};

export default Nav;
