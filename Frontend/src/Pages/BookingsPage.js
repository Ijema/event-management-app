import React from 'react'
import bookingHeader from '../Components/Assets/Book-Us-Now-header.png'
import '../Styles/Booking.css'

const BookingsPage = () => {
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
              <input type='text' placeholder='Enter your name' required/>
            </div>

            <div className='booking-fields'>
              <label className='mr-1 text-md'>Email address: </label>
              <input type='email' placeholder='Enter your email' required/>
            </div>

            <div className='booking-fields'>
              <label className='mr-1 text-md'>Mobile number: </label>
              <input type='number' placeholder='Enter your mobile number' required/>
            </div>

            <div className='booking-fields'>
              <label className='mr-1 text-md'>Event Type: </label>
              <select>
                <option>Wedding</option>
                <option>Concert</option>
                <option>Birthday</option>
                <option>Wedding reharsals</option>
                <option>Meetings</option>
              </select>
            </div>

            <div className='booking-fields'>
              <label className='mr-1 text-md'>Country of Event: </label>
              <input type='text' />
            </div>

            <div className='booking-fields'>
              <label className='mr-1 text-md'>State of Event: </label>
              <input type='text' />
            </div>

            <div className='booking-fields'>
              <label className='mr-1 text-md'>Location of Event:</label>
              <input type='text' />
            </div>

            <div className='booking-fields'>
              <label className='mr-1 text-md'>No. of guests:</label>
              <input type='text' />
            </div>

            <div className='booking-fields'>
              <label className='mr-1 text-md'>Date Of Event:</label>
              <input type='date' />
            </div>

            <label className='booking-time-label'>Time of Event</label>
            <div className='booking-fields booking-fields-date'>

              <div className='booking-fields'>
                <label className='mr-5 text-md'>From: </label>
                <input className='booking-date-input' type='time' />
              </div>

              <div className='booking-fields'>
                <label className='mr-5 text-md'>To: </label>
                <input className='booking-date-input' type='time' />
              </div>

            </div>

            <div className='booking-fields'>
              <label className='mr-1 text-md'>Description: </label>
              <textarea type='text' placeholder=''></textarea>
            </div>

          <button className='w-[130px] bg-orange-500 ml-[80%] mb-3 text-xl text-white border border-slate-300 hover:border-green-900 rounded-full'>Book Now</button>
        </div>
      </div>
    </div>
  )
}

export default BookingsPage