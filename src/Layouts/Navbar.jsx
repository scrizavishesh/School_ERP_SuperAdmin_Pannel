import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSidebarContext } from '../Dashboard/DashboardLayout';
import { Icon } from '@iconify/react';
import { getSuperAdminDataApi } from '../Utils/Apis';
import toast from 'react-hot-toast';
import DataLoader from './Loader';

const Container = styled.div`
    padding: 0% !important;
    z-index: 1;



`;

const Navbar = () => {

    const token = localStorage.getItem('token');
    const { toggleSidebar } = useSidebarContext();
    //loader State
    const [loaderState, setloaderState] = useState(false);
    const [data, setData] = useState();

    useEffect(() => {
        getProfileData();
    }, [token])
    

  const getProfileData = async () => {
    try {
      setloaderState(true);
      var response = await getSuperAdminDataApi();
      console.log(response)
      if (response?.status === 200) {
        if (response?.data?.status === 'success') {
            setData(response?.data)
            setloaderState(false);
            // toast.success(response?.data?.message)
        }
        else {
          setloaderState(false);
        }
      }
      else {
        setloaderState(false);
        console.log(response.data.message)
      }
    }
    catch (error) {
      setloaderState(false);
      console.log(error.message)
      toast.error(error.message)
    }
  }


    return (
        <Container>
            { loaderState && ( <DataLoader /> ) }
            <div className="container-fluid bg-white sticky-top">
                <div className="row p-1">
                    <div className="col-md-4 col-sm-6 col-6">
                        <div className="d-flex">
                            <div className="flex-grow-1 p-2 align-self-center">
                                <button className="btn togglebtn" onClick={toggleSidebar}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style={{ cursor: 'pointer' }} >
                                        <path fill="#008479" stroke="#008479" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 17h14M5 12h14M5 7h14" />
                                    </svg>
                                </button>
                            </div>
                            <div className="p-2 align-self-center">
                                <form className="d-flex" role="search">
                                    <input className="form-control formcontrolsearch font14" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearchByKey(e.target.value)} />
                                    <button className="btn searchhhButtons text-white " type="button"><span className='font14'>Search</span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-6 col-6">
                        <div className="d-flex">
                            <div className="flex-grow-1 p-2 align-self-center"></div>
                            <div className="p-2 align-self-center">
                                <Icon icon="mingcute:notification-newdot-line" width="1.8em" height="1.8em"  style={{color: '#000'}} />
                            </div>
                            <div className="p-2 ms-auto">
                                <Link className="d-flex text-black text-decoration-none p-0" to="/">
                                    <div className="row">
                                        <div className="col-3">
                                            <img src="./images/userProfile.png" alt="" width={40} />
                                        </div>
                                        <div className="col-9 text-start d-none d-sm-block">
                                            <div className="row">
                                                <span className="font14">{data?.superAdmin?.adminName}</span>
                                            </div>
                                            <div className="row">
                                                <span className="font14">{data?.superAdmin?.adminEmail}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Navbar;