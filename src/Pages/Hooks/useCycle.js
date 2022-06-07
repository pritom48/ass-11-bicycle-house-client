import { useEffect, useState } from "react";

const useCycle = () => {
    const [bicycles, setBicycles] = useState([]);

    useEffect(() => {
        fetch('https://hidden-taiga-01950.herokuapp.com/cycle')
            .then(res => res.json())
            .then(data => setBicycles(data))
    }, [])
    return [bicycles, setBicycles]
}

export default useCycle