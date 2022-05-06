import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Bicycle = ({ bicycle }) => {
    const { _id, name, img, description, price, supplier, quantity } = bicycle;
    const navigate = useNavigate();

    const navigateToCycleDetail = id => {
        navigate(`/cycle/${id}`)
    }
    return (
        <div className=' col-md-4 col-lg-4 col-sm-12 g-4'>
            <div class="col">
                <div class="card h-100">
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{description}</p>
                        <h6>Supplier Name: {supplier}</h6>
                        <h6>Quantity: {quantity}</h6>
                        <h3>Price: ${price}</h3>
                        <button onClick={() => navigateToCycleDetail(_id)} type="button" class="btn btn-info">Stock Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bicycle;