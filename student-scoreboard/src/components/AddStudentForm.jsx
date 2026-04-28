import { useState } from 'react'

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState('')
  const [score, setScore] = useState('')

  function handleSubmit() {
    if (name.trim() === '' || score === '') {
      alert('Please enter both name and score.')
      return
    }

    const parsedScore = Number(score)

    if (isNaN(parsedScore) || parsedScore < 0 || parsedScore > 100) {
      alert('Score must be a number between 0 and 100.')
      return
    }

    onAddStudent(name.trim(), parsedScore)
    setName('')
    setScore('')
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div className="form-section">
      <div className="form-title-row">
        <h2>Register Student</h2>
        <span>New Entry</span>
      </div>

      <div className="form-row">
        <input
          type="text"
          name="studentName"
          placeholder="Student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        <input
          type="number"
          name="studentScore"
          placeholder="Score (0-100)"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        <button className="btn-add" onClick={handleSubmit}>
          + ADD
        </button>
      </div>
    </div>
  )
}

export default AddStudentForm