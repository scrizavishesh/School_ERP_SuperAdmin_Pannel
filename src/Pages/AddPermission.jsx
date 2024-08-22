import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { addNewFeaPerApi, getAllSpeFeatApi } from '../Utils/Apis';
import { toast } from 'react-hot-toast';
import DataLoader from '../Layouts/Loader';

const Container = styled.div`
  height: 92vh;
  overflow: scroll;
  
  .textBlue{
    color: #0085FF !important;
  }
  
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

const AddPermission = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  //loader State
  const [loaderState, setloaderState] = useState(false);

  const [allSpeFeature, setAllSpeFeature] = useState([]);

  const [Plan, setPlan] = useState('');
  const [PlanError, setPlanError] = useState('');

  const [PermissionNameError, setPermissionNameError] = useState('');
  const [formInputs, setFormInputs] = useState([{ name: '' }]);

  const textAlphaRegex = /^[A-Za-z0-9\s]+$/;

  useEffect(() => {
    getAllSpecialFeature();
  }, [token]);

  const getAllSpecialFeature = async () => {
    try {
      setloaderState(true);
      const searchKeyData= '';
      const pageNo = '';
      const pageSize= '';

      var response = await getAllSpeFeatApi(searchKeyData, pageNo, pageSize);
      console.log(response)
      if (response?.status === 200) {
        if (response?.data?.status === 'success') {
          setloaderState(false);
          setAllSpeFeature(response?.data?.addons);
          toast.success(response?.data?.message)
        }
      }
      else {
        console.log(response?.data?.message);
      }
    }
    catch {

    }
  }

  const handlePlanChange = (e) => {
    const newValue = e.target.value;
    setPlan(newValue);
    setPlanError(validateTextFields(newValue));
  };

  const validateTextFields = (value) => {
    if (!value.trim()) {
      return '*This Field is required';
    } else if (!textAlphaRegex.test(value)) {
      return 'Invalid characters in name !!';
    }
    return '';
  };

  const validateFields = () => {
    let isValid = true;
    if (!Plan) {
      setPlanError('* Plan is required');
      isValid = false;
    } else {
      setPlanError('');
    }

    formInputs.forEach((field, index) => {
      if (!field.name.trim()) {
        setPermissionNameError('* Permission Name is required');
        isValid = false;
      } else {
        setPermissionNameError('');
      }
    });

    return isValid;
  };

  const AddNewFeaPerm = async () => {
    if (validateFields()) {
      try {
        const data = formInputs.map((field) => ({ perName: field.name }));
        var response = await addNewFeaPerApi(data, Plan);
        if (response?.status === 200) {
          if (response?.data?.status === 'success') {
            toast.success(response?.data?.message);
            navigate('/addons');
          }
        } else {
          console.log(response?.data?.message);
        }
      } catch {
        console.log('invalid');
      }
    }
  };

  // Adding multiple permissions at once 

  const handleChange = (i, e) => {
    const { name, value } = e.target;
    let newFormValues = [...formInputs];
    newFormValues[i][name] = value;
    setFormInputs(newFormValues);
  };

  const addFormFields = () => {
    setFormInputs([...formInputs, { name: '' }]);
  };

  const removeFormFields = () => {
    if (formInputs.length > 1) {
      let newFormValues = [...formInputs];
      // newFormValues.splice(i, 1);
      newFormValues.pop();
      setFormInputs(newFormValues);
    }
  };

  const handleCancel = () => {
    navigate('/addons');
  }

  return (
    <Container>
    {
      loaderState && (
        <DataLoader />
      )
    }
      <div className="container-fluid ps-3 pe-3 pt-2 pb-2">
        <div className="row pt-3">
          <div className="col-md-9 col-sm-12">
            <nav className='breadcrumnav' aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="#" className='greyText text-decoration-none'><h2>Home &gt; </h2></Link>
                </li>
                <li className="breadcrumb-item active greenText" aria-current="page">
                  <h2>Add Feature</h2>
                </li>
              </ol>
            </nav>
          </div>
          <div className="col-md-3 col-sm-12">
            <form className="d-flex" role="search">
              <input className="form-control formcontrolsearch" type="search" placeholder="Search" aria-label="Search" />
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
                <select className={`form-select ${PlanError ? 'border-1 border-danger' : ''}`} aria-label="Default select example" onChange={handlePlanChange}>
                  <option defaultValue>-- Select --</option>
                  {allSpeFeature?.map((option) => (
                    <option key={option.planFeatureId} value={option.planFeatureId}>
                      {option.featureName}
                    </option>
                  ))}
                </select>
                <span className="text-danger">{PlanError}</span>
              </div>
              <div className="col-md-6 col-sm-12">
                {formInputs.map((element, index) => (
                  <div className="row d-flex mb-3" key={index}>
                    <label htmlFor="BundleName" className="form-label greyText">Permission Name</label>
                    <input type="text" name="name" className={`form-control ${PermissionNameError ? 'border-1 border-danger' : ''}`} id="inputSchlEmail" placeholder="Enter Permission Name" value={element.name} onChange={(e) => handleChange(index, e)} />
                    <span className="text-danger">{PermissionNameError}</span>
                  </div>
                ))}
                <div className="d-flex mt-2">
                  <h5 className='flex-grow-1 text-decoration-none textBlue' onClick={addFormFields}>Add More</h5>
                  {formInputs.length>1 ? <h5 className='text-decoration-none textBlue' onClick={() => removeFormFields()}>Remove</h5>:'' }
                </div>
              </div>
            </div>
            <p className='text-center p-3'>
              <button className='btn addCategoryButtons text-white' type='button' onClick={AddNewFeaPerm}>Add Permission</button>
              <button className='btn cancelButtons ms-3' onClick={handleCancel}  type='button'>Cancel</button>
            </p>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default AddPermission;










// import React, { useEffect, useState } from 'react'
// import styled from 'styled-components';
// import { Link, useNavigate } from 'react-router-dom';
// import { addNewFeaPerApi, getAllSpeFeatApi } from '../Utils/Apis';
// import {toast} from 'react-hot-toast';

// const Container = styled.div`
//   height: 92vh;
//   overflow: scroll;
  
