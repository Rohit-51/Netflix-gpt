import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout.jsx'
import Login from './components/Login.jsx'
import SignUp from './components/Signup.jsx'

const router = createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <SignUp />
    }
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
