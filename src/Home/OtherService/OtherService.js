import React from 'react';

const OtherService = () => {
    return (
        <div className='container mt-5 mb-5'>
            <h1 className='text-center text-info mb-5'>Others <span className='text-dark'>Services</span></h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img className='img-fluid rounded-circle ms-5' width={250} src="https://www.kindpng.com/picc/m/182-1828684_van-truck-transport-vehicle-comments-shipping-icon-png.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Land Transport</h3>
                            <p class="card-text">Smooth transport of goods is a good basis for a solid business performance. Our portfolio ranges from a comprehensive parcel service and Europe-wide general cargo solutions to challenging partial and full loads. This gives you major advantages for the development and daily coverage of the European markets.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img className='img-fluid rounded-circle ms-5' width={250} src="https://www.kindpng.com/picc/m/432-4324277_free-shipping-package-icon-png-transparent-png.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Packaging and Store</h3>
                            <p class="card-text">We are specialized in packaging machine and packaging material industries such as impulse sealer ,
                                vacuum packing machine, shrink packing machine and fully automatic processing line system etc..</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img className='img-fluid rounded-circle ms-5' width={250} src="https://png.pngitem.com/pimgs/s/184-1849803_transparent-airport-icon-png-plane-icon-black-and.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Air Freight</h3>
                            <p class="card-text">We combine our expertise and technology to manage smaller shipments more efficiently. Applying sophisticated analytics improves our means to save time and costs by looking at the shippers moving along similar lanes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherService;