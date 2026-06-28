import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h2>Local Service Marketplace</h2>
      </div>

      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/services">Services</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>

          <li>
            <Link to="/register">Register</Link>
          </li>

          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/bookings">Bookings</Link>
          </li>


          <li>
            <Link to="/profile">Profile</Link>
          </li>


        </ul>
      </nav>
    </header>
  );
}

export default Header;