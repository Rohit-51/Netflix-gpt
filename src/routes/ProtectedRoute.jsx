import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const {isAuthenticated, authChecked} = useSelector(state => state.auth);

    if(!authChecked) {
        return <div>Loading...</div>;
    }

  return isAuthenticated
    ? <Outlet />
    : <Navigate to="/login" replace />
}

export default ProtectedRoute;