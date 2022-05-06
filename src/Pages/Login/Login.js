import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';


const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const emailRef = useRef('')
    const passwordRef = useRef('')

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/')
    }


    const handleloginSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
    }




    return (
        <div className='container w-50 mt-5 mb-5'>
            <h2 className='text-center text-info'>Please <span className='text-dark'>Login !!</span></h2>
            <form onSubmit={handleloginSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-info">LogIn</button>
                <p>New to Bicycle House?   <Link to='/signup'>Signup</Link></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;