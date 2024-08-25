import React from 'react';
// import './FormDataDisplay.css';

function FormDataDisplay({ formData }) {
  return (
    <div className="add-student-form ">
      Sumarry
      <div className='formform'>
      <div className="formsection">
        <div className="formlabel">First Name:</div>
        <div className="formvalue">{formData.firstName}</div>
      </div>
      <div className="formsection">
        <div className="formlabel">Last Name:</div>
        <div className="formvalue">{formData.lastName}</div>
      </div>
      <div className="formsection">
        <div className="formlabel">Gender:</div>
        <div className="formvalue">{formData.gender}</div>
      </div>
      <div className="formsection">
        <div className="formlabel">Date of Birth:</div>
        <div className="formvalue">{formData.dob}</div>
      </div>
      <hr />
      <div className="formsection">
        <div className="formlabel">Phone Number:</div>
        <div className="formvalue">{formData.phoneNumber}</div>
      </div>
      <div className="formsection">
        <div className="formlabel">Email:</div>
        <div className="formvalue">{formData.email}</div>
      </div>
      <div className="formsection">
        <div className="formlabel">Address:</div>
        <div className="formvalue">{formData.address}</div>
      </div>
      <div className="formsection">
        <div className="formlabel">City, State:</div>
        <div className="formvalue">{formData.cityState}</div>
      </div>
      <hr />
      <div className="formsection">
        <div className="formlabel">Guardian Name:</div>
        <div className="formvalue">{formData.guardianName}</div>
      </div>
      <div className="formsection">
        <div className="formlabel">Guardian Number:</div>
        <div className="formvalue">{formData.guardianNumber}</div>
      </div>
      <div className="formsection">
        <div className="formlabel">Guardian Address:</div>
        <div className="formvalue">{formData.guardianAddress}</div>
      </div>
      <div className="formsection">
        <div className="formlabel">Guardian Relationship:</div>
        <div className="formvalue">{formData.guardianRelationship}</div>
      </div>
      <hr />
      <div className="formsection">
        <div className="formlabel">Password:</div>
        <div className="formvalue">{formData.password}</div>
      </div>
      <div className="formsection">
        <div className="formlabel">Confirm Password:</div>
        <div className="formvalue">{formData.confirmPassword}</div>
      </div>
      <hr />
      </div>
      <button type="submit" className="create-confirm-button">
            Confirm
      </button>
    </div>
  );
}

export default FormDataDisplay;
