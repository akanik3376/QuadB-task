/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const MovieBookForm = ({ show, handleClose, movieName, id }) => {

    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
    });

    const [validationErrors, setValidationErrors] = useState({
        name: '',
        email: '',
        movieName: '',  // Add movieName validation error state
        movieId: '',    // Add movieId validation error state
    });
    const navigate = useNavigate()
    const handleBookTicket = () => {
        // Validate form fields
        if (!userDetails.name || !userDetails.email || !movieName || !id) {
            setValidationErrors({
                name: userDetails.name ? '' : 'Name is required',
                email: userDetails.email ? '' : 'Email is required',
                movieName: movieName ? '' : 'Movie name is required',
                movieId: id ? '' : 'Movie ID is required',
            });
            return;
        }

        const bookInfo = { name: userDetails.name, email: userDetails.email, movieName, movieId: id };


        // Save user details to local storage
        localStorage.setItem('bookInfo', JSON.stringify(bookInfo));

        // Additional actions when booking a ticket
        console.log('Booking ticket:', userDetails);

        // Close the modal after booking the ticket
        handleClose();
        navigate('/my-booking')
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{`Book Ticket for ${movieName}`}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{`Movie: ${movieName}, ID: ${id}`}</p>
                <Form>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            value={userDetails.name}
                            onChange={(e) => {
                                setUserDetails({ ...userDetails, name: e.target.value });
                                setValidationErrors({ ...validationErrors, name: '' });
                            }}
                        />
                        {validationErrors.name && (
                            <Form.Text className="text-danger">{validationErrors.name}</Form.Text>
                        )}
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={userDetails.email}
                            onChange={(e) => {
                                setUserDetails({ ...userDetails, email: e.target.value });
                                setValidationErrors({ ...validationErrors, email: '' });
                            }}
                        />
                        {validationErrors.email && (
                            <Form.Text className="text-danger">{validationErrors.email}</Form.Text>
                        )}
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleBookTicket}>
                    Book Ticket
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MovieBookForm;
