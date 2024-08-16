// src/pages/Layout.js
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      {/* create header here */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* render different components here */}
      <Outlet />
    </div>
  );
}