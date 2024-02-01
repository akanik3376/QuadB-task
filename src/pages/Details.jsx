import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { CiBookmark } from 'react-icons/ci';
import { IoMdHome } from 'react-icons/io';
import MovieBookForm from '../components/MovieBookForm';
import '../css/button.css';

const Details = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
                setShow(response.data);
            } catch (error) {
                console.error('Error fetching show:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const { name, image, genres, language, network, averageRuntime, schedule, premiered, ended, officialSite, summary } =
        show || '';

    const handleOpenForm = () => {
        setIsFormOpen(true);
    };

    const handleCloseForm = () => {
        setIsFormOpen(false);
    };

    return (
        <div className="container mt-5">
            {loading && (
                <div className="text-center">
                    <BeatLoader size={15} color="#36D7B7" loading={loading} />
                </div>
            )}

            {!loading && !show && <div className="container mt-5">Show not found</div>}

            {show && (
                <>
                    <Row>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src={image?.original} alt={name} />
                            </Card>
                        </Col>
                        <Col md={8}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{name}</Card.Title>
                                    <Card.Text>
                                        <strong>Genres:</strong> {genres?.join(', ')}
                                        <br />
                                        <strong>Language:</strong> {language}
                                        <br />
                                        <strong>Network:</strong> {network?.name}
                                        <br />
                                        <strong>Runtime:</strong> {averageRuntime} minutes
                                        <br />
                                        <strong>Schedule:</strong> {schedule?.days.join(', ')} at {schedule?.time}
                                        <br />
                                        <strong>Premiered:</strong> {premiered}
                                        <br />
                                        <strong>Ended:</strong> {ended}
                                        <br />
                                        <strong>Official Site:</strong>{' '}
                                        <a href={officialSite} target="_blank" rel="noopener noreferrer">
                                            {officialSite}
                                        </a>
                                    </Card.Text>
                                    <Button onClick={handleOpenForm} className="book-now-button">
                                        <CiBookmark /> Book Now
                                    </Button>
                                    <Button variant="secondary" className="back-to-home-button">
                                        <IoMdHome /> <a href="/">Back To Home</a>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="mt-3">
                        <Col>
                            <h2>Summary</h2>
                            <p>{summary}</p>
                        </Col>
                    </Row>

                    {/* React Modal */}
                    <Modal
                        show={isFormOpen}
                        onHide={handleCloseForm}
                        centered
                        contentClassName="custom-modal-content"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Book Movie Ticket</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <MovieBookForm onClose={handleCloseForm} movieName={name} />
                        </Modal.Body>
                    </Modal>
                </>
            )}
        </div>
    );
};

export default Details;
