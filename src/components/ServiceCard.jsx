import { useState } from "react";

function ServiceCard({ service }) {

  const [booked, setBooked] = useState(false);

  const handleBooking = () => {
    setBooked(true);
  };

  return (
    <div className="service-card">

      {/* Image removed */}

      <h2>{service.name}</h2>

      <p>
        <b>Category:</b> {service.category}
      </p>

      <p>{service.description}</p>

      <h3>₹{service.price}</h3>

      <button onClick={handleBooking}>
        {booked ? "Booked ✓" : "Book Now"}
      </button>

      {booked && (
        <p style={{color:"green"}}>
          Booking confirmed!
        </p>
      )}

    </div>
  );
}

export default ServiceCard;