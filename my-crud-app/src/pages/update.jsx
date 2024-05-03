import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';

const UpdateForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    comments: '',
    options: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.put('https://jpnc3r9b22.execute-api.eu-west-1.amazonaws.com/DEV/create', {
        httpMethod: 'PUT',
        body: JSON.stringify(formData)
      });

      setSuccessMessage('Details updated successfully.');
    } catch (error) {
      setError('Failed to update details. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <h2>Update Details</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
          />
          <br />
          <TextField
            label="First Name"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
          />
          <br />
          <TextField
            label="Last Name"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
          />
          <br />
          <TextField
            label="Comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
          />
          <br />
          <TextField
            label="Options"
            name="options"
            value={formData.options}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
          />
          <br />
          <Button variant="contained" color="primary" type="submit" disabled={loading}>
            Update
          </Button>
        </form>
        {error && <div>{error}</div>}
        {successMessage && <div>{successMessage}</div>}
      </div>
    </div>
  );
};

export default UpdateForm;
