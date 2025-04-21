import { Link } from 'react-router-dom'
import video from"../assets/video.mp4"

export default function Hero() {
  return (
    <div className="hero-container">
      <video src={video} autoPlay muted loop className="hero-video" />
      <div className="hero-overlay">
        <h1>Find the Right Mentor</h1>
        <p>Connect with experts in various fields and get guidance through paid sessions.</p>
        <Link to="/mentors" className="connect-btn">Connect Now</Link>
      </div>
    </div>
  )
}