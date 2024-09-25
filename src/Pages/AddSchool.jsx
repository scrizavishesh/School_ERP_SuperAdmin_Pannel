import React, {useState} from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`

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

  .form-control::placeholder{
    font-size: var(--font-size-14) !important;
    color: var(--greyInputTextColor);
    
  }

  .form-control{
    box-shadow: none !important;
    border-color: var(--greyInputborderColor);
  }

  .form-control:focus{
    box-shadow: none !important;
    border-color: var(--greyInputborderColor);
  }

  .formcontrolFile{
    color: white;
  }

`;


const CollapsedContainer= styled.div`

  .collapse{
    transition: height 0.3s ease;
  }

`;


const AddSchool = () => {
  
  const [schoolFormOpen, setSchoolFormOpen] = useState(true);
  const [adminInfoOpen, setAdminInfoOpen] = useState(false);

  const toggleSchoolForm = () => {
    setSchoolFormOpen(!schoolFormOpen);
    setAdminInfoOpen(false);
  };

  const toggleAdminInfo = () => {
    setAdminInfoOpen(!adminInfoOpen);
    setSchoolFormOpen(false);
  };

  return (
    <>
      <Container>
        <div className="container-fluid ps-4 pe-4 pt-2 pb-2">
          <div className="row pt-3">
            <nav className='breadcrumnav' aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="#" className='greyText text-decoration-none'><h2>Home &gt; </h2></Link></li>
                <li className="breadcrumb-item active greenText" aria-current="page"><h2> Add Schools</h2></li>
              </ol>
            </nav>
          </div>
          <div className="row mb-3"><h2>Add School</h2></div>
          <div className="row ps-2 pe-2 ">
            <div className="bg-white cardradius p-3">
              <p className={`d-inline-flex gap-1 p-2 col-12 headingbg ${schoolFormOpen ? 'active' : ''}`} onClick={toggleSchoolForm}>
                <h2 className="flex-grow-1" data-bs-toggle="collapse" to="#SchoolFormCollapse" role="button" aria-expanded={schoolFormOpen} aria-controls="SchoolFormCollapse">
                  <svg className='me-1' xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 36 36">
                    <path fill="black" d="M21 12H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1M8 10h12V7.94H8Z" className="clr-i-outline clr-i-outline-path-1" />
                    <path fill="black" d="M21 14.08H7a1 1 0 0 0-1 1V19a1 1 0 0 0 1 1h11.36L22 16.3v-1.22a1 1 0 0 0-1-1M20 18H8v-2h12Z" className="clr-i-outline clr-i-outline-path-2" />
                    <path fill="black" d="M11.06 31.51v-.06l.32-1.39H4V4h20v10.25l2-1.89V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h8a3.44 3.44 0 0 1 .06-.49" className="clr-i-outline clr-i-outline-path-3" />
                    <path fill="black" d="m22 19.17l-.78.79a1 1 0 0 0 .78-.79" className="clr-i-outline clr-i-outline-path-4" />
                    <path fill="black" d="M6 26.94a1 1 0 0 0 1 1h4.84l.3-1.3l.13-.55v-.05H8V24h6.34l2-2H7a1 1 0 0 0-1 1Z" className="clr-i-outline clr-i-outline-path-5" />
                    <path fill="black" d="m33.49 16.67l-3.37-3.37a1.61 1.61 0 0 0-2.28 0L14.13 27.09L13 31.9a1.61 1.61 0 0 0 1.26 1.9a1.55 1.55 0 0 0 .31 0a1.15 1.15 0 0 0 .37 0l4.85-1.07L33.49 19a1.6 1.6 0 0 0 0-2.27ZM18.77 30.91l-3.66.81l.89-3.63L26.28 17.7l2.82 2.82Zm11.46-11.52l-2.82-2.82L29 15l2.84 2.84Z" className="clr-i-outline clr-i-outline-path-6" />
                    <path fill="none" d="M0 0h36v36H0z" />
                  </svg>
                  School Form
                </h2>
                <span className='text-end'>
                  {schoolFormOpen? <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 32 32"><path fill="black" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16S9.913 5 16 5m-6 10v2h12v-2z"/></svg>: <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 1024 1024"><path fill="black" d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0m0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01M736 480H544V288c0-17.664-14.336-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.336-32 32s14.336 32 32 32h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32V544h192c17.664 0 32-14.336 32-32s-14.336-32-32-32"/></svg>}
                </span>
              </p>
                <CollapsedContainer>
                <div className={`collapse ${schoolFormOpen ? 'show' : ''}`} id="SchoolFormCollapse">
                  <div className="card card-body">
                    <form className="row g-3">
                      <div className="col-md-6">
                        <div className="col-md-12">
                          <label htmlFor="inputSchlName" className="form-label"><h3>School Name*</h3></label>
                        </div>
                        <div className="col-md-12">
                          <input type="text" className="form-control" id="inputSchlName" placeholder='Enter School Name'/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="col-md-12">
                          <label htmlFor="inputSchlName" className="form-label"><h3>School Id*</h3></label>
                        </div>
                        <div className="col-md-12">
                          <input type="text" className="form-control" id="inputSchlName" placeholder='Enter School Id'/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="col-md-12">
                          <label htmlFor="inputSchlAdd" className="form-label"><h3>School Address*</h3></label>
                        </div>
                        <div className="col-md-12">
                          <input type="text" className="form-control" id="inputSchlAdd" placeholder='Enter Address Detail'/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="col-md-12">
                          <label htmlFor="inputSchlEmail" className="form-label"><h3>School Email*</h3></label>
                        </div>
                        <div className="col-md-12">
                          <input type="text" className="form-control" id="inputSchlEmail" placeholder='Enter Email Id'/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="col-md-12">
                          <label htmlFor="inputSchlPhone" className="form-label"><h3>School Phone*</h3></label>
                        </div>
                        <div className="col-md-12">
                          <input type="text" className="form-control" id="inputSchlPhone" placeholder='Enter Phone Number'/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="col-md-12">
                          <label htmlFor="inputSchlName" className="form-label"><h3>Choose Package*</h3></label>
                        </div>
                        <div className="col-md-12">
                          <input type="select" className="form-control" id="inputSchlName" placeholder='Select Package'/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="col-md-12">
                          <label htmlFor="inputSchlName" className="form-label"><h3>School Description*</h3></label>
                        </div>
                        <div className="col-md-12">
                          <input type="text" className="form-control" id="inputSchlName" placeholder='Enter School Info'/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="col-md-12">
                          <label htmlFor="inputSchlName" className="form-label"><h3>School Logo*</h3></label>
                        </div>
                        <div className="col-md-12">
                          <input type="file" className="form-control formcontrolFile" id="inputSchlName"/>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                </CollapsedContainer>



                <p className={`d-inline-flex gap-1 p-2 col-12 headingbg mt-3 ${adminInfoOpen ? 'active' : ''}`} onClick={toggleAdminInfo}>
                  <h2 className="flex-grow-1" data-bs-toggle="collapse" to="#AdimnInfoCollapse" role="button" aria-expanded={adminInfoOpen} aria-controls="AdimnInfoCollapse">
                    <svg className='me-1' xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 16 16">
                      <path fill="black" fillRule="evenodd" d="M10.5 5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m.514 2.63a4 4 0 1 0-6.028 0A4.002 4.002 0 0 0 2 11.5V13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1.5a4.002 4.002 0 0 0-2.986-3.87M8 9H6a2.5 2.5 0 0 0-2.5 2.5V13a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-1.5A2.5 2.5 0 0 0 10 9z" clipRule="evenodd" />
                    </svg>
                    Admin Info
                  </h2>
                  <span className='text-end'>
                    {adminInfoOpen? <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 32 32"><path fill="black" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16S9.913 5 16 5m-6 10v2h12v-2z"/></svg>: <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 1024 1024"><path fill="black" d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0m0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01M736 480H544V288c0-17.664-14.336-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.336-32 32s14.336 32 32 32h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32V544h192c17.664 0 32-14.336 32-32s-14.336-32-32-32"/></svg>}
                  </span>
                </p>
                <div className={`collapse ${adminInfoOpen ? 'show' : ''}`} id="AdimnInfoCollapse">
                  <div className="card card-body">
                    <form className="row g-3">
                      <div className="col-md-6">
                        <div className="col-md-12">
                          <label htmlFor="inputSchlName" className="form-label"><h3>Admin Name*</h3></label>
                        </div>
                        <div className="col-md-12">
                          <input type="text" className="form-control" id="inputSchlName" placeholder='Enter School Name'/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="col-md-12">
                          <label htmlFor="inputSchlName" className="form-label"><h3>Gender*</h3></label>
                        </div>
                        <div className="col-md-12">
                          <input type="text" className="form-control" id="inputSchlName" placeholder='Select Gender'/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="col-md-12">
                          <label htmlFor="inputSchlAdd" className="form-label"><h3>Admin Address*</h3></label>
                        </div>
                        <div className="col-md-12">
                          <input type="text" className="form-control" id="inputSchlAdd" placeholder='Enter Admin Address'/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="col-md-12">
                          <label htmlFor="inputSchlPhone" className="form-label"><h3>Admin Phone Number*</h3></label>
                        </div>
                        <div className="col-md-12">
                          <input type="text" className="form-control" id="inputSchlPhone" placeholder='Enter Phone Number'/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="col-md-12">
                          <label htmlFor="inputSchlEmail" className="form-label"><h3>Admin Email*</h3></label>
                        </div>
                        <div className="col-md-12">
                          <input type="text" className="form-control" id="inputSchlEmail" placeholder='Enter Admin Email'/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="col-md-12">
                          <label htmlFor="inputSchlName" className="form-label"><h3>Photo*</h3></label>
                        </div>
                        <div className="col-md-12">
                          <input type="file" className="form-control" id="inputSchlName" placeholder=''/>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </Container>
    </>
  )
}

export default AddSchool