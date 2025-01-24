import React from 'react'
import './ListBooking.css'
import { useState, useEffect } from 'react'
import cross_icon from '../../assets/cross_icon.png'
import { removeBookingRoute, listBookingRoute } from '../../Utils/AdminApiRoutes'

const ListBooking = () => {

  const[allBookings, setAllBookings] = useState([])

  const fetchInfo = async () =>{
    await fetch(listBookingRoute)
    .then((res) =>res.json())
    .then((data) =>{setAllBookings(data)})
  }

  // Call fetchInfo function when the page load
  useEffect(() => {
    fetchInfo()
  }, [])

  const removeBookings = async (id) =>{
    await fetch(removeBookingRoute, {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id:id})
    })
    await fetchInfo()
  }


  return (
    <div className='list-portfolio'>
      <h1>All Bookings</h1>
      <div className="listportfolio-format-main">
        <p>Name</p>
        <p>Email</p>
        <p>Phone Number</p>
        <p>Event Category</p>
        <p>Country</p>
        <p>State</p>
        <p>Location</p>
        <p>No. of Guest</p>
        <p>Date</p>
        <p>Start time</p>
        <p>End time</p>
        <p>Description</p>
        <p>Delete</p>
      </div>
      <div className="listportfolio-allportfolios">
        <hr />
        {allBookings.map((bookings, index) =>{
          return <><div key={index} className="listportfolio-format-main listportfolio-format">
            {/* <img src={bookings.image} alt="" className="listportfolio-portfolio-icon" /> */}
            <p>{bookings.name}</p>
            <p>{bookings.email}</p>
            <p>{bookings.eventType}</p>
            <p>{bookings.countryOfEvent}</p>
            <p>{bookings.stateOfEvent}</p>
            <p>{bookings.locationOfEvent}</p>
            <p>{bookings.numOfGuest}</p>
            <p>{bookings.dateOfEvent}</p>
            <p>{bookings.beginingTime}</p>
            <p>{bookings.endingTime}</p>
            <p>{bookings.description}</p>
            <hr />
            {/* <img onClick={() => {removeBookings(bookings.id)}} src={cross_icon} alt="" className="listportfolio-remove-icon" /> */}
          </div>
          <hr />
          </>
        })}
      </div>
    </div>
  )
}

export default ListBooking