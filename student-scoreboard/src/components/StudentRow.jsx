import { useState } from 'react'

function StudentRow({ serial, student, onUpdateScore }) {
  const [inputScore, setInputScore] = useState('')

  function handleUpdate() {
    if (inputScore === '') {
      alert('Please enter a score to update.')
      return
    }

    const parsedScore = Number(inputScore)

    if (isNaN(parsedScore) || parsedScore < 0 || parsedScore > 100) {
      alert('Score must be a number between 0 and 100.')
      return
    }

    onUpdateScore(student.id, parsedScore)
    setInputScore('')
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      handleUpdate()
    }
  }

  const isPassed = student.score >= 40

  return (
    <tr>
      <td>{serial}</td>
      <td>{student.name}</td>
      <td>{student.score}</td>

      <td>
        <span className={isPassed ? 'status-pass' : 'status-fail'}>
          {isPassed ? 'PASS' : 'FAIL'}
        </span>
      </td>

      <td>
        <div className="update-box">
          <input
            type="number"
            className="score-input"
            placeholder="Score"
            value={inputScore}
            onChange={(e) => setInputScore(e.target.value)}
            onKeyDown={handleKeyPress}
          />

          <button className="btn-add" onClick={handleUpdate}>
            SAVE
          </button>
        </div>
      </td>
    </tr>
  )
}

export default StudentRow