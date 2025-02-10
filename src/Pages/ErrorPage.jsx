import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div 
      style={{
        backgroundImage: `url('https://t4.ftcdn.net/jpg/12/24/91/97/360_F_1224919716_20KdJyZxZHwAeQOKXov1rSTdrBRdxHM9.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '0 20px'
      }}
    >
      <h1 className='text-5xl text-left font-bold mb-4'>404 - Page Not Found</h1>
      <p className='text-lg mb-8'>
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to='/'>
        <button className='btn bg-blue-500 text-white font-bold px-6 py-3 rounded-md hover:bg-accent-dark transition'>
          Back To Home
        </button>
      </Link>
    </div>
  );
}
