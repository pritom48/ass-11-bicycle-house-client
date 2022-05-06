import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';

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
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input ref={nameRef} type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-info">SignUp</button>
                <p>Already SignUp? <Link className='text' to='/login'>Login</Link></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;