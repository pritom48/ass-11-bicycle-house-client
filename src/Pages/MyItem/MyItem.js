import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth)
    const [items, setItems] = useState();

    useEffect(() => {
        const getItem = async () => {
            const email = user.email;
            const url = `https://hidden-taiga-01950.herokuapp.com/myitem?email=${email}`
            const { data } = await axios.get(url)
            setItems(data)
        }
        getItem()
    }, [user])
    return (
        <div>

            <h2>THis is my item : {items}</h2>
        </div>
    );
};

export default MyItem;