import React, {useEffect} from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { auth } from '../utils/firebase.js'
import { setUser, clearUser, setAuthChecked } from '../store/slices/authSlice.js'

const AuthListener = ({children}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const {uid, email} = user;
                dispatch(setUser({uid, email}));
                // ...
            } else {
                // User is signed out
                dispatch(clearUser());
                // ...
            }
            dispatch(setAuthChecked());
        });
    }, [dispatch])
    
  return children;
}

export default AuthListener