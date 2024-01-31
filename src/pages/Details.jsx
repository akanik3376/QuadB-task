import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(null);

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

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!show) {
        return <div>Show not found</div>;
    }

    return (
        <div>
            <h1>{show.name}</h1>
            <p>{show.summary}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default Details;
