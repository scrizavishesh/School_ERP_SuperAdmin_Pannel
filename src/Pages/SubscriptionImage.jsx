import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';




// ## style css area start ####  

const Container = styled.div`
  .breadcrum-li a{
  text-decoration: none;
  margin-top: 5px;
  color: #008479;
  }
  .main-body{
    background-color: #F2F3F6; 
  }
.main-content-conatainer{
    background-color: #fff;
    margin: 10px;
    height: 88vh;
    border-radius: 8px;

}
.margin-minus22{
    margin-top: -18px;
    font-size: 16px;
}
.my-button11{
    display: flex;
    justify-content: center;
    gap: 4px;
    margin-top: 30px;
}

.my-grey{
  color: #ADADBD;
}
.remove-shadow:focus{
    box-shadow: none !important;
    border: none !important;
}

.my-div-class p{
  border: 1px solid #ADADBD;
  padding: 10px;
  border-radius: 4px;
  background-color: #F2F3F6;
  color: #ADADBD;
  border: 1px solid #F2F3F6;
}
.my-div-class span a{
    text-decoration: none;
}

.font-red{
    color: #C90303;
}
.font-green{
    color: #00A67E;
}
/* ########## media query ###########  */
 @media only screen and (max-width: 870px) {
  .for-media-query{
    display: flex;
    flex-direction: column;
  }
}
 @media only screen and (max-width: 605px) {
  .for-media-query-22{
    flex: 0 0 auto !important;
    width: 53% !important;
  }
}

@media only screen and (max-width: 605px) {
    .for-dislay-direction{
        display: flex;
        flex-direction: column;
        margin-bottom: 5px;
    }
}
@media only screen and (max-width: 405px) {
   .image-container img{
    width: 200px;
    height: 200px;
   }

}
@media only screen and (max-width: 425px) {
    .for-media-query-22{
    flex: 0 0 auto !important;
    width: 75% !important;
  }

}

`;
// ## style css area end ####  

