import { useState } from "react";
import API from "../services/api";

function Login() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", {
        email: user.email,
        password: user.password,
      });

      console.log(res.data);

      alert("Login Successful!");

      // Optional: Save token
      localStorage.setItem("token", res.data.token);

      // Clear form
      setUser({
        email: "",
        password: "",
      });

      // Optional: Redirect
      // navigate("/");

    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="register-link">
          Don't have an account?
          <a href="/register"> Register</a>
        </p>

      </div>
    </div>
  );
}

export default Login;