/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const MovieBookForm = ({ show, handleClose, movieName, id }) => {
    console.log(id)
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
    });

    const [validationErrors, setValidationErrors] = useState({
        name: '',
        email: '',
    });

    const handleBookTicket = () => {
        // Validate form fields
        if (!userDetails.name || !userDetails.email) {
            setValidationErrors({
                name: userDetails.name ? '' : 'Name is required',
                email: userDetails.email ? '' : 'Email is required',
            });
            return;
        }

        // Save user details to local storage
        localStorage.setItem('userDetails', JSON.stringify(userDetails));

        // Save movie details to local storage
        localStorage.setItem('movieDetails', JSON.stringify({ movieName, id }));

        // Additional actions when booking a ticket
        console.log('Booking ticket:', userDetails);

        // Close the modal after booking the ticket
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{`Book Ticket for ${movieName}`}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{`Movie: ${movieName},`}</p>
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
