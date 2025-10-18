import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const DoctorDashboard = () => {
  const [dashboardData, setDashboardData] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchDashboard = async () => {
      const token = Cookies.get('token');
      if (!token) {
        alert('Unauthorized. Please login.');
        return;
      }

      try {
        const res = await axios.get('http://localhost:5000/api/users/doctor/dashboard', {
          headers: { Authorization: `Bearer ${token}` },
        });

        setDashboardData(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch dashboard. Please login again.');
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  const handleLogout = () => {
      Cookies.remove('token')
      Cookies.remove('role')
      alert('Login succesffull')
      navigate('/home')
    }

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
      <h2>Doctor Dashboard</h2>
      <p>{dashboardData}</p>
      <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DoctorDashboard;
