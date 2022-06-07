import React, { useEffect, useState } from 'react';
import Bicycle from '../bicycle/Bicycle';

const Inventory = () => {
    const [bicycles, setBicycles] = useState([]);

    useEffect(() => {
        fetch('https://hidden-taiga-01950.herokuapp.com/cycle')
            .then(res => res.json())
            .then(data => setBicycles(data))
    }, [])



    return (
        <div className='container mt-5'>
            <h1 className='text-center text-info'>This is <span className='text-dark'><b>Inventory</b></span></h1>
            <div className='row'>
                {
                    bicycles.map(bicycle => <Bicycle
                        key={bicycle._id}
                        bicycle={bicycle}
                    ></Bicycle>)
                }
            </div>
        </div>
    );
};

export default Inventory;