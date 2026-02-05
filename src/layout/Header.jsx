import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth}  from '../utils/firebase'
import {logo} from '../utils/constants'

const Header = () => {
  const navigate = useNavigate();
  const {isAuthenticated, authChecked} = useSelector(state => state.auth);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/login');
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  if (!authChecked) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex items-center justify-between p-4'>
      <div>
        <img
          className="w-32 z-10"
          src={logo}
          alt="Netflix Logo"
        />
      </div>
      <div>
        {!isAuthenticated ? (
          <Link to={"/login"}>
            <button className="bg-red-600 hover:bg-red-700 transition p-2 rounded text-white">
              Sign In
            </button>
          </Link>
        ) : (
          <button 
            className="bg-red-600 hover:bg-red-700 transition p-2 rounded text-white"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  )
}

export default Header