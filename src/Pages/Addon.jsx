import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import  { SpecialFeaGetApi } from '../Utils/Apis'
import  { SpecialFeaDeleteApi } from '../Utils/Apis'

const ContainerCSS= styled.div`

  .breadcrumb-item::before {
    content: var(--bs-breadcrumb-divider, "");
  }

  .eventablerow{
    background-color: var(--tableGreyBackgroundColor) !important;
  }

  .greyText{
    color: var(--greyInputTextColor);
  }

  .successText{
    color: var(--darkGreenBorderColor);
  }

  .form-control, .form-select{
    box-shadow: none !important;
    border: 1px solid var(--greyInputborderColor);
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
    margin-left: 43% !important;
    margin-top: -20% !important;
  }

  .greydiv{
    background-color: #FBFBFB;
  }
  .for-margin-top{
    margin-top: -11px;
  }
`;

const Addon = () => {
  
const [DeleteWarning, setDeleteWarning]= useState(true);
const [EditAddonWarn, setEditAddonWarn]= useState(true);
const [EditBundleWarn, setEditBundleWarn]= useState(true);
const [EditFeatureWarn, setEditFeatureWarn]= useState(true);
const [data, setData]= useState([]);
const [idfordelet, setIdfordelet]= useState();
console.log('idfordelet',idfordelet)

const DeleteBtnClicked = (value) => {
  setDeleteWarning(value)
}

const EditAddonBtnClicked = (value) => {
  setEditAddonWarn(value)
}

const EditBundleBtnClicked = (value) => {
  setEditBundleWarn(value)
}

const EditFeatureBtnClicked = (value) => {
  setEditFeatureWarn(value)
}

useEffect(() =>{
  SpecialFeature()
}, [])

  // Get All 

  const SpecialFeature = async() => {
    try {
      const response = await SpecialFeaGetApi();
      console.log('special features123',response )
      setData(response.data.addons)
      if (response?.status === 200) {
        toast.success(data?.msg);
        
      } else {
        toast.error(data?.msg);
      }
    } catch (error) {
      console.log('catch')
  }
  }

  // Delete api

  const SpecialDeleteApi = async (id) => {
    
    // console.log('id for delete in special', id)
    try {
      const response = await SpecialFeaDeleteApi(id);
      // console.log('my-special-api',response)
      if (response?.status === 200) {
        toast.success(response?.data?.msg);
      } else {
        toast.error(response?.data?.msg);
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
      <>
        <ContainerCSS>
          <div className="container-fluid ps-3 pe-3 pt-2 pb-2">
            <div className="row pt-3">
              <div className="col-lg-7 col-md-8 col-sm-12 flex-frow-1">
                  <nav className='breadcrumnav' aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="#" className='greyText text-decoration-none'><h2>Home &gt; </h2></Link></li>
                      <li className="breadcrumb-item active greenText" aria-current="page"><h2> Addon</h2></li>
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
                    <Link className="btn ps-0 pe-0 addButtons text-white" type="submit" to='/superAdminAddSchools'><h2 className='textVerticalCenter'>+ ADD Addon</h2></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3 for-margin-top"><h2>Manage Addons</h2></div>
            <div className="row ps-2 pe-2">
              <div className="overflow-scroll cardradius bg-white p-3">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th><h2>#</h2></th>
                      <th><h2>Bundle Name</h2></th>
                      <th><h2>Feature</h2></th>
                      <th><h2>Status <img src="./images/StatusArrow.svg" alt="" /></h2></th>
                      <th><h2>Action</h2></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.map(item=>(
                          <tr key={item.id} className='my-bg-color align-middl'>
                           <th className='greyText table-row-bg-color'><h3>1.</h3></th>
                          <td  className=' table-row-bg-color greyText'>{item.featureName}</td>
                          <td  className=' table-row-bg-color greyText'>{item.planFeatureId}</td>
                            <td  className=' table-row-bg-color greyText'>{`${item.status === true ? 'Active' : 'InActive'}`}</td>
                           <td className='table-row-bg-color'>
                        <div className="dropdown">
                          <button className="btn btn-sm actionButtons dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span>Action</span>
                          </button>
                          <ul className="dropdown-menu">
                            <li class='p-1'>
                              <button className="dropdown-item greyText" type="button" data-bs-toggle="offcanvas" data-bs-target="#Edit_addon" aria-controls="Edit_addon">
                                Edit Addon
                              </button>
                            </li>
                            <li class='p-1'>
                              <button className="dropdown-item greyText" type="button" data-bs-toggle="offcanvas" data-bs-target="#Edit_bundle" aria-controls="Edit_bundle">
                                Edit Bundle
                              </button>
                            </li>
                            <li class='p-1'>
                              <button className="dropdown-item greyText" type="button" data-bs-toggle="offcanvas" data-bs-target="#Edit_feature" aria-controls="Edit_feature">
                                Edit Feature
                              </button>
                            </li>
                            <li class='p-1'>
                              <Link className="dropdown-item greyText" type="button" onClick={()=>{setIdfordelet(item.planFeatureId)}}  data-bs-toggle="offcanvas" data-bs-target="#Delete_staticBackdrop" aria-controls="Delete_staticBackdrop">
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </td>
                          </tr>
                      ))
                    }
               
                  </tbody>
                </table>
              </div>
            </div>





  {/* ***********************************************************************************************************************************************************************************/}
  {/* ***********************************************************************************************************************************************************************************/}

          <div className="offcanvas offcanvas-end p-2" data-bs-backdrop="static" tabIndex="-1" id="Edit_addon" aria-labelledby="staticBackdropLabel">
            <div className="offcanvas-header modalHighborder p-1">
              <Link type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16">
                  <path fill="#008479" fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                </svg>
              </Link>
              <h2 className="offcanvas-title" id="staticBackdropLabel">School Edit</h2>
            </div>
            <div className="offcanvas-body p-0">
              <div>
                {EditAddonWarn
                  ? 
                    <>
                      <div>
                        <div className="modalLightBorder d-flex p-2">
                          <div className="p-2"><h3 className=''>Addon</h3></div>
                          <div className="ms-auto p-2"><h3 className='orangeText'>HR Management</h3></div>
                        </div>
                        <div className="ps-3 pe-3">
                          <table className="table mt-2">
                            <thead>
                              <tr height='40px'>
                                <th><small>Details</small></th>
                                <th className='text-primary'></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr height='40px'>
                                <td className='eventablerow'><small className='greyText ps-2'>Manage Users</small></td>
                                <td className='text-end eventablerow'><small className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked" checked/></small></td>
                              </tr>
                              <tr height='40px'>
                                <td><small className='greyText ps-2'>Custom Roles</small></td>
                                <td className='text-end'><small className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked" checked/></small></td>
                              </tr>
                              <tr height='40px'>
                                <td className='eventablerow'><small className='greyText ps-2'>Leave Request</small></td>
                                <td className='text-end eventablerow'><small className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked" checked/></small></td>
                              </tr>
                              <tr height='40px'>
                                <td><small className='greyText ps-2'>Attendance</small></td>
                                <td className='text-end'><small className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked" checked/></small></td>
                              </tr>
                              <tr height='40px'>
                                <td className='eventablerow'><small className='greyText ps-2'>Payroll</small></td>
                                <td className='text-end eventablerow'><small className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked" checked/></small></td>
                              </tr>
                              <tr height='40px'>
                                <td><small className='greyText ps-2'>Sample Text 1</small></td>
                                <td className='text-end'><small className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked"/></small></td>
                              </tr>
                              <tr height='40px'>
                                <td className='eventablerow'><small className='greyText ps-2'>Sample Text 2</small></td>
                                <td className='text-end eventablerow'><small className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked"/></small></td>
                              </tr>
                              <tr height='40px'>
                                <td><small className='greyText ps-2'>Sample Text 3</small></td>
                                <td className='text-end'><small className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked"/></small></td>
                              </tr>
                              <tr height='40px'>
                                <td className='eventablerow'><small className='greyText ps-2'>Sample Text 4</small></td>
                                <td className='text-end eventablerow'><small className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked"/></small></td>
                              </tr>
                              <tr height='40px'>
                                <td><small className='greyText ps-2'>Sample Text 5</small></td>
                                <td className='text-end'><small className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked"/></small></td>
                              </tr>
                            </tbody>
                          </table>
                          <p className='text-center p-3'>
                            <button className='btn updateButtons text-white' onClick={(e) => EditAddonBtnClicked(false)}>Update</button>
                            <button className='btn cancelButtons ms-3'>Cancel</button>
                          </p>
                        </div>
                      </div>
                    </>
                  :
                    <>
                      <div>
                        <p className='modalLightBorder p-2 mb-0'>Addon</p>
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

          <div className="offcanvas offcanvas-end p-2" data-bs-backdrop="static" tabIndex="-1" id="Edit_bundle" aria-labelledby="staticBackdropLabel">
            <div className="offcanvas-header modalHighborder p-1">
              <Link type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16">
                  <path fill="#008479" fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                </svg>
              </Link>
              <h2 className="offcanvas-title" id="staticBackdropLabel">Edit Bundle Name</h2>
            </div>
            <div className="offcanvas-body p-0">
              <div>
                {EditBundleWarn
                  ? 
                    <>
                      <div className="p-3">
                        <form>
                          <div className="mb-3">
                            <label htmlFor="BundleName" className="form-label greyText">Bundle Name</label>
                            <input type="text" className="form-control p-2 formcontrolinput" id="BundleName" placeholder='Online Addon Bundles'/>
                          </div>
                        </form>
                        <p className='text-center p-3'>
                          <button className='btn updateButtons text-white' onClick={(e) => EditBundleBtnClicked(false)}>Update</button>
                          <button className='btn cancelButtons ms-3'>Cancel</button>
                        </p>
                      </div>
                    </>
                  :
                    <>
                      <div>
                        <p className='modalLightBorder p-2 mb-0'>Bundle Name</p>
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

          <div className="offcanvas offcanvas-end p-2" data-bs-backdrop="static" tabIndex="-1" id="Edit_feature" aria-labelledby="staticBackdropLabel">
            <div className="offcanvas-header modalHighborder p-1">
              <Link type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16">
                  <path fill="#008479" fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                </svg>
              </Link>
              <h2 className="offcanvas-title" id="staticBackdropLabel">Edit Feature Name</h2>
            </div>
            <div className="offcanvas-body p-0">
              <div>
                {EditFeatureWarn
                  ? 
                    <>
                      <div>
                        <div className="modalLightBorder d-flex p-2">
                          <div className="p-2"><h3 className='greyText'>Bundle Name</h3></div>
                          <div className="ms-auto p-2"><h3 className='successText'>HR Management</h3></div>
                        </div>
                        <div className="p-3">
                          <h3 className='greyText'>Features</h3>
                          <div class="d-flex mt-3 border p-2">
                            <div class=" flex-grow-1"><h3>Manage Users</h3></div>
                            <div class=""><h3><Icon icon="bitcoin-icons:cross-outline" width="1.5em" height="1.5em"  style={{color: 'black'}} /></h3></div>
                          </div>
                          <div class="d-flex mt-3 border p-2">
                            <div class=" flex-grow-1"><h3>Custom Roles</h3></div>
                            <div class=""><h3><Icon icon="bitcoin-icons:cross-outline" width="1.5em" height="1.5em"  style={{color: 'black'}} /></h3></div>
                          </div>
                          <div class="d-flex mt-3 border p-2">
                            <div class=" flex-grow-1"><h3>Leave Request</h3></div>
                            <div class=""><h3><Icon icon="bitcoin-icons:cross-outline" width="1.5em" height="1.5em"  style={{color: 'black'}} /></h3></div>
                          </div>
                          <div class="d-flex mt-3 border p-2">
                            <div class=" flex-grow-1"><h3>Attendance</h3></div>
                            <div class=""><h3><Icon icon="bitcoin-icons:cross-outline" width="1.5em" height="1.5em"  style={{color: 'black'}} /></h3></div>
                          </div>
                          <div class="d-flex mt-3 border p-2">
                            <div class=" flex-grow-1"><h3>Payroll</h3></div>
                            <div class=""><h3><Icon icon="bitcoin-icons:cross-outline" width="1.5em" height="1.5em"  style={{color: 'black'}} /></h3></div>
                          </div>
                          <p className='text-center p-3'>
                            <button className='btn updateButtons text-white' onClick={(e) => EditFeatureBtnClicked(false)}>Update</button>
                            <button className='btn cancelButtons ms-3'>Cancel</button>
                          </p>
                        </div>
                      </div>
                    </>
                  :
                    <>
                      <div>
                        <p className='modalLightBorder p-2 mb-0'>Bundle Name</p>
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
            <div className="offcanvas-header ps-0 modalHighborder p-0">
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
                    <div className='' >
                      <p className='modalLightBorder p-2'>Addon</p>
                      <p className='text-center p-3'> <img src="./images/errorI.svg" className='img-fluid' alt="" /></p>
                      <p className='text-center warningHeading'>Are you Sure?</p>
                      <p className='text-center greyText warningText pt-2'>This Action will be permanently delete<br/>the Profile Data</p>
                      <p className='text-center warningText p-2'><input className="form-check-input formdltcheck" type="checkbox" value="" id="flexCheckChecked" />I Agree to delete the Profile Data</p>
                      <p className='text-center p-3'>
                        <Link className='btn deleteButtons text-white'  onClick={() => SpecialDeleteApi(idfordelet)}>Delete</Link>
                        <button className='btn dltcancelButtons ms-3'>Cancel</button>
                      </p>
                    </div>
                  </>
                :
                  <>
                    <div >
                      <p className='border-bottom p-2'>Addon</p>
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









          </div>
        </ContainerCSS>
      </>
  )
}

export default Addon