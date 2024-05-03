import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';

const CreateForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    comments: '',
    options: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://jpnc3r9b22.execute-api.eu-west-1.amazonaws.com/DEV/create', {
        httpMethod: 'POST',
        body: JSON.stringify(formData)
      });

      console.log('Data posted successfully:', response.data);
      // You can add further actions upon successful post here
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
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
      <Button variant="contained" color="primary" type="submit">
        Create
      </Button>
    </form>
  );
};

export default CreateForm;
