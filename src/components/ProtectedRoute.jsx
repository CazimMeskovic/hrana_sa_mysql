import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');
  // Proveravamo da li su token i userId prisutni u localStorage
  return token && userId;
};

const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/ole" />;
};

export default ProtectedRoute;
