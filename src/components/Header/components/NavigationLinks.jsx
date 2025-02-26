import { NavLink } from 'react-router-dom'

export default function NavigationLinks() {
  return (
    <div className="ul-header-nav-wrapper">
      <div className="to-go-to-sidebar-in-mobile">
        <nav className="ul-header-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Shop</NavLink>
        </nav>
      </div>
    </div>
  )
}