//   .breadcrumb-item::before {
//     content: var(--bs-breadcrumb-divider, "");
//   }

//   .headingbg{
//     background-color: var(--headingBackgroundColor);
//     border-radius: 5px;
//   }

//   .card{
//     border: none;
//   }

//   .form-control, .form-control::placeholder, .form-select{
//     font-size: var(--font-size-14) !important;
//     color: var(--greyInputTextColor);
    
//   }

//   .form-control, .form-select{
//     background-color: #fff !important;
//     box-shadow: none !important;
//     border-color: var(--greyInputborderColor);
//   }

//   .form-control:focus, .form-select:focus{
//     box-shadow: none !important;
//     border-color: var(--greyInputborderColor);
//   }

//   .formcontrolFile{
//     color: Black;
//   }

// `;



// const AddPermission = () => {

//   const navigate = useNavigate();

//   const token = localStorage.getItem('token');
//   const [allSpeFeature, setAllSpeFeature] = useState([]);

//   const [Plan, setPlan] = useState('')
//   const [PlanError, setPlanError] = useState('')

//   const [PermissionName, setPermissionName] = useState('')
//   const [PermissionNameError, setPermissionNameError] = useState('')

//   const [formInputs, setFormInputs] = useState([{ name: "" }])

//   const textAlphaRegex = /^[A-Za-z0-9\s]+$/;

//   useEffect(() => {
//     getAllSpecialFeature();
//   }, [token])

//   const getAllSpecialFeature = async() => {
//     try{
//       const searchKey = '';
//       var response = await getAllSpeFeatApi(searchKey);
//       console.log(response)
//       if(response?.status===200){
//         if(response?.data?.status==='success'){
//           setAllSpeFeature(response?.data?.addons);
//         }
//       }
//       else{
//         console.log(response?.data?.message);
//       }
//     }
//     catch{

//     }
//   }


//   const handlePermissionNameChange = (e) => {
//     const newValue = e.target.value;
//     setPermissionName(newValue);
//     setPermissionNameError(validateTextFields(newValue));
//   };

//   const handlePlanChange = (e) => {
//     const newValue = e.target.value;
//     setPlan(newValue);
//     setPlanError(validateTextFields(newValue));
//   };


//   const validateTextFields = (value) => {
//     if (!value.trim()) {
//       return '*This Field is required';
//     } else if (!textAlphaRegex.test(value)) {
//       return 'Invalid characters in name !!';
//     }
//     return '';
//   };

//   const validateFields = () => {
//     let isValid = true;

//     if (!PermissionName) {
//       setPermissionNameError('* Permission Name is required');
//       isValid = false;
//     } else {
//       setPermissionNameError('');
//     }

//     if (!Plan) {
//       setPlanError('* Plan is required');
//       isValid = false;
//     } else {
//       setPlanError('');
//     }

//     return isValid;
//   };


