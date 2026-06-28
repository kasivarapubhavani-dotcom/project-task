import BookingForm from "../components/BookingForm";

function ServiceDetails() {
  const service = {
    name: "Electrician",
    category: "Home Repair",
    description:
      "Professional electricians for wiring, repairs, installations, and maintenance.",
    price: 500,
    provider: "Ramesh Kumar",
    phone: "9876543210",
    location: "Vijayawada",
    
  };

  return (
    <div className="service-details">

      <h1>{service.name}</h1>

     

      <div className="details-card">

        <h2>Service Information</h2>

        <p>
          <strong>Category:</strong> {service.category}
        </p>

        <p>
          <strong>Description:</strong> {service.description}
        </p>

        <p>
          <strong>Price:</strong> ₹{service.price}
        </p>

        <p>
          <strong>Provider:</strong> {service.provider}
        </p>

        <p>
          <strong>Phone:</strong> {service.phone}
        </p>

        <p>
          <strong>Location:</strong> {service.location}
        </p>

      </div>

      <BookingForm serviceName={service.name} />

    </div>
  );
}

export default ServiceDetails;