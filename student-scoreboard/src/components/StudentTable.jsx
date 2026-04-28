import StudentRow from './StudentRow'

function StudentTable({ students, onUpdateScore }) {
  return (
    <div className="table-section">
      <h2>Student Records</h2>

      <table className="student-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <StudentRow
              key={student.id}
              serial={index + 1}
              student={student}
              onUpdateScore={onUpdateScore}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentTable