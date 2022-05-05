import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Header from '../Header/Header';
import Inventory from '../Inventory/Inventory';
import OtherService from '../OtherService/OtherService';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Inventory></Inventory>
            <OtherService></OtherService>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;