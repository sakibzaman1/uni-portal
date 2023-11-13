import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='my-40'>
            <h1 className='text-center text-7xl font-Montserrat italic'>Under Construction</h1>
            <Link to="/">
            <button className="bg-gradient-to-l from-gray-700 to-gray-900 py-2 px-4 transform transition-transform hover:scale-110 duration-300 font-Montserrat text-white mt-20">Go Back to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;