import React from 'react';

const AddCycle = () => {
    return (
        <div className='container w-75 mx-auto'>
            <h2>Add cycle</h2>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />

                <div class="input-group mb-3 mt-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Description</span>
                    <textarea type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div class="input-group mb-3 mt-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Supplier</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div class="input-group mb-3 mt-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Quantity</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div class="input-group mb-3 mt-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Price</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <button type="button" class="btn btn-info">Add</button>
            </div>
        </div>
    );
};

export default AddCycle;