import React, { useState } from 'react'
import bookingHeader from '../Components/Assets/Book-Us-Now-header.png'
import '../Styles/Booking.css'
import { bookingRoute } from '../Utils/ApiRoutes'

const BookingsPage = () => {

  const[bookingData, setBookingData] = useState({
    name: "",
    email: "",
    number: "",
    eventType: "",
    countryOfEvent: "wedding",
    stateOfEvent: "",
    locationOfEvent: "",
    numOfGuest: "",
    dateOfEvent: "",
    beginingTime: "",
    endingTime: "",
    description: "",
  })

  const getData = (e) =>{
    setBookingData({...bookingData, [e.target.name]:e.target.value})
  }

  const booking = async () => {
    try {
      const response = await fetch(bookingRoute, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Booking successful:', data);
    } catch (error) {
      console.error('Error booking:', error);
    }
  };

  return (
    <div>
      <div className='booking'>
        <img className='w-[80%] h-[300px]' src={bookingHeader} alt='' />
      </div>
      <div className='booking-form'>
      <h2>BOOKINGS</h2>
        <div className='booking-body'>

            <div className='booking-fields'>
              <label className='mr-1 text-md'>Fullname: </label>
              <input name='name' onChange={getData} value={bookingData.name} type='text' placeholder='Enter your name' required/>
            </div>

            <div className='booking-fields'>
              <label className='mr-1 text-md'>Email address: </label>
              <input name='email' onChange={getData} value={bookingData.email} type='email' placeholder='Enter your email' required/>
            </div>

            <div className='booking-fields'>
              <label className='mr-1 text-md'>Mobile number: </label>
              <input name='number' onChange={getData} value={bookingData.number} type='number' placeholder='Enter your mobile number' required/>
            </div>

            <div className='booking-fields'>
              <label className='mr-1 text-md'>Event Type: </label>
              <select name="eventType" value={bookingData.eventType} onChange={getData}>
                <option name="eventType" value="">Select Event Type</option>
                <option name="eventType" value="wedding">Wedding</option>
                <option name="eventType" value="concert">Concert</option>
                <option name="eventType" value="birthday">Birthday</option>
                <option name="eventType" value="wedding-rehearsals">Wedding Rehearsals</option>
                <option name="eventType" value="meeting">Meeting</option>
              </select>


            </div>

            <div className='booking-fields'>
              <label className='mr-1 text-md'>Country of Event: </label>
              <input name='countryOfEvent' onChange={getData} value={bookingData.countryOfEvent}type='text' />
            </div>

            <div className='booking-fields'>
              <label className='mr-1 text-md'>State of Event: </label>
              <input name='stateOfEvent' onChange={getData} value={bookingData.stateOfEvent} type='text' />
            </div>

            <div className='booking-fields'>
              <label className='mr-1 text-md'>Location of Event:</label>
              <input name='locationOfEvent' onChange={getData} value={bookingData.locationOfEvent} type='text' />
            </div>

            <div className='booking-fields'>
              <label className='mr-1 text-md'>No. of guests:</label>
              <input name='numOfGuest' onChange={getData} value={bookingData.numOfGuest} type='text' />
            </div>

            <div className='booking-fields'>
              <label className='mr-1 text-md'>Date Of Event:</label>
              <input name='dateOfEvent' onChange={getData} value={bookingData.dateOfEvent} type='date' />
            </div>

            <label className='booking-time-label'>Time of Event</label>
            <div className='booking-fields booking-fields-date'>

              <div className='booking-fields'>
                <label className='mr-5 text-md'>From: </label>
                <input name='beginingTime' onChange={getData} value={bookingData.beginingTime} className='booking-date-input' type='time' />
              </div>

              <div className='booking-fields'>
                <label className='mr-5 text-md'>To: </label>
                <input name='endingTime' onChange={getData} value={bookingData.endingTime} className='booking-date-input' type='time' />
              </div>

            </div>

            <div className='booking-fields'>
              <label className='mr-1 text-md'>Description: </label>
              <textarea name='description' onChange={getData} value={bookingData.description} type='text' placeholder=''></textarea>
            </div>

          <button onClick={booking} className='w-[130px] bg-orange-500 ml-[80%] mb-3 text-xl text-white border border-slate-300 hover:border-green-900 rounded-full'>Book Now</button>
        </div>
      </div>
    </div>
  )
}

export default BookingsPage