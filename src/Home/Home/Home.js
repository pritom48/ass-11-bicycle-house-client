import React from 'react';
import Header from '../Header/Header';
import Inventory from '../Inventory/Inventory';
import OtherService from '../OtherService/OtherService';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Inventory></Inventory>
            <OtherService></OtherService>
        </div>
    );
};

export default Home;