import { useState, useEffect } from "react";
import API from "../services/api";
import SearchBar from "../components/SearchBar";
import ServiceCard from "../components/ServiceCard";

function Services() {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch services from backend
  useEffect(() => {
    API.get("/services")
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Filter services
  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="services-page">
      <h1>Our Services</h1>

      <SearchBar onSearch={setSearch} />

      <div className="services-container">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <ServiceCard
              key={service._id}
              service={service}
            />
          ))
        ) : (
          <p>No services found.</p>
        )}
      </div>
    </div>
  );
}

export default Services;