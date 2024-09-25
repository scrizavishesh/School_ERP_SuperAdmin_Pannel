import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`

  .breadcrumb-item::before {
    content: var(--bs-breadcrumb-divider, "");
  }

  .eventablerow{
    background-color: var(--tableGreyBackgroundColor) !important;
  }

  .oddModaltablerow{
    background-color: var(--tableGreyBackgroundColor) !important;
    border-bottom: 1.5px solid var(--darkGreenBorderColor);
  }

  .form-check-input{
    box-shadow: none ;
  }

  .formdltcheck:checked{
    background-color: #B50000;
    border-color: #B50000;
  }

  .formEditSpecFeatcheck:checked{
    background-color: #00A67E;
    border-color: #00A67E;
  }

  .modalHighborder{
    border-bottom: 2px solid var(--modalBorderColor);
  }

  .modalLightBorder{
    border-bottom: 1px solid var(--modalBorderColor);
  }

  .correvtSVG{
    position: relative;
    width: fit-content ;
    margin-left: 43% !important;
    margin-bottom: -16% !important;
    background-color: #2BB673;
    width: 73px;
    height: 73px;
    align-items: center;
  }

  .deleteSVG{
    position: relative;
    width: fit-content ;
    margin-left: 43% !important;
    margin-bottom: -18% !important;
    background-color: #fff;
  }
  
  .warningHeading{
    font-size: var(--font-size-20);
  }

  .warningText{
    font-size: var(--font-size-15);
    line-height: 22px;
    color: var(--greyInputTextColor) !important;
  }

  .textVerticalCenter{
    line-height: 22px;
  }
  
  .form-check-input{
    width: 18px;
    height: 18px;
  }

  .formcontrolinput{
    border-radius: 0px !important;
  }

  .contbtn{
    margin-left: 41% !important;
    margin-top: -20% !important;
  }

  .greydiv{
    background-color: #FBFBFB;
  }
  .for-margin-top{
    margin-top: -11px;
  }

`;

