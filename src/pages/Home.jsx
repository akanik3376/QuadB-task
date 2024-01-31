import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Container from '../Shard/Container';

const Home = () => {
    const { data: movies = [], refetch, isLoading, isError } = useQuery({
        queryKey: ['voter'],
        queryFn: async () => {
            try {
                const res = await axios.get('https://api.tvmaze.com/search/shows?q=all');
                return res.data;
            } catch (error) {
                console.error('Error fetching TV shows:', error);
                throw error;
            }
        },
    });
    console.log(movies)
    return (
        <Container>
            <div className='my-5'>
                {isLoading ? (
                    <p>Loading...</p>
                ) : isError ? (
                    <p>Error fetching data</p>
                ) : (
                    <div>
                        <h2>List of TV Shows</h2>
                        <ul>
                            {movies.map((movie) => (
                                <li key={movie.show.id}>{movie.show.name}</li>
                            ))}
                        </ul>
                        {/* <button onClick={() => refetch()}>Refetch Data</button> */}
                    </div>
                )}
            </div>
        </Container>
    );
};

export default Home;
