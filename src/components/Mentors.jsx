import { useState } from 'react'
import { mentors } from '../data'
import MentorCard from './MentorCard'

export default function Mentors() {
  const [query, setQuery] = useState('')
  const [filtered, setFiltered] = useState(mentors)

  const handleSearch = (e) => {
    const q = e.target.value
    setQuery(q)
    setFiltered(
      mentors.filter(
        (m) => m.name.toLowerCase().includes(q.toLowerCase()) || m.field.toLowerCase().includes(q.toLowerCase())
      )
    )
  }

  return (
    <div className="container">
      <h2 className="section-title">Explore Mentors</h2>
      <input
        type="text"
        placeholder="Search mentors by name or field..."
        className="search-box"
        value={query}
        onChange={handleSearch}
      />
      <div className="mentor-grid">
        {filtered.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </div>
    </div>
  )
}
