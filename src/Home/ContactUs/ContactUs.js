import React from 'react';

const ContactUs = () => {
    return (
        <div className='container mt-5 mb-5'>
            <h1 className='text-center text-info'>Get In <span className='text-dark'>Touch</span></h1>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Short Massage</label>
                    <textarea type="text" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;