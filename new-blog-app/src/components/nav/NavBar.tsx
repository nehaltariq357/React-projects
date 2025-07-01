
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="bg-blue-700 p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">My Blog</h1>
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold underline"
                : "text-white hover:underline"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold underline"
                : "text-white hover:underline"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold underline"
                : "text-white hover:underline"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
