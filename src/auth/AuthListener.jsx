import React, {useEffect} from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { auth } from '../utils/firebase.js'
import { setUser, clearUser, setAuthChecked } from '../store/slices/authSlice.js'

const AuthListener = ({children}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(setUser({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName
            }))
        } else {
            dispatch(clearUser())
        }
        dispatch(setAuthChecked())
        })

        return () => unsubscribe()
    }, [dispatch]);
    
  return children;
}

export default AuthListener