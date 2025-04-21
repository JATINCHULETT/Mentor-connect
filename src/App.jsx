import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mentors from './components/Mentors'
import BookingHistory from './components/BookingHistory'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/history" element={<BookingHistory />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App