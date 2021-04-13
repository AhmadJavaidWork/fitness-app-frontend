import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h3>Fitness App</h3>
      <ul className="nav-links">
        <Link to="/sign-up" className="nav-link">
          <li>Sign Up</li>
        </Link>
        <Link to="/" className="nav-link">
          <li>Sign In</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
