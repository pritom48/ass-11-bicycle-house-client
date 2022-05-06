import React, { useEffect, useState } from 'react';
import ManageCycleTable from '../ManageCycleTable/ManageCycleTable';

const ManageCycle = () => {

    const [bicycles, setBicycles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cycle')
            .then(res => res.json())
            .then(data => setBicycles(data))
    }, [])

    return (
        <div className='container'>
            <h2 className='text-center'>Total Itam (Cycle) : {bicycles.length}</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Supplier</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bicycles.map(bicycle => <ManageCycleTable
                            key={bicycle._id}
                            bicycle={bicycle}
                        >

                        </ManageCycleTable>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default ManageCycle;