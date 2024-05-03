import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, makeStyles, TablePagination } from '@material-ui/core';
 
const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        marginLeft: '30%',
        width:'100%',
    },
});
 
function ReadForm() {
    const classes = useStyles();
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(0);
    const rowsPerPage = 3;
 
    useEffect(() => {
        fetch('https://jpnc3r9b22.execute-api.eu-west-1.amazonaws.com/DEV/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "httpMethod": "GET"
            })
        })
        .then(response => response.json())
        .then(data => {
            // Parse the JSON string in the body to convert it into an array
            const parsedData = JSON.parse(data.body);
            setMovies(parsedData);
        })
        .catch(error => {
            console.error('Error fetching movies:', error);
        });
    }, []);
 
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
 
    return (
        <div className={classes.container}>
            <Typography variant="h2">Read</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Comments</TableCell>
                            <TableCell>Options</TableCell>
                            {/* Add more table headers if needed */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {movies.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(movie => (
                            <TableRow key={movie.id}>
                                <TableCell>{movie.firstName}</TableCell>
                                <TableCell>{movie.lastName}</TableCell>
                                <TableCell>{movie.email}</TableCell>
                                <TableCell>{movie.comments}</TableCell>
                                <TableCell>{movie.options}</TableCell>
                                {/* Render more table data if needed */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[]}
                component="div"
                count={movies.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
            />
        </div>
    );
}
 
export default ReadForm;
 