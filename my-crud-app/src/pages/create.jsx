import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Typography } from '@material-ui/core';

const CreateForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    comments: '',
    options: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = '';

    // Validation for first name, last name, comments, and options
    if (['firstName', 'lastName', 'comments', 'options'].includes(name)) {
      if (!/^[A-Za-z\s]+$/.test(value)) {
        error = 'Only alphabets and space are allowed';
      }
    }

    // Validation for email
    if (name === 'email') {
      if (!value.endsWith('@epsh.in')) {
        error = 'Email must end with @epsh.in';
      }
    }

    // Update errors state
    setErrors({ ...errors, [name]: error });

    // Update form data
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if there are any validation errors
    if (Object.values(errors).some((error) => error)) {
      console.error('Form validation failed');
      return;
    }
  
    try {
      // Check if the email already exists
      const checkResponse = await axios.get(
        `https://jpnc3r9b22.execute-api.eu-west-1.amazonaws.com/DEV/create?email=${formData.email}`
      );
  
      if (checkResponse.data && checkResponse.data.body && JSON.parse(checkResponse.data.body).length > 0) {
        setErrors({ ...errors, email: 'Email already exists' });
        return;
      }
  
      // If the email is unique, proceed with adding the data
      const response = await axios.post(
        'https://jpnc3r9b22.execute-api.eu-west-1.amazonaws.com/DEV/create',
        {
          httpMethod: 'POST',
          body: JSON.stringify(formData)
        }
      );
  
      console.log('Data posted successfully:', response.data);
      setSuccessMessage('Data added successfully');
      // Clear form data
      setFormData({
        email: '',
        firstName: '',
        lastName: '',
        comments: '',
        options: ''
      });
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };
  
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Add Movie Review
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                required
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="First Name"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                required
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Last Name"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                required
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                error={!!errors.comments}
                helperText={errors.comments}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Options"
                name="options"
                value={formData.options}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                error={!!errors.options}
                helperText={errors.options}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Create
              </Button>
            </Grid>
            {successMessage && <Grid item xs={12}>{successMessage}</Grid>}
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default CreateForm;
