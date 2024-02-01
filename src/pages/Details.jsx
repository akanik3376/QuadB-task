import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { CiBookmark } from 'react-icons/ci';
import MovieBookForm from '../components/MovieBookForm';
import '../CSSFile/button.css';

const Details = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [show, setShow] = useState(false);

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



    const handleClose = () => setIsFormOpen(false);
    const handleShow = () => setIsFormOpen(true);

    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <BeatLoader size={15} color="#36D7B7" loading={loading} />
            </div>
        );
    }

    if (!show) {
        return <div className="container mt-5">Show not found</div>;
    }

    const {
        averageRuntime,
        ended,
        genres,
        image,
        language,
        name,
        network,
        premiered,
        officialSite,
        schedule,
        summary,

    } = show || '';
    console.log(show)
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <img src={image?.original} alt={name} className="img-fluid" />
                </div>
                <div className="col-md-8">
                    <h1>{name}</h1>
                    <p>
                        <strong>Genres:</strong> {genres?.join(', ')}
                    </p>
                    <p>
                        <strong>Language:</strong> {language}
                    </p>
                    <p>
                        <strong>Network:</strong> {network?.name}
                    </p>
                    <p>
                        <strong>Runtime:</strong> {averageRuntime} minutes
                    </p>
                    <p>
                        <strong>Schedule:</strong> {schedule?.days.join(', ')} at {schedule?.time}
                    </p>
                    <p>
                        <strong>Premiered:</strong> {premiered}
                    </p>
                    <p>
                        <strong>Ended:</strong> {ended}
                    </p>
                    <p>
                        <strong>Official Site:</strong>{' '}
                        <a href={officialSite} target="_blank" rel="noopener noreferrer">
                            {officialSite}
                        </a>
                    </p>
                    <button onClick={() => handleShow()} className="btn book-now-button">
                        <CiBookmark /> Book Now
                    </button>
                    <button className="btn back-to-home-button">
                        <a href="/">Back To Home</a>
                    </button>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <h2>Summary</h2>
                    <p>{summary}</p>
                </div>
            </div>

            <MovieBookForm show={isFormOpen} movieName={name} id={id} handleClose={handleClose} />

        </div>
    );
};

export default Details;
