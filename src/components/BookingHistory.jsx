import { useEffect, useState } from 'react'

export default function BookingHistory() {
  const [history, setHistory] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('bookingHistory')) || []
    setHistory(saved)
  }, [])

  function cancelBooking(index) {
    const updated = [...history]
    updated.splice(index, 1)
    setHistory(updated)
    localStorage.setItem('bookingHistory', JSON.stringify(updated))
  }

  return (
    <div className="container">
      <h2 className="section-title">Booking History</h2>
      {history.length === 0 ? (
        <p className="no-history">No bookings yet.</p>
      ) : (
        <ul className="history-list">
          {history.map((entry, idx) => (
            <li key={idx} className="history-card">
              <p><strong>Mentor:</strong> {entry.mentor}</p>
              <p><strong>Field:</strong> {entry.field}</p>
              <p><strong>Slot:</strong> {entry.slot}</p>
              <p><strong>Duration:</strong> {entry.duration} min</p>
              <p><strong>Rate:</strong> ₹{entry.rate}/min</p>
              <p><strong>Total:</strong> ₹{entry.cost}</p>
              <p><strong>Status:</strong> {entry.status}</p>
              <a href="https://meet.jit.si/MentorConnectSession" target="_blank" rel="noreferrer">Join Video Meeting</a><br />
              <button onClick={() => cancelBooking(idx)} className="slot-btn">Cancel</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}


