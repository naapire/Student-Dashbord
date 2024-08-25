import React, { useState } from 'react';
import './AddStudent.css';
import Rectangle from '../../assets/Rectangle.svg';
import FormDataDisplay from './FormDataDisplay';

function Response({ handleCloseClick }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    phoneNumber: '',
    email: '',
    address: '',
    cityState: '',
    guardianName: '',
    guardianNumber: '',
    guardianAddress: '',
    guardianRelationship: '',
    password: '',
    confirmPassword: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Set the submitted state to true
  };

  return (
    <div className="response-container">
      {submitted ? (
        <FormDataDisplay formData={formData} />
      ) : (
        <div className="add-student-form">
          <form onSubmit={handleSubmit}>
            <div className="image-upload-section">
              <div className="changeimage">
                <img src={Rectangle} alt="Icon" className="icon" />Change Image
              </div>
            </div>

            <div className="student-name-section">
              <div className="name-inputs">
                <label className="required">
                  First Name <span className="asterisk">*</span>
                  <input
                    type="text"
                    className="input-field"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="required">
                  Last Name <span className="asterisk">*</span>
                  <input
                    type="text"
                    className="input-field"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className="student-details">
                <label className="required">
                  Gender <span className="asterisk">*</span>
                  <input
                    type="text"
                    className="input-field"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="required">
                  Date of Birth <span className="asterisk">*</span>
                  <input
                    type="date"
                    className="input-field"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
            </div>
            <hr />
            <div className="contact-info">
              <div className="phone-email">
                <label className="required">
                  Phone Number <span className="asterisk">*</span>
                  <input
                    type="tel"
                    className="input-field"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="required">
                  Email <span className="asterisk">*</span>
                  <input
                    type="email"
                    className="input-field"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className="address-info">
                <label className="required">
                  Address <span className="asterisk">*</span>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="required">
                  City, State <span className="asterisk">*</span>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="City, State"
                    name="cityState"
                    value={formData.cityState}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <hr />
            <div className="guardian-info">
              <div className="guardian-contact">
                <label className="required">
                  Parental/Guardian Name
                  <input
                    type="text"
                    className="input-field"
                    name="guardianName"
                    value={formData.guardianName}
                    onChange={handleChange}
                  />
                </label>
                <label className="required">
                  Parental/Guardian Number
                  <input
                    type="tel"
                    className="input-field"
                    name="guardianNumber"
                    value={formData.guardianNumber}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="guardian-address-relationship">
                <label className="required">
                  Parental/Guardian Address
                  <input
                    type="text"
                    className="input-field"
                    name="guardianAddress"
                    value={formData.guardianAddress}
                    onChange={handleChange}
                  />
                </label>
                <label className="required">
                  Parental/Guardian Relationship
                  <input
                    type="text"
                    className="input-field"
                    name="guardianRelationship"
                    value={formData.guardianRelationship}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <hr />
            <div className="account-security">
              <label className="required">
                Password
                <input
                  type="password"
                  className="input-field"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </label>
              <label className="required">
                Confirm Password
                <input
                  type="password"
                  className="input-field"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </label>
            </div>
            <button type="submit" className="create-student-button">
              Create Student
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Response;
