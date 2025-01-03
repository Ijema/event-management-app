import React from 'react'
import './ListUsers.css'
import { useState } from 'react'
import { useEffect } from 'react'
import cross_icon from '../../assets/cross_icon.png'
// import { removelistUsersRoute, displayAlllistUsersRoute } from '../../Utils/AdminApiRoutes'
import { removelistUsersRoute, displayAlllistUsersRoute} from '../../Utils/AdminApiRoutes'
const ListUsers = () => {

  const[allUsers, setAllUsers] = useState([])

  const fetchUsers = async () =>{
    await fetch(displayAlllistUsersRoute)
    .then((res) =>res.json())
    .then((data) =>{setAllUsers(data)})
  }

  // Call fetchInfo function when the page load
  useEffect(() => {
    fetchUsers()
  }, [])

  const removelistUsers = async (id) =>{
    await fetch(removelistUsersRoute, {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id:id})
    })
    await fetchUsers()
  }


  return (
    <div className='list-users'>
      <h1>All Users </h1>
      <div className="listuser-format-main">
        <p>Name</p>
        <p>Phone Number</p>
        <p>Address</p>
        <p>Email</p>
        <p>Date Created</p>
        <p>Delete</p>
      </div>
      <div className="listuser-card">
        <hr />
        {allUsers.map((users, index) =>{
          return <><div key={index} className="listuser-format-main listuser-format">
            <p>{users.name}</p>
            <p>{users.number}</p>
            <p>{users.address}</p>
            <p>{users.email}</p>
            <p>{users.date}</p>
            <div className='listuser-remove-icon'><img src={cross_icon} alt="" className="" onClick={() => removelistUsers(users.id)}/></div>
          </div>
          <hr />
          </>
        })}
      </div>
    </div>
  )
}

export default ListUsers