import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')


    if (user) {
        navigate('/home')
    }

    const handleSignUpSubmit = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;


        createUserWithEmailAndPassword(email, password)
    }


    return (
        <div className='container w-50 mt-5 mb-5'>
            <h2 className='text-center text-info'>Please <span className='text-dark'>SignUp!!</span></h2>
            <form onSubmit={handleSignUpSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input ref={nameRef} type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input ref={emailRef} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input ref={passwordRef} type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-primary">SignUp</button>
                <p>Already SignUp? <Link className='text' to='/login'>Login</Link></p>
            </form>
        </div>
    );
};

export default SignUp;