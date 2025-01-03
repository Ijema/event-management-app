import React from 'react'
// import './ListUsers.css'
import { useState } from 'react'
import { useEffect } from 'react'
import cross_icon from '../../assets/cross_icon.png'
import { removelistUsersRoute, displayAlllistUsersRoute } from '../../Utils/AdminApiRoutes'

const ListUsers = () => {

//   const[allUsers, setAllUsers] = useState([])

//   const fetchUsers = async () =>{
//     await fetch(listUserRoute)
//     .then((res) =>res.json())
//     .then((data) =>{setAllUsers(data)})
//   }

//   // Call fetchInfo function when the page load
//   useEffect(() => {
//     fetchUsers()
//   }, [])

//   const removelistUsers = async (id) =>{
//     await fetch(removelistUsersRoute, {
//       method: "POST",
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({id:id})
//     })
//     await fetchInfo()
//   }


  return (
    <div className='list-users'>
      <h1>All Users </h1>
      <div className="listuser-format-main">
        <p>Name</p>
        <p>Number</p>
        <p>Address</p>
        <p>Email</p>
        <p>Password</p>
        <p>Delete</p>
      </div>
      {/* <div className="listuser-card">
        <hr /> */}
        {/* {allUsers.map((users, index) =>{
          return <><div key={index} className="listuser-format-main listuser-format">
            <img src={users.image} alt="" className="listuser-listUsers-icon" />
            <p>{users.name}</p>
            <p>{users.location}</p>
            <p>{users.date}</p>
            <p>{users.category}</p>
            <img src={cross_icon} alt="" className="listuser-remove-icon" />
          </div>
          <hr />
          </>
        })} */}
      </div>
    // </div>
  )
}

export default ListUsers