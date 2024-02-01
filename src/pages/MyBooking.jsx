import axios from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import DataTable from 'react-data-table-component';
import toast from 'react-hot-toast';

const MyBooking = () => {
    const [shows, setShows] = useState([]);
    const [myBooking, setMyBooking] = useState([]);
    const [loading, setLoading] = useState(true);

    // Get data from localStorage
    const bookInfoString = localStorage.getItem('bookInfo');
    const bookInfo = bookInfoString ? JSON.parse(bookInfoString) : null;

    const userDetailsString = localStorage.getItem('userDetails');
    const userDetails = userDetailsString ? JSON.parse(userDetailsString) : null;

    const { data: allShows = [], isError: showsError } = useQuery({
        queryKey: ['shows'],
        queryFn: async () => {
            try {
                const res = await axios.get('https://api.tvmaze.com/search/shows?q=all');
                return res.data;
            } catch (error) {
                console.error('Error fetching TV shows:', error);
                throw new Error('Unable to fetch TV shows. Please try again later.');
            }
        },
        onSuccess: (data) => {
            // Include bookInfo in the shows array
            const showsWithBookInfo = [
                {
                    show: {
                        name: bookInfo.movieName || 'N/A',
                        id: bookInfo.movieId || 'N/A',
                        language: 'N/A',
                        premiered: 'N/A',
                    },
                    userDetails,
                },
                ...data,
            ];

            setShows(showsWithBookInfo);
            setLoading(false);
        },
    });

    useEffect(() => {
        // Filter shows based on the bookInfo.movieId
        const bookedShows = shows?.filter((show) => show?.show?.id == bookInfo?.movieId);

        // Merge user details with bookedShows
        const showsWithUserDetails = bookedShows?.map((show) => ({
            ...show,
        }));

        // Set the merged data to myBooking state
        setMyBooking(showsWithUserDetails);
    }, [bookInfo?.movieId, shows, userDetails]);


    // ...

    const handleDelete = async (movieId) => {
        try {
            // Simulate an asynchronous operation (e.g., API call)
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Remove the corresponding movie entry from local storage
            const updatedMyBooking = myBooking.filter((booking) => booking.show.id !== movieId);
            localStorage.setItem('bookInfo', JSON.stringify(updatedMyBooking));

            // Show a success toast
            toast.success('Booking deleted successfully!');

            // Log the deleted movie ID
            console.log(`Delete movie with ID: ${movieId}`);

            // Update the state to re-render the component without the deleted entry
            setMyBooking(updatedMyBooking);
        } catch (error) {
            // Handle errors if necessary
            console.error('Error deleting booking:', error);
            toast.error('Error deleting booking. Please try again.');
        }
    };


    const columns = [
        {
            name: 'No',
            selector: (row, index) => index + 1,
        },
        {
            name: 'Movie Name',
            selector: (row) => row.show.name,
        },
        {
            name: 'Movie ID',
            selector: (row) => row.show.id,
        },
        {
            name: 'Language',
            selector: (row) => row.show.language,
        },
        {
            name: 'Premiered',
            selector: (row) => row.show.premiered,
        },
        {
            name: 'Delete',
            cell: (row) => (
                <button onClick={() => handleDelete(row.show.id)} className="btn btn-danger">
                    Delete
                </button>
            ),
        },
    ];

    return (
        <div className="container my-5">
            <h2>My Booking Details </h2>
            {myBooking.length > 0 ? (
                <>
                    <p>Total Booking: {myBooking.length}</p>
                    {loading && <p>Loading...</p>}
                    {showsError && <p>Error fetching TV shows. Please try again later.</p>}
                    <div className="my-10 px-6">
                        <DataTable columns={columns} data={myBooking} pagination highlightOnHover responsive />
                    </div>
                </>
            ) : (
                <p>You haven't made any bookings yet.</p>
            )}
        </div>
    );
};

export default MyBooking;
