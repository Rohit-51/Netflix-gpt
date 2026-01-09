import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = () => {
    const {isAuthenticated, authChecked} = useSelector(state => state.auth);

    if(!authChecked) {
        return <div>Loading...</div>;
    }

  return isAuthenticated
    ? <Navigate to="/" replace />
    : <Outlet />

}

export default PublicRoute