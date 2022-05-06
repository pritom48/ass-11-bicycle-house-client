import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const CycleDetail = () => {
    const { cycleId } = useParams()
    const [cycle, setCycle] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/cycle/${cycleId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setCycle(data))

    }, [])



    return (
        <div className='container mt-5'>
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={cycle.img} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h2 class="card-title">{cycle.name}</h2>
                            <p class="card-text">{cycle.description}</p>
                            <h6>Supplier Name: {cycle.supplier}</h6>
                            <h6>Price: {cycle.price}$</h6>
                            <h5>Quantity: {cycle.quantity}</h5>
                            <button type="button" class="btn btn-success">Delivered</button>
                            <div class="input-group mb-3 w-50 mt-3">
                                <input type="text" class="form-control" placeholder="Add Cycle" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CycleDetail;