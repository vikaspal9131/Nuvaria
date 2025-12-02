"use client";

import React, { useState } from "react";

export default function SignUpPage() {
  const [email, setEmail] = useState("");

  const handleEmailSignIn = () => {
    console.log("Sign in with email:", email);
  };

  return (
    <div className="min-h-screen flex font-inter">
      <div className="hidden lg:block lg:w-1/2 h-screen relative overflow-hidden bg-black ">
        <img
          src="https://i.pinimg.com/1200x/5e/53/05/5e5305b05bd405a0d89570725434099e.jpg"
          alt=""
          className="w-full h-full object-cover  "
        />


          
      </div>

      <div
        className="w-full lg:w-1/2 bg-black text-white flex items-center justify-center p-8"
        style={{
          backgroundImage: `url("./images/bgimage.png")`,
        }}
      >
        <div className="w-full max-w-md">
          {/* Lightning Icon */}
          <div className="mb-8"></div>

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-4xl  mb-2 text-gray-100 font-instrument text-center">
              Welcome back!
            </h1>
            <p className="text-gray-500 text-sm text-center">
              Your work, your team, your flow all in one place.
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            <button className="w-full bg-white border border-gray-300  py-3 px-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-gray-700 text-sm font-medium">
                Sign in with Google
              </span>
            </button>

            <button className="w-full bg-white border border-gray-300  py-3 px-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <span className="text-gray-700 text-sm font-medium">
                Sign in with Apple
              </span>
            </button>
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="text-gray-400 text-sm">Or</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            />
          </div>

          {/* Sign In Button */}
          <button
            onClick={handleEmailSignIn}
            className="w-full bg-black text-white font-medium py-3  hover:bg-gray-800 transition-colors mb-6"
          >
            Sign in with email
          </button>

          {/* Sign Up Link */}
          <div className="text-center text-sm">
            <span className="text-gray-500">Don't have an account? </span>
            <a href="#" className="text-black font-medium hover:underline">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
