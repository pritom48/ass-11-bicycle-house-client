import React from 'react';
import useCycle from '../Hooks/useCycle';

const ManageCycleTable = ({ bicycle }) => {
    const [bicycles, setBicycles] = useCycle();

    const { name, price, quantity, supplier, _id } = bicycle;

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete?')
        if (proceed) {
            const url = `https://hidden-taiga-01950.herokuapp.com/cycle/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = bicycles.filter(bicycle => bicycle._id !== id)
                    setBicycles(remaining)
                })
        }
    }

    return (

        <tr>

            <td>{name}</td>
            <td>{supplier}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td><button onClick={() => handleDelete(_id)} type="button" class="btn btn-danger">Delete</button></td>
        </tr>

    );
};

export default ManageCycleTable;