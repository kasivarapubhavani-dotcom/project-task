import { useState } from "react";

function BookingForm({ serviceName = "Selected Service" }) {
  const [booking, setBooking] = useState({
    customerName: "",
    email: "",
    phone: "",
    bookingDate: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBooking({
      ...booking,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Booking Confirmed!\n\nService: ${serviceName}\nCustomer: ${booking.customerName}\nDate: ${booking.bookingDate}`
    );

    // Reset the form
    setBooking({
      customerName: "",
      email: "",
      phone: "",
      bookingDate: "",
      address: "",
      message: "",
    });
  };

  return (
    <div className="booking-container">
      <h2>Book a Service</h2>

      <p>
        <strong>Service:</strong> {serviceName}
      </p>

      <form onSubmit={handleSubmit} className="booking-form">

        <label>Customer Name</label>
        <input
          type="text"
          name="customerName"
          value={booking.customerName}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={booking.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={booking.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
          required
        />

        <label>Booking Date</label>
        <input
          type="date"
          name="bookingDate"
          value={booking.bookingDate}
          onChange={handleChange}
          required
        />

        <label>Address</label>
        <textarea
          name="address"
          value={booking.address}
          onChange={handleChange}
          placeholder="Enter service address"
          rows="3"
          required
        ></textarea>

        <label>Additional Message</label>
        <textarea
          name="message"
          value={booking.message}
          onChange={handleChange}
          placeholder="Any special instructions..."
          rows="4"
        ></textarea>

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default BookingForm;