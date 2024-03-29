// import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import Container from '../Shard/Container';
import Card from '../components/home/Card';
import { BeatLoader } from "react-spinners";
import Banner from '../components/home/Banner';

const Home = () => {
    const { data: shows = [], isLoading, isError } = useQuery({
        queryKey: ['shows'],
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

    return (

        <div>
            <Banner />
            <Container>


                <div className='my-5'>
                    <h2>List of TV Shows </h2>

                    {isLoading ? (
                        <div className="text-center">
                            <BeatLoader size={15} color={"#36D7B7"} loading={isLoading} />
                        </div>
                    ) : isError ? (
                        <p>Error fetching data</p>
                    ) : (
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mx-auto">
                            {shows?.map((show, index) => (
                                <div key={index} className="col">
                                    <Card movie={show?.show}></Card>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default Home;
