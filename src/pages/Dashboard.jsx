function Dashboard() {
  return (
    <div className="dashboard">

      <h1>Dashboard</h1>

      <p className="welcome">
        Welcome to the Local Service Marketplace Dashboard
      </p>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <h2>Total Services</h2>
          <p>6</p>
        </div>

        <div className="dashboard-card">
          <h2>My Bookings</h2>
          <p>8</p>
        </div>

        <div className="dashboard-card">
          <h2>Completed Services</h2>
          <p>15</p>
        </div>

        <div className="dashboard-card">
          <h2>Pending Requests</h2>
          <p>5</p>
        </div>

      </div>

      <div className="dashboard-table">

        <h2>Recent Bookings</h2>

        <table>

          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Customer</th>
              <th>Service</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>101</td>
              <td>Bhavani</td>
              <td>Electrician</td>
              <td>26-06-2026</td>
              <td>Confirmed</td>
            </tr>

            <tr>
              <td>102</td>
              <td>Ravi</td>
              <td>Plumber</td>
              <td>27-06-2026</td>
              <td>Pending</td>
            </tr>

            <tr>
              <td>103</td>
              <td>Priya</td>
              <td>Cleaner</td>
              <td>28-06-2026</td>
              <td>Completed</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Dashboard;