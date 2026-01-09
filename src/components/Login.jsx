import React, {useState} from 'react';
import { Link, Links } from 'react-router-dom';
import { validate } from '../utils/validate';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../utils/firebase';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Form validation
        const validationError = validate(email, password);
        if (validationError) {
            setError(validationError);
            return;
        }

        // Clear previous errors
        setError(null);

        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            console.log("error", error);
            setError(error?.message || "An error occurred");
            const errorCode = error.code;
            const errorMessage = error.message;
          });

    }

  return (
    <div className="relative h-screen w-full bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/a92ac6d9-e542-40d5-9bb1-bb7291e4de86/web/IN-en-20251117-TRIFECTA-perspective_9fe28c81-2209-4e08-b8bd-98cfa9f97a8f_small.jpg')] bg-cover bg-center">
      
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Netflix Logo */}
      <img
        className="absolute top-5 left-5 w-32 z-10"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix Logo"
      />

      {/* Login Form */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <form className="bg-black/70 text-white rounded-lg px-10 py-10 max-w-md w-full">
          <h1 className="text-3xl font-bold mb-6">Sign In</h1>

          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email or phone number"
            className="w-full p-3 mb-4 bg-[#333] rounded text-sm outline-none"
          />

          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 mb-4 bg-[#333] rounded text-sm outline-none"
          />
          <p className="text-red-500 text-sm mb-4">{error}</p>

          <button
            className="w-full bg-red-600 hover:bg-red-700 transition p-3 rounded font-semibold mt-2"
            onClick={handleSubmit}
          >
            Sign In
          </button>

          <div className="flex justify-between text-sm text-gray-400 mt-3">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" /> Remember me
            </label>
            <a href="#" className="hover:underline">
              Need help?
            </a>
          </div>
            
          <p className="text-gray-400 mt-6 text-sm">
            New to Netflix?{" "}
            <Link to="/signup" className="text-white hover:underline">
              Sign up now
            </Link>
          </p>

          <p className="text-xs text-gray-400 mt-4">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </p>
        </form>
      </div>
    </div>
  );
}
