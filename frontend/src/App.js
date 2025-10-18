import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import PatientProfile from './components/PatientProfile';
import DoctorDashboard from './components/DoctorDashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element= {<Login />} />
      <Route path='/patient/profile' element={<ProtectedRoute allowedRoles={['Patient']}><PatientProfile /></ProtectedRoute>} />
      <Route path='/doctor/dashboard' element={<ProtectedRoute allowedRoles={['Doctor']}><DoctorDashboard /></ProtectedRoute>} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