//   const AddNewFeaPerm = async () => {
//     if (validateFields()) {
//       console.log('valid')
//       try {
//        const data = [
//           {"perName": PermissionName}
//        ]
//         console.log(data)
//         var response = await addNewFeaPerApi(data, Plan);
//         console.log('api hit 1')
//         if (response?.status === 200) {
//           console.log(response)
//           if (response?.data?.status === 'success') {
//             toast.success(response?.data?.message)
//             navigate('/addons')
//           }
//         }
//         else {
//           console.log(response?.data?.message);
//         }
//       }
//       catch {
//         console.log('invalid')
//       }
//     }
//   }


//      // Add remove fields start
// //  fields First 
//   let handleChange = (i, e) => {
//     let newFormValues = [...formInputs];
//     newFormValues[i][e.target.name] = e.target.value;
//     setFormInputs(newFormValues);
//     setFeature([e.target.value])
//   }
//   let addFormFields = () => {
//     // setAdd1(true);
//     setFormInputs([...formInputs, { name: "" }])
//   }
//   let removeFormFields = (i) => {
//     let newFormValues = [...formInputs];
//     newFormValues.splice(i, 1);
//     setFormInputs(newFormValues)
//   }

//   return (
//     <>
//       <Container>
//         <div className="container-fluid ps-3 pe-3 pt-2 pb-2">
//           <div className="row pt-3">
//             <div className="col-md-9 col-sm-12">
//               <nav className='breadcrumnav' aria-label="breadcrumb">
//                 <ol className="breadcrumb">
//                   <li className="breadcrumb-item"><Link to="#" className='greyText text-decoration-none'><h2>Home &gt; </h2></Link></li>
//                   <li className="breadcrumb-item active greenText" aria-current="page"><h2> Add Feature</h2></li>
//                 </ol>
//               </nav>
//             </div>
//             <div className="col-md-3 col-sm-12">
//               <form className="d-flex" role="search">
//                 <input className="form-control formcontrolsearch" type="search" placeholder="Search" aria-label="Search"/>
//                 <button className="btn searchButtons text-white" type="submit"><h2>Search</h2></button>
//               </form>
//             </div>
//           </div>

//           <h2>Add Feature</h2>
//           <div className="row mb-3"></div>
//             <div className='cardradius bg-white p-3'>
//               <form>
//                 <div className="row">
//                   <div className="col-md-6 col-sm-12">
//                   <label htmlFor="BundleName" className="form-label greyText">Addon</label>
//                     <select className={`form-select ${PlanError ? 'border-1 border-danger' : ''} `} aria-label="Default select example" onChange={handlePlanChange}>
//                       <option defaultValue>-- Select --</option>
//                         {allSpeFeature?.map(option => (
//                           <option key={option.planFeatureId} value={option.planFeatureId}>
//                             {option.featureName}
//                           </option>
//                         ))}
//                     </select>
//                     <span className="text-danger">{PlanError}</span>
//                   </div>
//                   <div className="col-md-6 col-sm-12">

//                   {
//                     formInputs?.map((element, index)=>(
//                         <div className="row d-flex" value={element.name || ""} onChange={e => handleChange(index, e)} >
//                           <div className="col-11 mb-3">
//                             <label htmlFor="BundleName" className="form-label greyText">Permission Name</label>
//                             <input type="text" className={`form-control ${PermissionNameError ? 'border-1 border-danger' : ''} `} id="inputSchlEmail" placeholder='Enter Permission Name' onChange={handlePermissionNameChange} />
//                             <span className="text-danger">{PermissionNameError}</span>
//                           </div>
//                           <div className="col-1 plus-design mt-3 ps-0 ">
//                           <div>
//                               {
//                                 index === 0 
//                                 ? 
//                                   <div className='my-anchor'>
//                                     <Link href=""><p className='' onClick={() => addFormFields()}>+</p></Link>
//                                   </div>
//                                 : 
//                                 <div className='my-anchor'>
//                                   <Link type="button" className="button remove my-remove-button" onClick={() => removeFormFields()}> - </Link>
//                                 </div>
//                               }
//                           </div>
//                           </div> 
//                           <div>
                      
//                           </div>                     
//                       </div>
//                       ))
//                     }

                    
//                   </div>
//                 </div>
//                 <p className='text-center p-3'>
//                   <button className='btn addCategoryButtons text-white' type='button' onClick={AddNewFeaPerm}>Add Permission</button>
//                   <button className='btn cancelButtons ms-3'>Cancel</button>
//                 </p>
//               </form>
//             </div>
//         </div>
//       </Container>
//     </>
//   )
// }

// export default AddPermission
