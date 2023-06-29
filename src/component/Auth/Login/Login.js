import React, { useContext, useRef } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import authContext from '../../../HRMSContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css'

function LoginPage(props) {
    const navigate = useNavigate();
    const { authenticated, setAuthenticated } = useContext(authContext);

    const userNameRef = useRef();
    const passwordRef = useRef();


    const handleLogin = () => {

        if (userNameRef.current.value === 'Administrator' && passwordRef.current.value === 'Administrator') {
            console.log("login....")
            setAuthenticated(true);
            console.log(authenticated);
            navigate("/");
        }
    }

    return (
        <>
            <MDBContainer style={{ position: 'relative', display: 'flex', flexDirection: 'column' }} fluid className=" vh-100 h-custom">

                <MDBRow>
                    <div className='py-4 px-4 bg-primary'>
                        <div className="text-white text-center fw-bold mb-3 mb-md-0">
                            Human Resource Management System
                        </div>
                    </div>
                </MDBRow>
                <MDBRow style={{ paddingRight: '30px', paddingTop: '51px' }}  >

                    <MDBCol col='10' md='6'>
                        <img src={`https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp`} className="img-fluid" alt="Login" />
                    </MDBCol>

                    <MDBCol col='4' md='6' className='login-box'>

                        <div className="d-flex  flex-row align-items-center justify-content-center">

                            <p className="lead fw-normal mb-0 me-3">Sign in with</p>

                            <MDBBtn floating size='md' tag='a' className='me-2'>
                                <MDBIcon fab icon='facebook-f' />
                            </MDBBtn>

                            <MDBBtn floating size='md' tag='a' className='me-2'>
                                <MDBIcon fab icon='twitter' />
                            </MDBBtn>

                            <MDBBtn floating size='md' tag='a' className='me-2'>
                                <MDBIcon fab icon='linkedin-in' />
                            </MDBBtn>

                        </div>

                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-3 mb-0">Or</p>
                        </div>

                        <MDBInput ref={userNameRef} wrapperClass='mb-4' label='Email address' id='email' type='email' size="lg" />

                        <MDBInput ref={passwordRef} wrapperClass='mb-4' label='Password' id='password' type='password' size="lg" />

                        <div className="d-flex justify-content-between mb-4">
                            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                            <a href="!#">Forgot password?</a>
                        </div>

                        <div className='text-center text-md-start mt-4 pt-2'>
                            <MDBBtn onClick={handleLogin} className="mb-0 px-5" size='lg'>Login</MDBBtn>
                        </div>

                    </MDBCol>

                </MDBRow>

                <MDBRow>

                    <div className="footer-custom d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

                        <div className="text-white mb-3 mb-md-0">
                            Copyright © 2020. All rights reserved.
                        </div>

                        <div>

                            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                                <MDBIcon fab icon='facebook-f' size="md" />
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                                <MDBIcon fab icon='twitter' size="md" />
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                                <MDBIcon fab icon='google' size="md" />
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                                <MDBIcon fab icon='linkedin-in' size="md" />
                            </MDBBtn>

                        </div>

                    </div>
                </MDBRow>
            </MDBContainer >

        </>
    );
}

export default LoginPage;