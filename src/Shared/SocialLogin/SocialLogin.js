import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (user) {
        navigate('/')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <div className='p-3 mb-1'>or</div>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>

            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto  mb-1'>
                    <img className='ps-5' style={{ height: '30px' }} src="https://clipart.info/images/ccovers/1559064732Google-Blue-Logo-G-Letter.png" alt="" />
                    <span className='ps-2'>Google SignIn</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;