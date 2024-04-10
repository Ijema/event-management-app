import React, { useState } from 'react'
import bookingHeader from '../Components/Assets/Book-Us-Now-header.png'
import { loginRoute, signUpRoute } from '../Utils/ApiRoutes'
import '../Styles/SignupLogin.css'


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
    await fetch(loginRoute, {
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
    await fetch(signUpRoute, {
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
      <div className='signup-login'>
        <img className='w-[80%] h-[300px]' src={bookingHeader} alt='' />
      </div>
      <div className='signup-login-form'>
        <h2>{state}</h2>
        <div className='signup-login-body'>

            {state === "Sign Up"
                ? <>
                    <div className='signup-login-fields'>
                      <label className='mr-5 text-md'>Fullname:</label>
                      <input 
                          type='text' 
                          placeholder='Enter your name'
                          name='name'
                          value={userData.name}
                          onChange={getData}
                          required
                      />
                  </div>

                  <div className='signup-login-fields'>
                    <label className='mr-5 text-md'>Number:</label>
                    <input 
                      type='number' 
                      placeholder='Enter your mobile number'
                      name='number' 
                      value={userData.number}
                      onChange={getData}
                      required
                    />
                </div>
      
                <div className='signup-login-fields'>
                  <label className='mr-5 text-md'>Address: </label>
                  <input 
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

            <div className='signup-login-fields'>
              <label className='mr-5 text-md'>Email</label>
              <input 
                type='email' 
                placeholder='Enter your email address' 
                name='email'
                value={userData.email}
                onChange={getData}               
              />
            </div>

            <div className='signup-login-fields'>
              <label className='mr-5 text-md'>Password:</label>
              <input 
                type='password'
                placeholder='Enter password'
                name='password'
                value={userData.password}
                onChange={getData}
              />
            </div>

            {state === "Sign Up" ? (
                <button onClick={signup}>{state}</button>
            ) : (
                <button onClick={login}>{state}</button>
            )}

      
          {state==="Sign Up"
            ? <p>Already a user? <span onClick={() => setState("Login")}>Login here.</span></p> : <p>Create an account? <span onClick={()=>setState("Sign Up")}>click here.</span></p>
          }
        </div>
      </div>
    </div>
  )
}

export default SignUpLogin