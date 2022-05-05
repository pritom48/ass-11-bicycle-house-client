import React from 'react';

const Header = () => {
    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-md-6 d-flex justify-content-center align-items-center flex-column'>
                    <h1 className='text-info mb-5'>Best Warehouse For <span className='text-dark'><b>Bicycle!</b></span></h1>
                    <p className='text-center'>We stored best bicycle in the world! Our bicycle is always different from others. we have best unique bicycle the world. We have unique colours unique styles and so on. Find your best bicycle warehouses here!</p>
                    <button type="button" class="btn btn-info mt-5">Stored</button>
                </div>
                <div className='col-md-6'>
                    <div>
                        <img className='img-fluid' src="https://html.design/demo/jetcycle/images/slider-img.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;