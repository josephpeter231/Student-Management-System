import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [students, setStudents] = useState([]);
  const [registernumber, setRegisternumber] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [cgpa, setCgpa] = useState('');
  const [address, setAddress] = useState('');

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
    window.location.href='/allstudents';
  }
   

  const addStudent = async () => {
    try {
      if(name !== "" && registernumber.toString().startsWith("210421106")) {
        toast.success('Registration Done Successfully')
        await axios.post('http://localhost:5000/students', { registernumber: parseInt(registernumber), name, age: parseInt(age), cgpa: parseFloat(cgpa), address });
        fetchStudents();
        setRegisternumber('');
        setName('');
        setAge('');
        setCgpa('');
        setAddress('');
    } else {
      toast.error("Enter correct details")

    }
    

    } catch (error) {
      console.error('Error adding student', error);
    }
  };

  

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Student Registration Form</h1>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="registerNumber" className="form-label">Register Number</label>
          <input type="number" id="registerNumber" className="form-control" value={registernumber} onChange={(e) => setRegisternumber(e.target.value)} />
        </div>
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="col-md-6">
          <label htmlFor="age" className="form-label">Age</label>
          <input type="number" id="age" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="col-md-6">
          <label htmlFor="cgpa" className="form-label">CGPA</label>
          <input type="number" id="cgpa" className="form-control" value={cgpa} onChange={(e) => setCgpa(e.target.value)} />
        </div>
        <div className="col-md-12">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" id="address" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="col-md-6 mt-3">
          <button className="btn btn-primary btn-block" onClick={addStudent}>Register Student</button>
        </div>
        <ToastContainer>
        <div className="col-md-6 mt-3">
          <button className="btn btn-secondary btn-block" onClick={Click}>View All Students</button>
        </div>
        </ToastContainer>
      </div>
     
      
    </div>
  );
}

export default App;
