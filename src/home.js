import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="home-container">
      <aside className="sidebar">
        <div className="logo">
        </div>
        <h2>User</h2>
        <ul>
          <h4>Recruitment</h4>
          <li><a href="/ไปไหน"> <i className="fas fa-user"></i> Recruiting employees</a></li>
          <li><a href="/ไปไหน">Recruiting internships</a></li>
          <h4>Status</h4>
          <li><a href="/ไปไหน">Applicant status</a></li>
          <li><a href="/ไปไหน">The result</a></li>
          <h4>Information</h4>
          <li><a href="/ไปไหน">Profile</a></li>
        </ul>

        <div className="logout-container">
          <button className="logout-button" onClick={handleLogout}>Log Out</button>
        </div>
      </aside>

      <div className="main-content">
        <header className="header">
          <h1>Admin</h1>
        </header>
        <p>เนื้อหา</p>
        <p style={{ height: "150vh" }}></p>
      </div>
    </div>
  );
}


export default Home;
