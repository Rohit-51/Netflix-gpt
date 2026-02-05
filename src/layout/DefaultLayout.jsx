import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../layout/Header.jsx'

const DefaultLayout = () => {
  

  return (
    <div className="app-layout">
      {/* <Sidebar /> */}
      <div className="content relative">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default DefaultLayout