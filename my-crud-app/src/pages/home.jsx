import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@material-ui/core';

const HomePage = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to CRUD Operations
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Button variant="contained" color="primary" component={Link} to="/createform">
          Create
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/readform">
          Read
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/updateform">
          Update
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/deleteform">
          Delete
        </Button>
      </div>
    </Container>
  );
};

export default HomePage;
