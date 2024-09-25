import React, { useState } from 'react';
import * as Yup from 'yup';
import { getAllPlanApi } from '../Utils/Apis';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
  status: Yup.string().required('Status is required'),
  upi: Yup.string().required('UPI is required'),
  ifsc: Yup.string().matches(/^[A-Za-z]{4}\d{7}$/, 'Invalid IFSC code').required('IFSC is required'),
  bankName: Yup.string().required('Bank name is required'),
  payIn: Yup.number().required('Pay-in is required').positive('Pay-in must be positive'),
  bankAccountNumber: Yup.string().required('Bank account number is required'),
  payInLimit: Yup.number().required('Pay-in limit is required').positive('Pay-in limit must be positive'),
  payOut: Yup.number().required('Pay-out is required').positive('Pay-out must be positive'),
});

const MyForm = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState("");
  const [upi, setUpi] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [bankName, setBankName] = useState("");
  const [payIn, setPayIn] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [payInLimit, setPayInLimit] = useState("");
  const [payOut, setPayOut] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formValues = {
      username,
      name,
      email,
      phoneNumber,
      status,
      upi,
      ifsc,
      bankName,
      payIn,
      bankAccountNumber,
      payInLimit,
      payOut,
    };

    try {
      await validationSchema.validate(formValues, { abortEarly: false });
      console.log('Form is valid');
      
      setErrors({});
    } catch (validationErrors) {
      const errorMessages = validationErrors.inner.reduce((acc, error) => {
        return { ...acc, [error.path]: error.message };
      }, {});
      setErrors(errorMessages);
    }
  };


  const getAllData = async() => {
    console.log(username, 'username')
    console.log(email, 'email')
    console.log(phoneNumber, 'phoneNumber')
    console.log(name, 'name')
  }

  return (
    <form className="row g-3" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <label className="form-label labelGreyText font14 fw-lighter">Name</label>
        <input
          type="text"
          className="form-control font12"
          onChange={(e) => setName(e.target.value)}
          value={name}
          
        />
        {errors.name && <div className="error text-danger font14">{errors.name}</div>}
      </div>
      <div className="col-md-6">
        <label className="form-label labelGreyText font14 fw-lighter">Username</label>
        <input
          type="text"
          className="form-control font12"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          
        />
        {errors.username && <div className="error">{errors.username}</div>}
      </div>
      <div className="col-md-6">
        <label className="form-label labelGreyText font14 fw-lighter">Email ID</label>
        <input
          type="text"
          className="form-control font12"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
         
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
      <div className="col-md-6">
        <label className="form-label labelGreyText font14 fw-lighter">Phone Number</label>
        <input
          type="text"
          className="form-control font12"
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
          
        />
        {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
      </div>
      {/* Repeat similar structure for other fields */}
      <button type="submit" onClick={getAllData}>Submit</button>
    </form>
  );
};

export default MyForm;