import { useState } from 'react'
import Header from './components/Header'
import AddStudentForm from './components/AddStudentForm'
import StudentTable from './components/StudentTable'
import './App.css'

const initialStudents = [
  { id: 1, name: 'Aman', score: 78 },
  { id: 2, name: 'Riya', score: 45 },
  { id: 3, name: 'Karan', score: 90 },
  { id: 4, name: 'Neha', score: 32 },
]

function App() {
  const [students, setStudents] = useState(initialStudents)

  const totalStudents = students.length

  const passedStudents = students.filter(
    (student) => student.score >= 40
  ).length

  const averageScore =
    totalStudents === 0
      ? 0
      : Math.round(
          students.reduce((total, student) => total + student.score, 0) /
            totalStudents
        )

  function handleAddStudent(name, score) {
    if (!name || score === '') return

    const newStudent = {
      id: Date.now(),
      name: name,
      score: Number(score),
    }

    setStudents([...students, newStudent])
  }

  function handleUpdateScore(id, newScore) {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, score: Number(newScore) }
          : student
      )
    )
  }

  return (
    <div className="app-container">
      <Header />

      <AddStudentForm onAddStudent={handleAddStudent} />

      <div className="summary-section">
        <div className="summary-box">
          <p>TOTAL</p>
          <h2>{totalStudents}</h2>
        </div>

        <div className="summary-box">
          <p>PASSED</p>
          <h2>{passedStudents}</h2>
        </div>

        <div className="summary-box">
          <p>AVG SCORE</p>
          <h2>{averageScore}</h2>
        </div>
      </div>

      <StudentTable
        students={students}
        onUpdateScore={handleUpdateScore}
      />

      <p className="footer-text">
        ACADEMIC TERMINAL · SECURE SESSION
      </p>
    </div>
  )
}

export default App