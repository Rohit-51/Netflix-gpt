import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
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

      {/* Sign-Up Form */}
      <div className="relative z-10 flex justify-center items-center h-full px-3">
        <form className="bg-black/70 text-white rounded-lg px-10 py-10 max-w-md w-full">
          <h1 className="text-3xl font-bold mb-6">Create an account</h1>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 mb-4 bg-[#333] rounded text-sm outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 bg-[#333] rounded text-sm outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 bg-[#333] rounded text-sm outline-none"
          />

          <button
            className="w-full bg-red-600 hover:bg-red-700 transition p-3 rounded font-semibold mt-2"
          >
            Sign Up
          </button>

          <p className="text-gray-400 mt-6 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-white hover:underline">
              Sign in
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
