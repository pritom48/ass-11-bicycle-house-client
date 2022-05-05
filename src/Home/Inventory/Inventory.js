import React, { useEffect, useState } from 'react';
import Bicycle from '../bicycle/Bicycle';

const Inventory = () => {
    const [bicycles, setBicycles] = useState([]);

    useEffect(() => {
        fetch('bicyle.json')
            .then(res => res.json())
            .then(data => setBicycles(data))
    }, [])



    return (
        <div>
            <h2 className='text-center text-info'>This is <span className='text-dark'>Inventory</span></h2>
            <div>
                {
                    bicycles.map(bicycle => <Bicycle
                        key={bicycle.id}
                        bicycle={bicycle}
                    ></Bicycle>)
                }
            </div>
        </div>
    );
};

export default Inventory;