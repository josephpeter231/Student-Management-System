import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  const [students, setStudents] = useState([]);
  
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students', error);
    }
  };

  const Click = () => {
    window.location.href='/';
  }
   

  

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/students/${id}`);
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Student Details</h1>
      <div className="col-md-2">
          <button className="btn btn-primary btn-block" onClick={Click}>Back</button>
        </div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Register Number</th>
            <th>Age</th>
            <th>CGPA</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.registernumber}</td>
              <td>{student.age}</td>
              <td>{student.cgpa}</td>
              <td>{student.address}</td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
