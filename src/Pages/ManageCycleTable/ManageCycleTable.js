import React from 'react';

const ManageCycleTable = ({ bicycle }) => {

    const { name, price, quantity, supplier } = bicycle;

    return (

        <tr>

            <td>{name}</td>
            <td>{supplier}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td><button type="button" class="btn btn-danger">Delete</button></td>
        </tr>

    );
};

export default ManageCycleTable;