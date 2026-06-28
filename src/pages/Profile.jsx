import { useState } from "react";

function Profile() {
  const [user, setUser] = useState({
    name: "Bhavani",
    email: "bhavani@gmail.com",
    phone: "9876543210",
    address: "Vijayawada, Andhra Pradesh",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Profile Updated Successfully!");

    console.log(user);
  };

  return (
    <div className="profile-container">

      <div className="profile-card">

        <h1>My Profile</h1>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />

          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />

          <label>Address</label>
          <textarea
            name="address"
            rows="4"
            value={user.address}
            onChange={handleChange}
          ></textarea>

          <button type="submit">
            Update Profile
          </button>

        </form>

      </div>

    </div>
  );
}

export default Profile;