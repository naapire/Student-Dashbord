import React from "react";
import '../StudentDetails/studentdetails.css';
import Group from '../../assets/violet.svg';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import '../About/about.css'

function About() {
  return (
    <main className="main-container relative-container">
      <div className="search-container">
        <div className="minor-container">
          <div className="icon-container">
            <div className="icon-wrapper">
              <img src={Group} alt="Not" className="icon" />
              <div className="text-container">
                <div className="text-title">John Doe</div>
                <div className="text-value">Primary 1A</div>
              </div>
            </div>
            <div className="view">View Profile</div>
          </div>
          <div className="dent">Mathematics</div>
          <div className="score-container">
            <div className="attendance-container">
              <div className="label">Average Attendance</div>
              <div className="value">90%</div>
            </div>
            <div className="attendance-container">
              <div className="label">Average Score</div>
              <div className="value">82%</div>
            </div>
          </div>

          <div className="main-card">
            <div className="inputdent">
            <div className="column">
              <div className="form-group">
                <label htmlFor="first-name">First Name</label><br />
                <input type="text" id="first-name" name="first-name" />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last Name</label><br />
                <input type="text" id="last-name" name="last-name" />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender</label><br />
                <input type="text" id="gender" name="gender" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label><br />
                <input type="email" id="email" name="email" />
              </div>
            </div>
            <div className="column">
              <div className="form-group">
                <label htmlFor="middle-name">Middle Name</label><br />
                <input type="text" id="middle-name" name="middle-name" />
              </div>
              <div className="form-group">
                <label htmlFor="dob">Date of Birth</label><br />
                <input type="date" id="dob" name="dob" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label><br />
                <input type="tel" id="phone" name="phone" />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
