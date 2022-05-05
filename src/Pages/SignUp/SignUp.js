import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='container w-50 mt-5 mb-5'>
            <h2 className='text-center text-info'>Please <span className='text-dark'>SignUp!!</span></h2>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-primary">SignUp</button>
                <p>Already SignUp? <Link to='/login'>Login</Link></p>
            </form>
        </div>
    );
};

export default SignUp;