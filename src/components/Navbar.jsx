import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>MentorConnect</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/mentors">Explore Mentors</Link>
        <Link to="/history">Booking History</Link>
      </div>
    </nav>
  )
}