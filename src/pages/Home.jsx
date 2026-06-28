import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import ServiceCard from "../components/ServiceCard";

function Home() {
  const services = [
    {
      id: 1,
      name: "Electrician",
      category: "Home Repair",
      description: "Expert electrical repair and installation.",
      price: 500
    },
    {
      id: 2,
      name: "Plumber",
      category: "Home Repair",
      description: "Professional plumbing services.",
      price: 400
      
    },
    {
      id: 3,
      name: "Carpenter",
      category: "Wood Work",
      description: "Furniture repair and custom wood work.",
      price: 700
      
    },
    {
      id: 4,
      name: "Tutor",
      category: "Education",
      description: "Experienced home tutor for all subjects.",
      price: 800
      
    },
    {
      id: 5,
      name: "Beautician",
      category: "Beauty",
      description: "Professional beauty services at your home.",
      price: 1000
      
    },
    {
      id: 6,
      name: "Cleaner",
      category: "Cleaning",
      description: "Home and office cleaning services.",
      price: 600
      
    },
  ];

  const handleSearch = (text) => {
    console.log("Searching:", text);
  };

  return (
    <>
      <Hero />

      <SearchBar onSearch={handleSearch} />

      <div className="services-container">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </>
  );
}

export default Home;