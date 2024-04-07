import React, { useState } from 'react'
import bookingHeader from '../Components/Assets/Book-Us-Now-header.png'
import { Link } from 'react-router-dom'

import axios from 'axios'

const SignUpLogin = () => {
  const [state, setState] = useState("Sign Up")
  const [userData, setUserData] = useState({
    name: "",
    number: "",
    address: "",
    email: "",
    password: ""
  })

  const getData = (e) =>{
    setUserData({...userData, [e.target.name]:e.target.value})
  }

  const login = async () =>{
    console.log("Login executed successfully", userData)
    let responseData
    await fetch('http://localhost:4000/login', {
      method: "POST",
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    }).then((response) => response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token)
      window.location.replace('/')
    } else{
      alert(responseData.errors)
    }
  }

  // Sign Up
  const signup = async() => {
    console.log("Registration successfully", userData)
    let responseData
    await fetch('http://localhost:4000/signup', {
      method: "POST",
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    }).then((response) => response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token)
      window.location.replace('/')
    } else{
      alert(responseData.errors)
    }

  }

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
                          name='name'
                          value={userData.name}
                          onChange={getData}
                          required
                      />
                  </div>

                  <div cllassName='w-full sm:flex sm:flex-col sm:items-start items-center my-2'>
                    <label className='mr-5 text-md'>Mobile number: </label>
                    <input 
                      className='w-70% sm:w-full text-black outline-none text-md placeholder-black py-2 px-2 my-2 rounded-sm' 
                      type='number' 
                      placeholder='Enter your mobile number'
                      name='number' 
                      value={userData.number}
                      onChange={getData}
                      required
                    />
                </div>
      
                <div className='w-full sm:flex sm:flex-col sm:items-start items-center my-2'>
                  <label className='mr-5 text-md'>Address: </label>
                  <input 
                    className='w-70% sm:w-full text-black outline-none text-md placeholder-black py-2 px-2 my-2 rounded-sm' 
                    type='text'
                    placeholder='Enter address'
                    name='address'
                    value={userData.address}
                    onChange={getData}
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
                name='email'
                value={userData.email}
                onChange={getData}               
              />
            </div>

            <div className='w-full sm:flex sm:flex-col sm:items-start items-center my-2'>
              <label className='mr-5 text-md'>Password: </label>
              <input 
                className='w-70% sm:w-full text-black outline-none text-md placeholder-black py-2 px-2 my-2 rounded-sm' 
                type='password'
                placeholder='Enter password'
                name='password'
                value={userData.password}
                onChange={getData}
              />
            </div>

            {state === "Sign Up" ? (
                <button 
                    className='bg-orange-500 ml-[80%] py-1 mt-4 mb-2 text-xl text-white border border-slate-300 hover:border-green-900 rounded-md' 
                    onClick={signup}
                >
                    {state}
                </button>
            ) : (
                <button 
                    className='bg-orange-500 ml-[80%] py-1 mt-4 mb-2 text-xl text-white border border-slate-300 hover:border-green-900 rounded-md' 
                    onClick={login}
                >
                    {state}
                </button>
            )}

      
          {state==="Sign Up"
            ? <p>Already a user? <span onClick={() => setState("Login")} className='underline text-orange-500 cursor-pointer'>Login here.</span></p> : <p>Create an account? <span onClick={()=>setState("Sign Up")} className='underline text-orange-500 cursor-pointer'>click here.</span></p>
          }
        </div>
      </div>
    </div>
  )
}

export default SignUpLogin