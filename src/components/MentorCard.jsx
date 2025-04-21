import { useState } from 'react'

export default function MentorCard({ mentor }) {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [minutes, setMinutes] = useState(0)
  const [redirecting, setRedirecting] = useState(false)

  function bookSlot() {
    if (!date || !time || minutes <= 0) return alert('Please fill all booking details.')

    const slot = `${date} ${time}`
    const cost = mentor.rate * minutes
    const history = JSON.parse(localStorage.getItem('bookingHistory')) || []
    history.push({
      mentor: mentor.name,
      field: mentor.field,
      rate: mentor.rate,
      slot,
      duration: minutes,
      cost,
      status: 'Pending'
    })
    localStorage.setItem('bookingHistory', JSON.stringify(history))

    setRedirecting(true)
    setTimeout(() => {
      alert(`Payment of ₹${cost} successful. Booked ${slot} with ${mentor.name}`)
      setRedirecting(false)
      setDate('')
      setTime('')
      setMinutes(0)
    }, 2000)
  }

  return (
    <div className="mentor-card">
      <img src={mentor.image} alt={mentor.name} className="mentor-img" />
      <h3>{mentor.name}</h3>
      <p>{mentor.field}</p>
      <p className="rate">₹{mentor.rate}/min</p>
      <div className="slots">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        <input
          type="number"
          placeholder="Minutes"
          value={minutes}
          min={1}
          onChange={(e) => setMinutes(Number(e.target.value))}
        />
        <p>Total: ₹{mentor.rate * minutes}</p>
        <button onClick={bookSlot} className="slot-btn" disabled={redirecting}>
          {redirecting ? 'Redirecting to Payment...' : 'Book Slot'}
        </button>
      </div>
    </div>
  )
}