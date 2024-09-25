import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { addNewSchoolApi, getAllPlanApi } from '../Utils/Apis';

const Container = styled.div`
  height: 92vh;
  .breadcrumb-item::before {
    content: var(--bs-breadcrumb-divider, "");
  }

  .headingbg{
    background-color: var(--headingBackgroundColor);
    border-radius: 5px;
  }

  .card{
    border: none;
  }

  .form-control, .form-control::placeholder, .form-select{
    font-size: var(--font-size-14) !important;
    color: var(--greyInputTextColor);
    
  }

  .form-control, .form-select{
    background-color: #fff !important;
    box-shadow: none !important;
    border-color: var(--greyInputborderColor);
  }

  .form-control:focus, .form-select:focus{
    box-shadow: none !important;
    border-color: var(--greyInputborderColor);
  }

  .formcontrolFile{
    color: Black;
  }

`;



const AddFeature = () => {

  return (
    <>
      <Container>
        <div className="container-fluid ps-3 pe-3 pt-2 pb-2">
          <div className="row pt-3">
            <div class="col-md-9 col-sm-12">
              <nav className='breadcrumnav' aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="#" className='greyText text-decoration-none'><h2>Home &gt; </h2></Link></li>
                  <li className="breadcrumb-item active greenText" aria-current="page"><h2> Add Feature</h2></li>
                </ol>
              </nav>
            </div>
            <div class="col-md-3 col-sm-12">
              <form className="d-flex" role="search">
                <input className="form-control formcontrolsearch" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn searchButtons text-white" type="submit"><h2>Search</h2></button>
              </form>
            </div>
          </div>

          <h2>Add Feature</h2>
          <div className="row mb-3"></div>
            <div className='cardradius bg-white p-3'>
              <form>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <label htmlFor="BundleName" className="form-label greyText">Addon</label>
                    <select className='form-select' aria-label="Default select example">
                      <option >HR Management</option>
                      <option >------</option>
                      <option >------</option>
                    </select>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <label htmlFor="BundleName" className="form-label greyText">Permission Name</label>
                    <input type="text" className="form-control p-2 formcontrolinput" id="BundleName" placeholder='Enter Permission Name'/>
                  </div>
                </div>
                <p className='text-center p-3'>
                  <button className='btn addButtons text-white'>Add Addon</button>
                  <button className='btn cancelButtons ms-3'>Cancel</button>
                </p>
              </form>
            </div>
        </div>
      </Container>
    </>
  )
}

export default AddFeature