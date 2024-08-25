import React, { useState } from 'react';
import './AddStudent.css';
import Rectangle from '../../assets/Rectangle.svg';
import Close from '../../assets/close.svg';
import Response from './response';
import FormDataDisplay from './FormDataDisplay';

function EditStudent({ handleCloseClick }) {
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

  const [page, setPage] = useState('response'); // This state controls which page to display

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage('formDataDisplay'); // Switch to FormDataDisplay page on submit
  };

  return (
    <div className="overlay">
      <div className="overall-conta">
        <main>
          <div className='top'>
            <div>Edit Student</div>
            <div onClick={handleCloseClick}><img src={Close} alt="Close Icon" className='icon' /></div>
          </div>
          
          {page === 'response' ? (
            <Response
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          ) : (
            <FormDataDisplay formData={formData} />
          )}
        </main>
      </div>
    </div>
  );
}

export default EditStudent;
