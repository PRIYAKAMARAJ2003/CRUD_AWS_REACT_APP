import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography } from '@material-ui/core';

const DeleteForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.delete('https://jpnc3r9b22.execute-api.eu-west-1.amazonaws.com/DEV/create', {
        data: {
          httpMethod: 'DELETE',
          body: JSON.stringify({ email: email })
        }
      });

      setSuccessMessage('Record deleted successfully.');
    } catch (error) {
      setError('Failed to delete record. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Typography variant="h2" gutterBottom>Delete Record</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
        >
          Delete
        </Button>
      </form>
      {error && <Typography color="error">{error}</Typography>}
      {successMessage && <Typography color="primary">{successMessage}</Typography>}
    </div>
  );
};

export default DeleteForm;
