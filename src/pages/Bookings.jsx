import { useState } from "react";

function Bookings() {
  const [bookings] = useState([
    {
      id: 1,
      service: "Electrician",
      provider: "Ramesh Kumar",
      date: "2026-06-28",
      status: "Confirmed",
      price: 500,
    },
    {
      id: 2,
      service: "Plumber",
      provider: "Suresh",
      date: "2026-07-01",
      status: "Pending",
      price: 400,
    },
    {
      id: 3,
      service: "Home Cleaning",
      provider: "Anjali",
      date: "2026-07-03",
      status: "Completed",
      price: 800,
    },
  ]);

  return (
    <div className="bookings-page">
      <h1>My Bookings</h1>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table className="booking-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Service</th>
              <th>Provider</th>
              <th>Date</th>
              <th>Price (₹)</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.service}</td>
                <td>{booking.provider}</td>
                <td>{booking.date}</td>
                <td>{booking.price}</td>
                <td>{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Bookings;