const AllSchools = () => {

  const [DeleteWarning, setDeleteWarning]= useState(true);
  const [EditWarning, setEditWarning]= useState(true);
  const [SpecialFeatureWarning, setSpecialFeatureWarning]= useState(true);
  const [UpdateSpecialFeatureWarning, setUpdateSpecialFeatureWarning]= useState(true);

  const DeleteBtnClicked = (value) => {
    setDeleteWarning(!DeleteWarning)
  }

  const EditBtnClicked = (value) => {
    setEditWarning(value)
  }

  const SpeFeatBtnClicked = (value) => {
    setSpecialFeatureWarning(value)
  }

  const UpdSpeFeaBtnClicked=(value)=>{
    setUpdateSpecialFeatureWarning(value)
  }

  return (
    <>
       <Container>
        <div className="container-fluid ps-4 pe-4 pt-2 pb-2">
          <div className="row pt-2">
            <div className="col-lg-7 col-md-8 col-sm-12 flex-grow-1">
                <nav className='breadcrumnav' aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="#" className='greyText text-decoration-none'><h2>Home &gt; </h2></Link></li>
                    <li className="breadcrumb-item active greenText" aria-current="page"><h2> Schools</h2></li>
                  </ol>
                </nav>
            </div>
            <div className="col-lg-5 col-md-8 col-sm-12">
              <div className="row">
                <div className="col-md-9 col-sm-6">
                  <form className="d-flex" role="search">
                    <input className="form-control formcontrolsearch" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn searchButtons text-white" type="submit"><h2>Search</h2></button>
                  </form>
                </div>
                <div className="col-md-3 col-sm-6 text-end ps-0">
                  <Link className="btn ps-0 pe-0 addButtons text-white" type="submit" to='/superAdminAddSchools'><h2 className='textVerticalCenter'>+ ADD Schools</h2></Link>
                </div>
              </div>
            </div>
          </div>

        <div className="row mb-3 for-margin-top"><h2>School List</h2></div>
        <div className="row ps-2 pe-2">
          <div className="overflow-scroll cardradius bg-white p-3">
            <table className="table align-middle">
            
              <thead>
              
                <tr>
                  <th><h2>#</h2></th>
                  <th><h2>School name</h2></th>
                  <th><h2>Address</h2></th>
                  <th><h2>Phone</h2></th>
                  <th><h2>Package <img src="./images/StatusArrow.svg" alt="" /></h2></th>
                  <th className='bolddText text-center'><h2>Spe. Features</h2></th>
                  <th><h2>Status <img src="./images/StatusArrow.svg" alt="" /></h2></th>
                  <th><h2>Action</h2></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className='greyText'><h3>1</h3></th>
                  <td className='greyText'><h3>Green Land Public School</h3></td>
                  <td className='greyText'><h3>524, S.v.p Road, Opera...</h3></td>
                  <td className='greyText'><h3>+91 9999990000</h3></td>
                  <td className='greyText'><h3>Silver</h3></td>
                  <td className='blueText text-center'><h3>View Features</h3></td>
                  <td className='activeText'><h3>Active</h3></td>
                  <td>
                    <div className="dropdown dropdownbtn">
                      <button className="btn btn-sm actionButtons dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span>Action</span>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <button className="dropdown-item greyText" type="button" data-bs-toggle="offcanvas" data-bs-target="#Edit_staticBackdrop" aria-controls="Edit_staticBackdrop">
                            Edit
                          </button>
                        </li>
                        <li>
                          <button className="dropdown-item greyText" type="button" data-bs-toggle="offcanvas" data-bs-target="#SpeFeature_staticBackdrop" aria-controls="SpeFeature_staticBackdrop">
                            Spe. Features
                          </button>
                        </li>
                        <li>
                          {/* <button className="dropdown-item" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Delete</button> */}
                          <button className="dropdown-item greyText" type="button" data-bs-toggle="offcanvas" data-bs-target="#Delete_staticBackdrop" aria-controls="Delete_staticBackdrop">
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className='greyText eventablerow'><h3>2</h3></th>
                  <td className='greyText eventablerow'><h3>Green Land Public School</h3></td>
                  <td className='greyText eventablerow'><h3>524, S.v.p Road, Opera...</h3></td>
                  <td className='greyText eventablerow'><h3>+91 9999990000</h3></td>
                  <td className='greyText eventablerow'><h3>Silver</h3></td>
                  <td className='blueText text-center eventablerow'><h3>---</h3></td>
                  <td className='activeText eventablerow'><h3>Active</h3></td>
                  <td className='eventablerow'>
                    <div className="dropdown">
                      <button className="btn btn-sm actionButtons dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span>Action</span>
                      </button>
                      <ul className="dropdown-menu">
                        
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className='greyText'><h3>3</h3></th>
                  <td className='greyText'><h3>Green Land Public School</h3></td>
                  <td className='greyText'><h3>524, S.v.p Road, Opera...</h3></td>
                  <td className='greyText'><h3>+91 9999990000</h3></td>
                  <td className='greyText'><h3>Silver</h3></td>
                  <td className='blueText text-center'><h3>---</h3></td>
                  <td className='activeText'><h3>Active</h3></td>
                  <td>
                    <div className="dropdown">
                      <button className="btn btn-sm actionButtons dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span>Action</span>
                      </button>
                      <ul className="dropdown-menu">
                        
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className='greyText eventablerow'><h3>4</h3></th>
                  <td className='greyText eventablerow'><h3>Green Land Public School</h3></td>
                  <td className='greyText eventablerow'><h3>524, S.v.p Road, Opera...</h3></td>
                  <td className='greyText eventablerow'><h3>+91 9999990000</h3></td>
                  <td className='greyText eventablerow'><h3>Silver</h3></td>
                  <td className='blueText text-center eventablerow'><h3>View Features</h3></td>
                  <td className='activeText eventablerow'><h3>Active</h3></td>
                  <td className='eventablerow'>
                    <div className="dropdown">
                      <button className="btn btn-sm actionButtons dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span>Action</span>
                      </button>
                      <ul className="dropdown-menu">
                        
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className='greyText'><h3>5</h3></th>
                  <td className='greyText'><h3>Green Land Public School</h3></td>
                  <td className='greyText'><h3>524, S.v.p Road, Opera...</h3></td>
                  <td className='greyText'><h3>+91 9999990000</h3></td>
                  <td className='greyText'><h3>Silver</h3></td>
                  <td className='blueText text-center'><h3>View Features</h3></td>
                  <td className='activeText'><h3>Active</h3></td>
                  <td>
                    <div className="dropdown">
                      <button className="btn btn-sm actionButtons dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span>Action</span>
                      </button>
                      <ul className="dropdown-menu">
                        
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className='greyText eventablerow'><h3>6</h3></th>
                  <td className='greyText eventablerow'><h3>Green Land Public School</h3></td>
                  <td className='greyText eventablerow'><h3>524, S.v.p Road, Opera...</h3></td>
                  <td className='greyText eventablerow'><h3>+91 9999990000</h3></td>
                  <td className='greyText eventablerow'><h3>Silver</h3></td>
                  <td className='blueText text-center eventablerow'><h3>---</h3></td>
                  <td className='deactiveText eventablerow'><h3>Deactive</h3></td>
                  <td className='eventablerow'>
                    <div className="dropdown">
                      <button className="btn btn-sm actionButtons dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span>Action</span>
                      </button>
                      <ul className="dropdown-menu">
                        
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className='greyText'><h3>7</h3></th>
                  <td className='greyText'><h3>Green Land Public School</h3></td>
                  <td className='greyText'><h3>524, S.v.p Road, Opera...</h3></td>
                  <td className='greyText'><h3>+91 9999990000</h3></td>
                  <td className='greyText'><h3>Silver</h3></td>
                  <td className='blueText text-center'><h3>---</h3></td>
                  <td className='activeText'><h3>Active</h3></td>
                  <td>
                    <div className="dropdown">
                      <button className="btn btn-sm actionButtons dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span>Action</span>
                      </button>
                      <ul className="dropdown-menu">
                        
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className='greyText eventablerow'><h3>8</h3></th>
                  <td className='greyText eventablerow'><h3>Green Land Public School</h3></td>
                  <td className='greyText eventablerow'><h3>524, S.v.p Road, Opera...</h3></td>
                  <td className='greyText eventablerow'><h3>+91 9999990000</h3></td>
                  <td className='greyText eventablerow'><h3>Silver</h3></td>
                  <td className='blueText text-center eventablerow'><h3>---</h3></td>
                  <td className='activeText eventablerow'><h3>Active</h3></td>
                  <td className='eventablerow'>
                    <div className="dropdown">
                      <button className="btn btn-sm actionButtons dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span>Action</span>
                      </button>
                      <ul className="dropdown-menu">
                        
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className='greyText'><h3>9</h3></th>
                  <td className='greyText'><h3>Green Land Public School</h3></td>
                  <td className='greyText'><h3>524, S.v.p Road, Opera...</h3></td>
                  <td className='greyText'><h3>+91 9999990000</h3></td>
                  <td className='greyText'><h3>Silver</h3></td>
                  <td className='blueText text-center'><h3>View Features</h3></td>
                  <td className='activeText'><h3>Active</h3></td>
                  <td>
                    <div className="dropdown">
                      <button className="btn btn-sm actionButtons dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span>Action</span>
                      </button>
                      <ul className="dropdown-menu">
                        
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className='greyText eventablerow'><h3>10</h3></th>
                  <td className='greyText eventablerow'><h3>Green Land Public School</h3></td>
                  <td className='greyText eventablerow'><h3>524, S.v.p Road, Opera...</h3></td>
                  <td className='greyText eventablerow'><h3>+91 9999990000</h3></td>
                  <td className='greyText eventablerow'><h3>Silver</h3></td>
                  <td className='blueText text-center eventablerow'><h3>---</h3></td>
                  <td className='activeText eventablerow'><h3>Active</h3></td>
                  <td className='eventablerow'>
                    <div className="dropdown">
                      <button className="btn btn-sm actionButtons dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span>Action</span>
                      </button>
                      <ul className="dropdown-menu">
                        
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
        
          </div>
        </div>



  {/* ***********************************************************************************************************************************************************************************/}
  {/* ***********************************************************************************************************************************************************************************/}



          <div className="offcanvas offcanvas-end p-2" data-bs-backdrop="static" tabIndex="-1" id="Edit_staticBackdrop" aria-labelledby="staticBackdropLabel">
            <div className="offcanvas-header border-bottom border-2 p-1">
              <Link type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16">
                  <path fill="#008479" fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                </svg>
              </Link>
              <h2 className="offcanvas-title" id="staticBackdropLabel">School Edit</h2>
            </div>
            <div className="offcanvas-body p-0">
              <div>
                {EditWarning
                  ? 
                    <>
                      <div>
                        <p className='modalLightBorder orangeText p-2'>Green Land Public School</p>
                        <div className="p-3">
                          <form>
                            <div className="mb-3">
                              <label htmlFor="exampleInputAdd1" className="form-label greyText">Address</label>
                              <textarea type="address" className="form-control p-2 formcontrolinput" id="exampleInputEmail1" aria-describedby="AddHelp" rows={2} defaultValue='524, S.v.p Road Opera House, Mumbai'></textarea>
                            </div>
                            <div className="mb-3">
                              <label htmlFor="exampleInputphone1" className="form-label greyText">Phone Number</label>
                              <input type="tel" className="form-control p-2 formcontrolinput" id="exampleInputEmail1" aria-describedby="phoneHelp" defaultValue='+91 9999990000'/>
                            </div>
                            <div className="mb-3">
                              <label htmlFor="exampleInputEmail1" className="form-label greyText">Package</label>
                              <select className="form-select p-2 formcontrolinput" aria-label="Default select example">
                                <option defaultValue>Silver</option>
                                <option value="1">Gold</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                            <div className="mb-3">
                              <label htmlFor="exampleInputEmail1" className="form-label greyText">Status</label>
                              <select className="form-select p-2 formcontrolinput" aria-label="Default select example">
                                <option defaultValue>Active</option>
                                <option value="1">Un-Active</option>
                              </select>
                            </div>
                          </form>
                          <p className='text-center p-3'>
                            <button className='btn updateButtons text-white' onClick={(e) => EditBtnClicked(false)}>Update</button>
                            <button className='btn cancelButtons ms-3'>Cancel</button>
                          </p>
                        </div>
                      </div>
                    </>
                  :
                    <>
                      <div>
                        <p className='modalLightBorder p-2 mb-0'>School List</p>
                        <div className="mt-3  ">
                          <div className='correvtSVG p-3 pt-4 rounded-circle'><img src="./images/Correct.svg" alt="" /></div>
                          <div className="updatetext border m-4 border-2  ms-5 greydiv rounded-3 text-center greyText p-5">
                            <p className='warningHeading'>Successful Updated</p>
                            <p className='greyText warningText pt-2'>Your Changes has been<br />Successfully Saved</p>
                          </div>
                            <button className='btn contbtn continueButtons text-white'>Continue</button>
                        </div>
                      </div>
                    </>
                }
              </div>
          </div>
          </div>



  {/* ***********************************************************************************************************************************************************************************/}
  {/* ***********************************************************************************************************************************************************************************/}



          <div className="offcanvas offcanvas-end p-2" data-bs-backdrop="static" tabIndex="-1" id="SpeFeature_staticBackdrop" aria-labelledby="staticBackdropLabel">
            <div className="offcanvas-header modalHighborder p-1">
              <Link type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16">
                  <path fill="#008479" fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                </svg>
              </Link>
              <h2 className="offcanvas-title" id="staticBackdropLabel">Special Features Details</h2>
            </div>
            <div className="offcanvas-body p-0">
            <div>
              {SpecialFeatureWarning
                ? 
                
                  <>
                    {UpdateSpecialFeatureWarning
                      ?
                        <>
                          <p className='modalLightBorder p-2 mb-0'>Special Features</p>
                          <div className="ps-3 pe-3">
                            <table className="table table-striped mt-2">
                              <thead>
                                <tr height='40px'>
                                  <th><h2>Details</h2></th>
                                  <td className='text-end'><Link className='greenText text-decoration-none' onClick={(e) => UpdSpeFeaBtnClicked(false)}><h2>Add Features</h2></Link></td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr height='40px'>
                                  <td className='oddModaltablerow'><h3 className='greyText ps-2'>Online live class</h3></td>
                                  <td className='text-center oddModaltablerow'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48">
                                      <g fill="#00A67E" fillRule="evenodd" clipRule="evenodd">
                                        <path d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18m0 2c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20" />
                                        <path d="M34.67 16.259a1 1 0 0 1 .072 1.412L21.386 32.432l-8.076-7.709a1 1 0 0 1 1.38-1.446l6.59 6.29L33.259 16.33a1 1 0 0 1 1.413-.07" />
                                      </g>
                                    </svg>
                                  </td>
                                </tr>
                                <tr height='40px'>
                                  <td><h3 className='greyText ps-2'>Live problem discussion</h3></td>
                                  <td className='text-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48">
                                      <g fill="#00A67E" fillRule="evenodd" clipRule="evenodd">
                                        <path d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18m0 2c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20" />
                                        <path d="M34.67 16.259a1 1 0 0 1 .072 1.412L21.386 32.432l-8.076-7.709a1 1 0 0 1 1.38-1.446l6.59 6.29L33.259 16.33a1 1 0 0 1 1.413-.07" />
                                      </g>
                                    </svg>
                                  </td>
                                </tr>
                                <tr height='40px'>
                                  <td className='oddModaltablerow'><h3 className='greyText ps-2'>HR Management</h3></td>
                                  <td className='text-center oddModaltablerow'><h3>--</h3></td>
                                </tr>
                                <tr height='40px'>
                                  <td><h3 className='greyText ps-2'>Payment Gateways</h3></td>
                                  <td className='text-center'><h3>--</h3></td>
                                </tr>
                                <tr height='40px'>
                                  <td className='oddModaltablerow'><h3 className='greyText ps-2'>Inventory Manager</h3></td>
                                  <td className='text-center oddModaltablerow'><h3>--</h3></td>
                                </tr>
                                <tr height='40px'>
                                  <td><h3 className='greyText ps-2'>Online Course</h3></td>
                                  <td className='text-center'><h3>--</h3></td>
                                </tr>
                                <tr height='40px'>
                                  <td className='oddModaltablerow'><h3 className='greyText ps-2'>Transport</h3></td>
                                  <td className='text-center oddModaltablerow'><h3>--</h3></td>
                                </tr>
                                <tr height='40px'>
                                  <td><h3 className='greyText ps-2'>Alumni</h3></td>
                                  <td className='text-center'><h3>--</h3></td>
                                </tr>
                                <tr height='40px'>
                                  <td className='oddModaltablerow'><h3 className='greyText ps-2'>Sms Center</h3></td>
                                  <td className='text-center oddModaltablerow'><h3>--</h3></td>
                                </tr>
                                <tr height='40px'>
                                  <td><h3 className='greyText ps-2'>Assignments addon</h3></td>
                                  <td className='text-center'><h3>--</h3></td>
                                </tr>
                              </tbody>
                            </table>
                            <p className='text-center p-3'>
                              <button className='btn cancelButtons ms-3'>Back</button>
                            </p>
                          </div>
                        </>
                      :
                        <>
                          <p className='modalLightBorder p-2 mb-0'>Special Features</p>
                          <div className="ps-3 pe-3">
                            <table className="table table-striped mt-2">
                              <thead>
                                <tr height='40px'>
                                  <th><h2>Details</h2></th>
                                  <td className='greenText'></td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr height='40px'>
                                  <td><h3 className='greyText ps-2'>Online live class</h3></td>
                                  <td className='text-end'><h3 className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked" checked/></h3></td>
                                </tr>
                                <tr height='40px'>
                                  <td><h3 className='greyText ps-2'>Live problem discussion</h3></td>
                                  <td className='text-end'><h3 className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked" checked/></h3></td>
                                </tr>
                                <tr height='40px'>
                                  <td><h3 className='greyText ps-2'>HR Management</h3></td>
                                  <td className='text-end'><h3 className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked"/></h3></td>
                                </tr>
                                <tr height='40px'>
                                  <td><h3 className='greyText ps-2'>Payment Gateways</h3></td>
                                  <td className='text-end'><h3 className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked"/></h3></td>
                                </tr>
                                <tr height='40px'>
                                  <td><h3 className='greyText ps-2'>Inventory Manager</h3></td>
                                  <td className='text-end'><h3 className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked"/></h3></td>
                                </tr>
                                <tr height='40px'>
                                  <td><h3 className='greyText ps-2'>Online Course</h3></td>
                                  <td className='text-end'><h3 className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked"/></h3></td>
                                </tr>
                                <tr height='40px'>
                                  <td><h3 className='greyText ps-2'>Transport</h3></td>
                                  <td className='text-end'><h3 className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked"/></h3></td>
                                </tr>
                                <tr height='40px'>
                                  <td><h3 className='greyText ps-2'>Alumni</h3></td>
                                  <td className='text-end'><h3 className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked"/></h3></td>
                                </tr>
                                <tr height='40px'>
                                  <td><h3 className='greyText ps-2'>Sms Center</h3></td>
                                  <td className='text-end'><h3 className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked"/></h3></td>
                                </tr>
                                <tr height='40px'>
                                  <td><h3 className='greyText ps-2'>Assignments addon</h3></td>
                                  <td className='text-end'><h3 className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked"/></h3></td>
                                </tr>
                              </tbody>
                            </table>
                            <p className='text-center p-3'>
                              <button className='btn updateButtons text-white' onClick={(e) => SpeFeatBtnClicked(false)}>Update</button>
                              <button className='btn cancelButtons ms-3'>Cancel</button>
                            </p>
                          </div>
                        </>
                    }
                  </>

                :
                  <>
                    <div>
                      <p className='modalLightBorder p-2 mb-0'>School List</p>
                      <div className="mt-3  ">
                        <div className='correvtSVG p-3 pt-4 rounded-circle'><img src="./images/Correct.svg" alt="" /></div>
                        <div className="updatetext border m-4 border-2  ms-5 greydiv rounded-3 text-center greyText p-5">
                          <p className='warningHeading'>Successful Updated</p>
                          <p className='greyText warningText pt-2'>Your Changes has been<br />Successfully Saved</p>
                        </div>
                          <button className='btn contbtn continueButtons text-white'>Continue</button>
                      </div>
                    </div>
                  </>
              
              }
              
            </div>
          </div>
          </div>



  {/* ***********************************************************************************************************************************************************************************/}
  {/* ***********************************************************************************************************************************************************************************/}



          
          <div className="offcanvas offcanvas-end p-2" data-bs-backdrop="static" tabIndex="-1" id="Delete_staticBackdrop" aria-labelledby="staticBackdropLabel">
            <div className="offcanvas-header ps-0 modalHighborder p-1">
              <Link type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16">
                  <path fill="#B50000" fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                </svg>
              </Link>
              <span className="offcanvas-title" id="staticBackdropLabel">School List</span>
            </div>
            <div className="offcanvas-body p-0">
              <div>
              {DeleteWarning
                ?
                  <>
                    <div className=''>
                      <p className='modalLightBorder p-2'>School List</p>
                      <p className='text-center p-3'> <img src="./images/errorI.svg" className='img-fluid' alt="" /></p>
                      <p className='text-center warningHeading'>Are you Sure?</p>
                      <p className='text-center greyText warningText pt-2'>This Action will be permanently delete<br/>the Profile Data</p>
                      <p className='text-center warningText p-2'><input className="form-check-input formdltcheck" type="checkbox" value="" id="flexCheckChecked" />I Agree to delete the Profile Data</p>
                      <p className='text-center p-3'>
                        <Link className='btn deleteButtons text-white' onClick={(e) => DeleteBtnClicked()}>Delete</Link>
                        <button className='btn dltcancelButtons ms-3'>Cancel</button>
                      </p>
                    </div>
                  </>
                :
                  <>
                    <div >
                      <p className='border-bottom p-3'>School List</p>
                      <div className="">
                        <div className='deleteSVG border border-2 p-4 rounded-circle'><img src="./images/deleteicon.svg" alt="" /></div>
                        <div className="deletetext border m-4 border-2 greydiv ms-5 rounded-3 text-center greyText p-5">
                            <p className='warningHeading'>Successful Deleted</p>
                            <p className='greyText warningText pt-2'>Your data has been<br/>Successfully Delete</p>
                        </div>
                        <button className='btn contbtn continueButtons text-white'>Continue</button>
                      </div>
                    </div>
                  </>
              }
              </div>
            </div>
          </div>



  {/* ***********************************************************************************************************************************************************************************/}
  {/* ***********************************************************************************************************************************************************************************/}




              

        </div>
      </Container>
    </>
  )
}

export default AllSchools