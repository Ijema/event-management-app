import React, { useState } from 'react'
import bookingHeader from '../Components/Assets/Book-Us-Now-header.png'
import { Link } from 'react-router-dom'

import axios from 'axios'

const SignUpLogin = () => {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [address, setAddress] = useState('')
  const [state, setState] = useState("Sign Up")

  const handleRegistration = async () => {
    const userData = {
      fullname,
      email,
      mobileNumber,
      address,
    };
  
    try {
      const response = await axios.post('http://localhost:3000/api/register', userData);
      console.log(response.data); // Log the response from the backend
      // Optionally, you can display a success message to the user
    } catch (error) {
      console.error(error); // Log any errors
      // Optionally, you can display an error message to the user
    }
  };
  
  return (
    <div>
      <div className='flex items-center justify-center mb-3'>
        <img className='w-[80%] h-[300px]' src={bookingHeader} alt='' />
      </div>
      <div className='w-12/12 flex flex-col items-center content-center justify-center'>
        <h2 className="text-2xl font-bold mx-3 pt-5 pb-4">{state}</h2>
        <div className='relative w-[50%] flex flex-col bg-green-400 rounded-lg px-4 py-4'>

            {state === "Sign Up"
                ? <>
                    <div className='w-full sm:flex sm:flex-col sm:items-start items-center my-2'>
                      <label className='mr-5 text-md'>Fullname:</label>
                      <input 
                          className='w-70% sm:w-full text-black outline-none text-md placeholder-black py-2 px-2 my-2 rounded-sm' 
                          type='text' 
                          placeholder='Enter your name'
                          value={fullname}
                          onChange={(e) => setFullname(e.target.value)}
                          required
                      />
                  </div>

                  <div className='w-full sm:flex sm:flex-col sm:items-start items-center my-2'>
                    <label className='mr-5 text-md'>Mobile number: </label>
                    <input 
                      className='w-70% sm:w-full text-black outline-none text-md placeholder-black py-2 px-2 my-2 rounded-sm' 
                      type='number' 
                      placeholder='Enter your mobile number' 
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      required
                    />
                </div>

                <div className='w-full sm:flex sm:flex-col sm:items-start items-center my-2'>
                  <label className='mr-5 text-md'>Address: </label>
                  <input 
                    className='w-70% sm:w-full text-black outline-none text-md placeholder-black py-2 px-2 my-2 rounded-sm' 
                    type='text'
                    placeholder='Enter address'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                </>
                : <></>
            }

            <div className='w-full sm:flex sm:flex-col sm:items-start items-center my-2'>
              <label className='mr-5 text-md'>Email address: </label>
              <input 
                className='w-70% sm:w-full text-black outline-none text-md placeholder-black py-2 px-2 my-2 rounded-sm' 
                type='email' 
                placeholder='Enter your email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className='w-full sm:flex sm:flex-col sm:items-start items-center my-2'>
              <label className='mr-5 text-md'>Password: </label>
              <input 
                className='w-70% sm:w-full text-black outline-none text-md placeholder-black py-2 px-2 my-2 rounded-sm' 
                type='password'
                placeholder='Enter password'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

          <button 
            className='bg-orange-500 ml-[80%] py-1 mt-4 mb-2 text-xl text-white border border-slate-300 hover:border-green-900 rounded-md' 
            onClick={handleRegistration}
            >
              {state}
          </button>
            
          {state==="Sign Up"
            ? <p>Already a user? <span onClick={() => setState("Login")} className=''>Login here.</span></p> : <p>Create an account? <span onClick={()=>setState("Sign Up")}className=''>click here.</span></p>
          }
        </div>
      </div>
    </div>
  )
}

export default SignUpLogin