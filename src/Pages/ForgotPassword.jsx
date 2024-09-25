import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Container= styled.div`
    height: 100vh;
    .btnsubmitOwn{
        background-color: #008479 !important;
    }

    .imagearea{
        background: linear-gradient(135deg, #D8E6FF, white);
    }

    .formarea{
        background:linear-gradient(#F0F8F7, white);
    }

    .formcontrolinput{
        border: 1px solid #E4E7EB;
        border-radius: 6px;
        font-size: 16px;
    }

    .formcontrolinput::placeholder{
        color: #ADADBD;
        font-size: 14px;
    }

    .text-grey{
        color: #8F8F8F;
    }


`;


const Span14Font = styled.span`
    font-size: 14px;
    font-family: Noto Sans;
`;



const ForgotPassword = () => {
    
    return (
        <>
            <Container>
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-md-6 col-sm-12 p-5 imagearea">
                            <img src="./images/pana.svg" alt="" className='img-fluid m-5'/>
                        </div>
                        <div className="col-md-6 col-sm-12 p-5 formarea">
                            <div className="row text-center pt-5 mt-5">
                                <p><img src="./images/Scrizalogo.svg" alt="" className='img-fluid' /></p>
                            </div>
                            <div className="row p-5 ms-3 me-3">
                                <Span14Font>
                                    <p className='m-0'>Forgot Your Password?</p>
                                    <p className='text-grey'>Enter your email to reset it?</p>
                                    <form>
                                        <div className="mb-3">
                                            <label for="exampleInputEmail1" className="form-label">Email</label>
                                            <input type="email" className="form-control formcontrolinput" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='&#xF0E0; Your Email Address'/>
                                        </div>
                                        <div className="d-grid gap-2 col-12 mx-auto">
                                            <Link type="submit" className="btn btnsubmitOwn text-white" to='/dashboard'>Confirm</Link>
                                        </div>
                                        <div className="d-grid gap-2 col-12 mx-auto">
                                            <Link type="submit" className="m-2 text-center text-black text-decoration-none" to='/setNewPassPage'>
                                                <svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16">
                                                    <path fill="#008479" fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                                                </svg>
                                                 Return to the Login Page</Link>
                                        </div>
                                    </form>
                                </Span14Font>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
      )
}

export default ForgotPassword