const Subscriptionimage = () => {
    return (
        <Container>
          <div className="container-fluid main-body p-3">
     {/* <div className="row">

        <div className="col-4">
        <nav style={{ '--bs-breadcrumb-divider': "'>'" }}aria-label="breadcrumb">
             <ol class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page">Home</li>
                 <li class="breadcrumb-item breadcrum-li" ><Link href="#">Subscriptions</Link></li>
             </ol>
         </nav>
        </div>

        <div className="col-8 ps-5">
        <div className="row">
            <div className="col-6">

            <div class=" d-flex  me-2">
          
                 <input type="password" class="form-control form-control-sm " style={{fontSize:'15px'}} id="inputPassword2" placeholder="01/01/2024 - 02/10/2024" />
           
                    <button type="submit" class="btn btn-primary mb-3 heading-14 remove-shadow" style={{backgroundColor:'#008479', border:'1px solid #008479', fontSize:'12.5px'}}>
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginTop:'-2px'}}>
                           <path d="M4.57143 7.42857C4.57143 7.27702 4.63163 7.13167 4.7388 7.02451C4.84596 6.91735 4.9913 6.85714 5.14286 6.85714H8.57143C8.72298 6.85714 8.86833 6.91735 8.97549 7.02451C9.08265 7.13167 9.14286 7.27702 9.14286 7.42857C9.14286 7.58012 9.08265 7.72547 8.97549 7.83263C8.86833 7.9398 8.72298 8 8.57143 8H5.14286C4.9913 8 4.84596 7.9398 4.7388 7.83263C4.63163 7.72547 4.57143 7.58012 4.57143 7.42857ZM2.28571 4C2.28571 3.84845 2.34592 3.7031 2.45308 3.59594C2.56025 3.48878 2.70559 3.42857 2.85714 3.42857H10.8571C11.0087 3.42857 11.154 3.48878 11.2612 3.59594C11.3684 3.7031 11.4286 3.84845 11.4286 4C11.4286 4.15155 11.3684 4.2969 11.2612 4.40406C11.154 4.51122 11.0087 4.57143 10.8571 4.57143H2.85714C2.70559 4.57143 2.56025 4.51122 2.45308 4.40406C2.34592 4.2969 2.28571 4.15155 2.28571 4ZM0 0.571429C0 0.419876 0.060204 0.274531 0.167368 0.167368C0.274531 0.060204 0.419876 0 0.571429 0H13.1429C13.2944 0 13.4398 0.060204 13.5469 0.167368C13.6541 0.274531 13.7143 0.419876 13.7143 0.571429C13.7143 0.722981 13.6541 0.868326 13.5469 0.975489C13.4398 1.08265 13.2944 1.14286 13.1429 1.14286H0.571429C0.419876 1.14286 0.274531 1.08265 0.167368 0.975489C0.060204 0.868326 0 0.722981 0 0.571429Z" fill="white"/>
                        </svg>
                            Filter
                     </button>
                </div>
       
            </div>
            <div className="col-6">
            <div className='me-2'>
             <div class="input-group mb-3 ">
                 <input type="text" class="form-control " style={{height:'34px'}} placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                 <span class="input-group-text " style={{background:'#008479', color:'#fff', cursor:'pointer',height:"34px",fontSize:'14px'}} id="basic-addon2">Search</span>
             </div>
             </div>
            </div>
        </div>
     
        </div>
        
     </div> */}

         <div className='d-flex justify-content-between for-dislay-direction'>
         <div className="breadCrum ms-2">
         <nav className=' heading-14' style={{ '--bs-breadcrumb-divider': "'>'" }}aria-label="breadcrumb">
             <ol class="breadcrumb">
                    <li class="breadcrumb-item active font-color" aria-current="page">Home</li>
                 <li class="breadcrumb-item breadcrum-li" ><Link href="#">Subscriptions</Link></li>
             </ol>
         </nav>
         </div>
     
         <div className='d-flex g-1 for-media-query float-right'>
         <form class="row  me-2">
             <div class="col-9 for-media-query-22">
                 <input type="password" class="form-control form-control-sm heading-16 input-border-color form-focus" style={{ width:'283px'}} id="inputPassword2" placeholder="01/01/2024 - 02/10/2024" />
             </div>
             <div class="col-3 p-0 ps-1" >
                 <button type="submit" class="btn btn-primary mb-3 heading-1 remove-shadow heading-14 button-bg-color" style={{ border:'1px solid #008479', lineHeight:'1.3'}}>
                 <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginTop:'-2px'}}>
                        <path d="M4.57143 7.42857C4.57143 7.27702 4.63163 7.13167 4.7388 7.02451C4.84596 6.91735 4.9913 6.85714 5.14286 6.85714H8.57143C8.72298 6.85714 8.86833 6.91735 8.97549 7.02451C9.08265 7.13167 9.14286 7.27702 9.14286 7.42857C9.14286 7.58012 9.08265 7.72547 8.97549 7.83263C8.86833 7.9398 8.72298 8 8.57143 8H5.14286C4.9913 8 4.84596 7.9398 4.7388 7.83263C4.63163 7.72547 4.57143 7.58012 4.57143 7.42857ZM2.28571 4C2.28571 3.84845 2.34592 3.7031 2.45308 3.59594C2.56025 3.48878 2.70559 3.42857 2.85714 3.42857H10.8571C11.0087 3.42857 11.154 3.48878 11.2612 3.59594C11.3684 3.7031 11.4286 3.84845 11.4286 4C11.4286 4.15155 11.3684 4.2969 11.2612 4.40406C11.154 4.51122 11.0087 4.57143 10.8571 4.57143H2.85714C2.70559 4.57143 2.56025 4.51122 2.45308 4.40406C2.34592 4.2969 2.28571 4.15155 2.28571 4ZM0 0.571429C0 0.419876 0.060204 0.274531 0.167368 0.167368C0.274531 0.060204 0.419876 0 0.571429 0H13.1429C13.2944 0 13.4398 0.060204 13.5469 0.167368C13.6541 0.274531 13.7143 0.419876 13.7143 0.571429C13.7143 0.722981 13.6541 0.868326 13.5469 0.975489C13.4398 1.08265 13.2944 1.14286 13.1429 1.14286H0.571429C0.419876 1.14286 0.274531 1.08265 0.167368 0.975489C0.060204 0.868326 0 0.722981 0 0.571429Z" fill="white"/>
                </svg> &nbsp;
                    Filter</button>
             </div>
        </form>
         <div className='me-2'>
             <div class="input-group mb-3 ">
                 <input type="text" class="form-control input-border-color " style={{height:'34px'}} placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                 <span class="input-group-text button-bg-color button-color headnig-14 " style={{ cursor:'pointer',height:"34px",fontSize:'14px'}} id="basic-addon2">Search</span>
             </div>
         </div>
         </div>
        
         </div>

         <h5 className='ms-2 margin-minus22 text-color-000 heading-16'>Subscriptions Report</h5>
     
         <div className="main-content-conatainer pt-1 ">
                 {/* ###### copy content till here for all component ######  */}
         <div className="d-flex justify-content-center ">
            <div className="image-container mt-5">
            <img src="./images/Group 36.svg" alt="" />

            </div>
         </div>
             </div>
                      
         </div>
        </Container>
       )
}

export default Subscriptionimage
