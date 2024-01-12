import { Link, NavLink } from "react-router-dom"
import Wrapper from "../assets/wrappers/Navbar"

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <Link
          style={{
            background: "none",
            color: "inherit",
            border: "none",
            padding: 0,
            font: "inherit",
            cursor: "pointer",
            outline: "inherit",
          }}
          to="/"
        >
          <span className="logo">MixMaster</span>
        </Link>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            Newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
