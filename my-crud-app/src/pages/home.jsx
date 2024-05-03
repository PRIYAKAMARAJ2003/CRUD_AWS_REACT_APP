import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@material-ui/core';

const HomePage = () => {
  return (
    <Container maxWidth="sm" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to CRUD Operations
      </Typography>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
        <Button variant="contained" color="primary" component={Link} to="/createform" style={{ marginRight: '10px' }}>
          Create
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/readform" style={{ marginRight: '10px' }}>
          Read
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/updateform" style={{ marginRight: '10px' }}>
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
