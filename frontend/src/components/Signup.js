import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [role, setRole] = useState('Patient');
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    email: '',
    password: '',
    phone: '',
    city: '',
    bloodGroup: '',
    specialization: '',
    experience: '',
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoleChange = selectedRole => {
    setRole(selectedRole);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const payload = { ...formData, role };

    // Assign null to unused fields based on role
    if (role === 'Doctor') {
      payload.bloodGroup = null;
    } else if (role === 'Patient') {
      payload.specialization = null;
      payload.experience = null;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/users/signup', payload);
      alert(res.data.message);
      navigate('/login');
    } catch (error) {
      alert(error.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="signup-container d-flex justify-content-center align-items-center">
      <div className="card signup-card shadow">
        <div className="role-toggle mb-3 d-flex justify-content-center">
          <button
            className={`btn ${role === 'Patient' ? 'btn-primary' : 'btn-outline-primary'} mx-2`}
            onClick={() => handleRoleChange('Patient')}
          >
            Patient
          </button>

          <button
            className={`btn ${role === 'Doctor' ? 'btn-primary' : 'btn-outline-primary'} mx-2`}
            onClick={() => handleRoleChange('Doctor')}
          >
            Doctor
          </button>
        </div>

        {/* <h3 className="text-center mb-3">Signup as {role}</h3> */}

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" name="name" required onChange={handleChange} />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Age</label>
              <input type="number" className="form-control" name="age" required onChange={handleChange} />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Gender</label>
              <select className="form-select" name="gender" required onChange={handleChange}>
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" required onChange={handleChange} />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" name="password" required onChange={handleChange} />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Phone</label>
              <input type="text" className="form-control" name="phone" required onChange={handleChange} />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">City</label>
              <input type="text" className="form-control" name="city" required onChange={handleChange} />
            </div>
          </div>

          {role === 'Patient' && (
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Blood Group</label>
                <select className="form-select" name="bloodGroup" required onChange={handleChange}>
                  <option value="">Select blood group</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                  <option>O-</option>
                </select>
              </div>
            </div>
          )}

          {role === 'Doctor' && (
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Specialization</label>
                <select className="form-select" name="specialization" required onChange={handleChange}>
                  <option value="">Select specialization</option>
                  <option>Cardiologist</option>
                  <option>Dermatologist</option>
                  <option>Neurologist</option>
                  <option>Orthopedic</option>
                  <option>Pediatrician</option>
                  <option>Psychiatrist</option>
                  <option>General Physician</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Experience (Years)</label>
                <input type="number" className="form-control" name="experience" required onChange={handleChange} />
              </div>
            </div>
          )}

          <button type="submit" className="btn btn-success w-100 mt-3">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
