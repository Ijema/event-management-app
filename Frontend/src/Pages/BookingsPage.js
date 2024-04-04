import React from 'react'
import bookingHeader from '../Components/Assets/Book-Us-Now-header.png'

const BookingsPage = () => {
  return (
    <div>
      <div className='flex items-center justify-center mb-3'>
        <img className='w-[80%] h-[300px]' src={bookingHeader} alt='' />
      </div>
      <div className='w-12/12 flex flex-col items-center content-center justify-center'>
      <h2 className="text-2xl font-bold mx-3 pt-5 pb-4">BOOKINGS</h2>
        <div className='relative w-[50%] flex flex-col bg-green-400 rounded-lg px-4 py-4'>

            <div className='w-[100%] flex items-center content-center text-black outline-0 my-3 rounded-sm'>
              <label className='mr-5 text-md'>Fullname: </label>
              <input className='w-[70%] text-black outline-0 text-md placeholder-black py-2 px-2 my-3 rounded-sm absolute insert-y-0 right-7' type='text' placeholder='Enter your name' required/>
            </div>

            <div className='w-[100%] flex items-center content-center text-black outline-0 my-3 rounded-sm'>
              <label className='mr-5 text-md'>Email address: </label>
              <input className='w-[70%] text-black outline-0 text-md placeholder-black py-2 px-2 my-3 rounded-sm absolute insert-y-0 right-7' type='email' placeholder='Enter your email' required/>
            </div>

            <div className='w-[100%] flex items-center content-center text-black outline-0 my-3 rounded-sm'>
              <label className='mr-5 text-md'>Mobile number: </label>
              <input className='w-[70%] text-black outline-0 text-md placeholder-black py-2 px-2 my-3 rounded-sm absolute insert-y-0 right-7' type='number' placeholder='Enter your mobile number' required/>
            </div>

            <div className='w-[100%] flex items-center content-center text-black outline-0 my-3 rounded-sm'>
              <label className='mr-5 text-md'>Event Type: </label>
              <select className='w-[70%] text-black outline-0 text-md placeholder-black py-2 px-2 my-3 rounded-sm absolute insert-y-0 right-7'>
                <option>Wedding</option>
                <option>Concert</option>
                <option>Birthday</option>
                <option>Wedding reharsals</option>
                <option>Meetings</option>
              </select>
            </div>

            <div className='w-[100%] flex items-center content-center text-black outline-0 my-3 rounded-sm'>
              <label className='mr-5 text-md'>Country of Event: </label>
              <input className='w-[70%] text-black outline-0 text-md placeholder-black py-2 px-2 my-3 rounded-sm absolute insert-y-0 right-7' type='text' />
            </div>

            <div className='w-[100%] flex items-center content-center text-black outline-0 my-3 rounded-sm'>
              <label className='mr-5 text-md'>State of Event: </label>
              <input className='w-[70%] text-black outline-0 text-md placeholder-black py-2 px-2 my-3 rounded-sm absolute insert-y-0 right-7' type='text' />
            </div>

            <div className='w-[100%] flex items-center content-center text-black outline-0 my-3 rounded-sm'>
              <label className='mr-5 text-md'>Location of Event: </label>
              <input className='w-[70%] text-black outline-0 text-md placeholder-black py-2 px-2 my-3 rounded-sm absolute insert-y-0 right-7' type='text' />
            </div>

            <div className='w-[100%] flex items-center content-center text-black outline-0 my-3 rounded-sm'>
              <label className='mr-5 text-md'>No. of guests: </label>
              <input className='w-[70%] text-black outline-0 text-md placeholder-black py-2 px-2 my-3 rounded-sm absolute insert-y-0 right-7' type='text' />
            </div>

            <div className='w-[100%] flex items-center content-center text-black outline-0 my-3 rounded-sm'>
              <label className='mr-5 text-md'>Date Of Event: </label>
              <input className='w-[70%] text-black outline-0 text-md placeholder-black py-2 px-2 my-3 rounded-sm absolute insert-y-0 right-7' type='date' />
            </div>

            <label className=''>Time of Event</label>
            <div className='flex w-[80%] text-black outline-0 mt-2 mb-4 rounded-sm'>
              <div className='flex'>
                <label className='mr-5 text-md'>From: </label>
                <input className='w-[70%] text-black outline-0 text-md placeholder-black py-2 px-2 my-3 rounded-sm mr-[100px]' type='time' />
              </div>
              <div className='flex'>
                <label className='mr-5 text-md'>To: </label>
                <input className='w-[70%] text-black outline-0 text-md placeholder-black py-2 px-2 my-3 rounded-sm' type='time' />
              </div>
            </div>

            <div className='w-[100%] flex items-center content-center text-black outline-0 mt-3 mb-[90px] rounded-sm'>
              <label className='mr-5 text-md'>Description: </label>
              <textarea className='w-[70%] text-black outline-0 text-md placeholder-black py-2 px-2 my-3 rounded-sm absolute insert-y-0 right-7' type='text' placeholder=''></textarea>
            </div>

          <button className='w-[130px] bg-orange-500 ml-[80%] mb-3 text-xl text-white border border-slate-300 hover:border-green-900 rounded-full'>Book Now</button>
        </div>
      </div>
    </div>
  )
}

export default BookingsPage