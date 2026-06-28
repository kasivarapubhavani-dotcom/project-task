import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpg";
function Hero() {
  return (
    <section
  className="hero"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

      <div className="hero-content">

        <h1>Welcome to Local Service Marketplace</h1>

        <p>
          Find trusted local professionals for home repairs, cleaning,
          beauty services, education, and much more.
        </p>

        <Link to="/services">
          <button className="hero-btn">
            Explore Services
          </button>
        </Link>

      </div>

    </section>
  );
}

export default Hero;