import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function ProtectedRoute({ children, allowedRoles }) {
  const token = Cookies.get('token');
  const role = Cookies.get('role');

  // Not logged in
  if (!token) {
    return <Navigate to="/home" />;
  }

  // Role not allowed
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/home" />;
  }

  // Authorized
  return children;
}

export default ProtectedRoute;
