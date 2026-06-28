import { useState } from "react";
import API from "../services/api";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    role: "customer",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await API.post("/auth/register", {
        name: user.name,
        email: user.email,
        password: user.password,
        phone: user.phone,
        address: user.address,
        role: user.role,
      });

      alert(res.data.message);

      console.log(res.data);

      // Clear form after successful registration
      setUser({
        name: "",
        email: "",
        phone: "",
        address: "",
        role: "customer",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Create Account</h1>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={user.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleChange}
            required
          />

          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={user.phone}
            onChange={handleChange}
            required
          />

          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            value={user.address}
            onChange={handleChange}
            required
          />

          <label>Select Role</label>
          <select
            name="role"
            value={user.role}
            onChange={handleChange}
          >
            <option value="customer">Customer</option>
            <option value="provider">Service Provider</option>
          </select>

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={user.password}
            onChange={handleChange}
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={user.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Register
          </button>
        </form>

        <p className="login-link">
          Already have an account?
          <a href="/login"> Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;