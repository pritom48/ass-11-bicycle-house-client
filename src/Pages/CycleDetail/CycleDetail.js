import React from 'react';
import { useParams } from 'react-router-dom';


const CycleDetail = () => {
    const { cycleId } = useParams()
    return (
        <div>
            <h2>cycle detail :{cycleId} </h2>
        </div>
    );
};

export default CycleDetail;