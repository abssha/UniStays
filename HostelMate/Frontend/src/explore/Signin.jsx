import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'

const Signin = ({ open, onClose, onLoginSuccess }) => {

  const login = useGoogleLogin({
    onSuccess: (res) => getUserProfile(res),
    onError: (err) => console.log(err),
  })

  const getUserProfile = (tokenInfo) => {
    axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
      {
        headers: {
          Authorization: `Bearer ${tokenInfo?.access_token}`,
          Accept: 'application/json',
        },
      }
    ).then((resp) => {
      const {id,email,name}=resp.data

      localStorage.setItem('user', JSON.stringify(resp.data))

      axios.post('/api/userInfo',{id,email,name})
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err))

      onLoginSuccess(resp.data) 
      onClose()
    })
  }
  

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div className="relative top-50 p-4 w-full max-w-2xl max-h-full">
        <div className="bg-white border-1 shadow-lg shadow-black relative rounded-lg">
          
          {/* Modal Header */}
          <div className="flex justify-between">
            <img className="md:ml-59 ml-20 md:w-40 w-30 md:-mb-8 -mb-5" src="./img/US1.png" alt="logo" />
            <button
              onClick={onClose}
              className="m-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 flex justify-center items-center"
            >
              <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </button>
          </div>

          {/* Modal Body */}
          <div>
            <h2 className="md:text-2xl text-xl font-bold text-center">Sign-in with Google</h2>
            <p className="md:text-xl font-medium text-center md:mt-2">
              Sign-in to the app with <span className="text-[#60C3AD]">Google Authentication</span> securely
            </p>
          </div>

          {/* Modal Footer */}
          <div className="flex justify-center p-4 md:p-5">
            <button
              onClick={() => login()}
              className="flex hover:bg-gray-900 gap-2 items-center justify-center text-white w-[90%] bg-black px-5 py-2.5 rounded-lg"
            >
              <FcGoogle className="h-7 w-7" />Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
