import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const PatientProfile = () => {
  const [patientData, setPatientData] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProfile = async () => {
      const token = Cookies.get('token'); // get token from cookies
      if (!token) {
        alert('Unauthorized. Please login.');
        return;
      }

      try {
        const res = await axios.get('http://localhost:5000/api/users/patient/profile', {
          headers: {
            Authorization: `Bearer ${token}`, // send token in header
          },
        });

        setPatientData(res.data); // store backend response
        setLoading(false);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch profile. Please login again.');
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    Cookies.remove('token')
    Cookies.remove('role')
    alert('Logout successfull')
    navigate('/home')
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
      <h2>Patient Profile</h2>
      <p>{patientData}</p>
      <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default PatientProfile;
