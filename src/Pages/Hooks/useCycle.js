import { useEffect, useState } from "react";

const useCycle = () => {
    const [bicycles, setBicycles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cycle')
            .then(res => res.json())
            .then(data => setBicycles(data))
    }, [])
    return [bicycles, setBicycles]
}

export default useCycle