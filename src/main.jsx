import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import DefaultLayout from './layout/DefaultLayout.jsx'
import Login from './components/Login.jsx'
import SignUp from './components/Signup.jsx'
import store from './store/store.js'

import AuthListener from './auth/AuthListener.jsx'
import ProtectedRoute from './routes/ProtectedRoute.jsx'
import PublicRoute from './routes/PublicRoute.jsx'

import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'

const router = createBrowserRouter([
  // 🌍 Public pages WITHOUT layout
  {
    element: <PublicRoute />,
    children: [
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> }
    ]
  },

  // 🌍 Public home WITH layout
  {
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <Home /> }
    ]
  },

  // 🔒 Protected pages WITH layout
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <DefaultLayout />,
        children: [
          { path: '/profile', element: <Profile /> }
        ]
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AuthListener>
        <RouterProvider router={router} />
      </AuthListener>
    </Provider>
  </StrictMode>
)
