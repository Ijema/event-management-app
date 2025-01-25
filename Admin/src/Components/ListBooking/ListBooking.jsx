import React, { useState, useEffect } from 'react';
import './ListBooking.css';
import cross_icon from '../../assets/cross_icon.png';
import { removeBookingRoute, listBookingRoute } from '../../Utils/AdminApiRoutes';

const ListBooking = () => {
    const [allBookings, setAllBookings] = useState([]);

    const fetchInfo = async () => {
        try {
            const response = await fetch(listBookingRoute);
            if (!response.ok) throw new Error("Failed to fetch bookings");
            const data = await response.json();
            setAllBookings(data);
        } catch (error) {
            console.error("Error fetching bookings:", error);
        }
    };

    // Fetch bookings when the component loads
    useEffect(() => {
        fetchInfo();
    }, []);

    const removeBookings = async (id) => {
        try {
            await fetch(removeBookingRoute, {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });
            fetchInfo(); // Refresh the booking list after removal
        } catch (error) {
            console.error("Error removing booking:", error);
        }
    };

    return (
        <div className='list-portfolio'>
            <h1>All Bookings</h1>
            <div className="listportfolio-format-main">
                <p>Name</p>
                <p>Email</p>
                <p>Event Category</p>
                <p>Country</p>
                <p>State</p>
                <p>Location</p>
                <p>No. of Guests</p>
                <p>Date</p>
                <p>Start Time</p>
                <p>End Time</p>
                <p>Description</p>
                <p>Delete</p>
            </div>
            <div className="listportfolio-allportfolios">
                <hr />
                {allBookings.map((booking, index) => (
                    <div key={index} className="listportfolio-format-main listportfolio-format">
                        <p>{booking.name}</p>
                        <p>{booking.email}</p>
                        <p>{booking.eventType}</p>
                        <p>{booking.countryOfEvent}</p>
                        <p>{booking.stateOfEvent}</p>
                        <p>{booking.locationOfEvent}</p>
                        <p>{booking.numOfGuest}</p>
                        <p>{new Date(booking.dateOfEvent).toLocaleDateString()}</p>
                        <p>{booking.beginingTime}</p>
                        <p>{booking.endingTime}</p>
                        <p>{booking.description}</p>
                        <img
                            onClick={() => removeBookings(booking.id)}
                            src={cross_icon}
                            alt="Delete"
                            className="listportfolio-remove-icon"
                        />
                    </div>
                ))}
                <hr />
            </div>
        </div>
    );
};

export default ListBooking;
