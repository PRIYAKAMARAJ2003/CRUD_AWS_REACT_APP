import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReadForm = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jpnc3r9b22.execute-api.eu-west-1.amazonaws.com/DEV/create', {
          httpMethod: 'GET'
        });
        console.log('API Response:', response.data); // Log the response data
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error); // Log any errors
        setError(error);
        setLoading(false);
      }
      
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Data:</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Comments</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {(() => {
            const rows = [];
            for (let i = 0; i < data.length; i++) {
              const item = data[i];
              rows.push(
                <tr key={i}>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.email}</td>
                  <td>{item.comments}</td>
                  <td>{item.options}</td>
                </tr>
              );
            }
            return rows;
          })()}
        </tbody>
      </table>
    </div>
  );
};

export default ReadForm;
