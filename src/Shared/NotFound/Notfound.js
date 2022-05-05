import React from 'react';

const Notfound = () => {
    return (
        <div className='container d-flex justify-content-center align-items-center flex-column'>
            <h1 className='text-center text-danger'>404</h1>
            <img className='mx-auto w-50' src="https://bikelah.com/image/data/articles/cyclist-sleeping-with-bike.jpg" alt="" />
            <h1 className='text-center text-danger'>Not Found!!</h1>
        </div>
    );
};

export default Notfound;