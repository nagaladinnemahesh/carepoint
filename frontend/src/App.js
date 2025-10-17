import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Signup from './components/signup'
import Login from './components/login'
import PatientProfile from './components/patientProfile';
import DoctorDashboard from './components/doctorDashboard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/signup' />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element= {<Login />} />
      <Route path="/patient/profile" element={<PatientProfile />} />
      <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
    </Routes>
  );
}

export default App;
