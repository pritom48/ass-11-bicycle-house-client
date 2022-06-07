import React, { useRef } from 'react';
import { toast } from 'react-toastify';

const AddCycle = () => {

    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const supplierRef = useRef('')
    const quantityRef = useRef('')
    const priceRef = useRef('')
    const urlRef = useRef('')

    const handleAddCycle = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const description = descriptionRef.current.value;
        const supplier = supplierRef.current.value;
        const quantity = quantityRef.current.value;
        const price = priceRef.current.value;
        const img = urlRef.current.value;

        const data = { name, description, supplier, quantity, price, img }

        const url = `https://hidden-taiga-01950.herokuapp.com/cycle`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(result => {
                console.log(result)
            })

        toast('New Item added')

    }

    return (
        <div className='container w-75 mx-auto'>
            <h2 className='text-center'>Add Bicycle</h2>
            <form onSubmit={handleAddCycle}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                    <input ref={nameRef} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />

                    <div className="input-group mb-3 mt-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
                        <textarea ref={descriptionRef} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3 mt-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Supplier</span>
                        <input ref={supplierRef} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3 mt-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Quantity</span>
                        <input ref={quantityRef} type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3 mt-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Price</span>
                        <input ref={priceRef} type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3 mt-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Photo URL</span>
                        <input ref={urlRef} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <button type="submit" className="btn btn-info">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddCycle;