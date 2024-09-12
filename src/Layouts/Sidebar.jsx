import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSidebarContext } from '../Dashboard/DashboardLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { logoutApi } from '../Utils/Apis';

const Container = styled.div`
    background-color: var(--sidebarBackground);
    height: auto;
    width: ${({ sidebarOpen }) => (sidebarOpen ? '224px' : '64px')};
    transition: all 0.3s ease;

    ul {
        max-height: calc(100vh - 10px);
        overflow: auto;
    }

    .modalHighborder{
        border-bottom: 2px solid var(--modalBorderColor);
    }

    .modalLightBorder{
        border-bottom: 1px solid var(--modalBorderColor);
    }

    .deleteSVG{
        position: relative;
        width: fit-content ;
        margin-left: 43% !important;
        margin-bottom: -18% !important;
        background-color: #fff;
    }

    .greydiv{
        background-color: #FBFBFB;
    }

    .borderTOP {
        border-top: 1px solid var(--borderSidebar);
    }

    .borderBottom {
        border-bottom: 1px solid var(--borderSidebar);
    }

    .form-check-input{
        box-shadow: none ;
        border: 1px solid #d7d7d7;
    }

    .formdltcheck:checked{
        background-color: #B50000;
        border-color: #B50000;
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

    .contbtn{
        margin-left: 41% !important;
        margin-top: -20% !important;
    }

    .menus {
        position: relative;
        padding: 1rem;
        display: flex;
        color: #000;
        align-items: center;
        white-space: nowrap;
        text-decoration : none !important;
        transition: background-color 0.3s, color 0.3s,;

        &:hover {
            background-color: #008479;
            color: #ffffff;
            border-right: 5px solid orange;
        }

        &:hover::before {
            content: "";
            position: absolute;
            right: -2.5px;
            top: 50%;
            transform: translateY(-50%);
            width: 0;
            height: 0;
            border-right: 10px solid orange;
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
        }

        &.active {
            background-color: var(--greenTextColor);
            color: #ffffff;
            border-right: 5px solid orange;
        }

        &.active::before {
            content: "";
            position: absolute;
            right: -2.5px;
            top: 50%;
            transform: translateY(-50%);
            width: 0;
            height: 0;
            border-right: 10px solid orange;
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
        }

        .menu-text {
            display: ${({ sidebarOpen }) => (sidebarOpen ? 'inline' : 'none')};
            margin-left: 10px;
            transition: margin-left 0.3s ease;
        }

        ${({ sidebarOpen }) => !sidebarOpen && `
            &:hover .menu-text {
                display: inline;
                position: absolute;
                left: 57px;
                white-space: nowrap;
                background-color: var(--greenTextColor);
                padding: 0.68rem 1.5rem 0.68rem 1.5rem;
                box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                border-right: 5px solid orange;
            }

            &:hover .menu-text::before {
                content: "";
                position: absolute;
                right: -2.5px;
                top: 50%;
                transform: translateY(-50%);
                width: 0;
                height: 0;
                border-right: 10px solid orange;
                border-top: 5px solid transparent;
                border-bottom: 5px solid transparent;
            }
        `}
    }

    .collapse-menu {
        padding-left: 1.5rem;
    }
`;

const StickyHeader = styled.div`
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: var(--sidebarBackground);
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        justify-content: space-between;

        .sidebarclass{
            position: relative;
        }

        .toggle-icon {
            position: absolute;
            right: -15px !important;
            margin-top: 7% !important;
            display: block !important;
        }
    }

    .toggle-icon {
        display: none;
        cursor: pointer;
        color: #fff;
    }
`;

const Sidebar = () => {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const { sidebarOpen, toggleSidebar } = useSidebarContext();

    const [AddonDropOpen, setAddOnDropOpen] = useState(false);
    const [SettingsDropOpen, setSettingsDropOpen] = useState(false);

    const location = useLocation();

    const [activeLink, setActiveLink] = useState(() => {
        const currentPath = location.pathname === '/' ? 'dashboard' : location.pathname.slice(1);
        localStorage.setItem('activeLink', currentPath);
        return currentPath;
    });

    useEffect(() => {
        const currentPath = location.pathname === '/' ? 'dashboard' : location.pathname.slice(1);
        setActiveLink(currentPath);
        localStorage.setItem('activeLink', currentPath);
    }, [location.pathname]);

    const handleActiveLink = (link) => {
        setActiveLink(link);
        localStorage.setItem('activeLink', link);
    };

    //automatic logout


    useEffect(() => {
        const inactivityPeriod = 23 * 60 * 60 * 1000; // 24 hours in milliseconds

        let logoutTimer = setTimeout(() => {
            handleLogout();
        }, inactivityPeriod);

        const resetTimer = () => {
            clearTimeout(logoutTimer);
            logoutTimer = setTimeout(() => {
                handleLogout();
            }, inactivityPeriod); // Reset the timer on any activity
        };

        // Listen for user activities
        window.addEventListener('mousemove', resetTimer);
        window.addEventListener('keypress', resetTimer);

        // Cleanup the event listeners on unmount
        return () => {
            clearTimeout(logoutTimer);
            window.removeEventListener('mousemove', resetTimer);
            window.removeEventListener('keypress', resetTimer);
        };
    }, []);


    // useEffect(() => {
    //     const logoutTimer = setTimeout(() => {
    //         handleLogout();
    //     }, 60000); // 3 minutes = 180000 ms

    //     const resetTimer = () => {
    //         clearTimeout(logoutTimer);
    //         setTimeout(() => {
    //             handleLogout();
    //         }, 60000); // Reset the timer on any activity
    //     };

    //     // Listen for user activities
    //     window.addEventListener('mousemove', resetTimer);
    //     window.addEventListener('keypress', resetTimer);

    //     // Cleanup the event listeners on unmount
    //     return () => {
    //         clearTimeout(logoutTimer);
    //         window.removeEventListener('mousemove', resetTimer);
    //         window.removeEventListener('keypress', resetTimer);
    //     };
    // }, []);


    const [LogoutSuccess, setLogoutSuccess] = useState(true);
    const handleLogout = async () => {
        try {
            var response = await logoutApi();
            console.log(response)
            if (response?.status === 200) {
                if (response?.data?.status === 'success') {
                    localStorage.removeItem('token')
                    setLogoutSuccess(false);
                    setTimeout(() => {
                        navigate('/')
                    }, 600);
                    setTimeout(() => {
                        window.location.reload();
                        window.location.reload();
                    }, 1000);
                }
            }
            else {
                console.log(response?.data?.message);
            }
        }
        catch {

        }
    }


    const handleActiveDropAndLink = (val) => {
        handleActiveLink(val)

        if (val === 'addons') {
            setAddOnDropOpen(!AddonDropOpen);
            navigate('/addons')
            setSettingsDropOpen(false)
        }
        else if (val === 'systemSettingPage') {
            navigate('/systemSettingPage')
            setAddOnDropOpen(false);
            setSettingsDropOpen(!SettingsDropOpen)
        }
    }


    const handleActiveWithOutLink = (val) => {
        handleActiveLink(val)
        setAddOnDropOpen(false)
        setSettingsDropOpen(false)
    }


    return (
        <Container sidebarOpen={sidebarOpen}>
            <div className="container-fluid">
                <div className="row sticky-top">
                    <StickyHeader className="borderBottom">
                        <div className={` ${sidebarOpen ? "p-2" : "pt-3 pb-4"} text-white d-flex justify-content-center align-self-center`}>
                            <img className={` sidebarclass {sidebarOpen ? "p-0" : "pt-4 pb-4"}`} src={sidebarOpen ? "./images/Scrizalogo.svg" : "./images/ScrizaSmallLogo.png"} alt="sidebarLogo" style={{ transition: 'opacity 0.3s ease' }} />
                            <Icon className='toggle-icon' icon="emojione:left-arrow" width="1.7em" height="1.7em" onClick={toggleSidebar} />
                        </div>
                    </StickyHeader>
                </div>
                <div className="row overflow-scroll">
                    <ul className='p-0'>
                        <li>
                            <Link to="/" className={`menus p-2 d-flex borderBottom ${sidebarOpen === '' ? 'justify-content-center' : ''} ${activeLink === 'dashboard' ? 'active' : ''}`} onClick={() => handleActiveWithOutLink('dashboard')} >
                                <Icon icon="clarity:dashboard-line" width="1.5em" height="1.5em" />
                                <h3 className="menu-text">Dashboard</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="/allSchoolsPage" className={`menus p-2 d-flex borderBottom ${sidebarOpen === '' ? 'justify-content-center' : ''} ${activeLink === 'allSchoolsPage' ? 'active' : ''}`} onClick={() => handleActiveWithOutLink('allSchoolsPage')} >
                                <Icon icon="uil:book-open" width="1.5em" height="1.5em" />
                                <h3 className="menu-text">Schools</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addSchoolsPage" className={`menus p-2 d-flex borderBottom ${sidebarOpen === '' ? 'justify-content-center' : ''} ${activeLink === 'addSchoolsPage' ? 'active' : ''}`} onClick={() => handleActiveWithOutLink('addSchoolsPage')} >
                                <Icon icon="bx:book-add" width="1.5em" height="1.5em" />
                                <h3 className="menu-text">Add School</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addons" className={`menus p-2 d-flex borderBottom ${sidebarOpen === '' ? 'justify-content-center' : ''} ${activeLink === 'addons' || activeLink === 'addAddons' || activeLink === 'addPermission' ? 'active' : ''}`} data-bs-toggle="collapse" data-bs-target="#collapseAddon" onClick={() => handleActiveDropAndLink('addons')} >
                                <div className="flex-grow-1">
                                    <Icon icon="mage:dashboard-2" width="1.5em" height="1.5em" />
                                    <h3 className="menu-text">Features</h3>
                                </div>
                                <div className="">
                                    {AddonDropOpen ? <Icon icon="ri:arrow-up-s-fill" width="1.5em" height="1.5em" /> : <Icon icon="ri:arrow-down-s-fill" width="1.5em" height="1.5em" />}
                                </div>
                            </Link>
                            <div id="collapseAddon" className={`collapse collapse-menu p-0 ${AddonDropOpen ? 'show' : 'hide'}`}>
                                <ul className='list-unstyled p-0 bg-white'>
                                    <li>
                                        <Link to="/addons" className={`menus p-2 d-flex borderBottom ${sidebarOpen === '' ? 'justify-content-center' : ''} ${activeLink === 'addons' ? 'active' : ''}`} onClick={() => handleActiveLink('addons')} >
                                            <Icon icon="mage:dashboard-2" width="1.5em" height="1.5em" />
                                            <h3 className="menu-text">Feature Details</h3>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/addAddons" className={`menus p-2 d-flex borderBottom ${sidebarOpen === '' ? 'justify-content-center' : ''} ${activeLink === 'addAddons' || activeLink === 'addPermission' ? 'active' : ''}`} onClick={() => handleActiveLink('addAddons')} >
                                            <Icon icon="fluent:note-add-48-regular" width="1.5em" height="1.5em" />
                                            <h3 className="menu-text">Add Features</h3>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link to="/addfeatures" className={`menus p-2 d-flex borderBottom ${sidebarOpen === '' ? 'justify-content-center' : ''} ${activeLink === 'addfeatures' ? 'active' : ''}`} onClick={() => handleActiveLink('addfeatures')} >
                                            <Icon icon="mdi:key-add" width="1.5em" height="1.5em" />
                                            <h3 className="menu-text">Add Permissions</h3>
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link to="/subscriptionPage" className={`menus p-2 d-flex borderBottom ${sidebarOpen === '' ? 'justify-content-center' : ''} ${activeLink === 'subscriptionPage' ? 'active' : ''}`} onClick={() => handleActiveWithOutLink('subscriptionPage')} >
                                <svg width="24" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.8732 5.53529C9.87343 6.61575 9.87793 7.69633 9.87197 8.77679C9.86735 9.61024 9.52792 9.96698 8.72323 9.96915C6.53043 9.97495 4.33762 9.97518 2.14481 9.96881C1.39504 9.96664 1.01667 9.61628 1.01149 8.86592C0.996189 6.61029 0.995851 4.35443 1.01239 2.0988C1.01757 1.39398 1.40697 1.01458 2.11319 1.01037C4.34336 0.99694 6.57375 0.995576 8.80392 1.01208C9.51318 1.01732 9.86364 1.40331 9.87016 2.12339C9.88063 3.26043 9.87309 4.39792 9.8732 5.53529ZM9.08596 5.45925C9.08596 4.43582 9.06896 3.41204 9.09406 2.38918C9.10464 1.9572 8.98737 1.78486 8.53168 1.78919C6.47066 1.80865 4.40931 1.80513 2.34818 1.79124C1.9446 1.78851 1.77994 1.90917 1.78321 2.3408C1.79896 4.44436 1.79649 6.54814 1.78478 8.65181C1.78265 9.03689 1.90025 9.18555 2.29978 9.18259C4.39839 9.16699 6.49711 9.16586 8.59572 9.18316C9.00999 9.18657 9.09834 9.01754 9.09215 8.64304C9.07437 7.58205 9.08596 6.52059 9.08596 5.45925Z" fill="#000" stroke="#000" strokeWidth="1" />
                                    <path d="M5.48409 14.029C6.55236 14.029 7.62074 14.0249 8.689 14.0303C9.51384 14.0346 9.86835 14.3763 9.87071 15.1889C9.8769 17.4067 9.87724 19.6246 9.87038 21.8424C9.86801 22.6204 9.51013 22.9875 8.72513 22.9915C6.53232 23.0026 4.33952 23.0033 2.14671 22.9909C1.38355 22.9866 1.01261 22.6039 1.00867 21.8215C0.997412 19.6036 0.996511 17.3858 1.00957 15.1679C1.01418 14.3833 1.38512 14.0358 2.16697 14.0308C3.27249 14.0239 4.37835 14.029 5.48409 14.029ZM9.08516 18.4867C9.08516 17.4254 9.07795 16.3641 9.08955 15.3028C9.09303 14.9814 9.01639 14.8175 8.65411 14.8194C6.51803 14.831 4.38183 14.8304 2.24564 14.8197C1.90035 14.818 1.78544 14.9546 1.78646 15.2886C1.79343 17.4302 1.79512 19.5719 1.78511 21.7133C1.78331 22.0875 1.93321 22.2083 2.28863 22.2067C4.38724 22.1972 6.48607 22.1946 8.58467 22.2085C8.98544 22.2111 9.09855 22.0545 9.0918 21.6704C9.07312 20.6096 9.08527 19.5481 9.08516 18.4867Z" fill="#000" stroke="#000" strokeWidth="1" />
                                    <path d="M11.8867 3.51653C11.8867 3.26645 11.8867 3.06019 11.8867 2.80658C15.5837 2.80658 19.2782 2.80658 23.0008 2.80658C23.0008 3.03742 23.0008 3.25723 23.0008 3.51653C19.3107 3.51653 15.6299 3.51653 11.8867 3.51653Z" fill="#000" stroke="#000" strokeWidth="1" />
                                    <path d="M11.8906 16.524C11.8906 16.2643 11.8906 16.0437 11.8906 15.7906C15.592 15.7906 19.2704 15.7906 22.9886 15.7906C22.9886 16.0262 22.9886 16.2584 22.9886 16.524C19.3055 16.524 15.6266 16.524 11.8906 16.524Z" fill="#000" stroke="#000" strokeWidth="1" />
                                    <path d="M19.0614 7.48438C19.0614 7.73582 19.0614 7.95677 19.0614 8.20969C16.6681 8.20969 14.297 8.20969 11.8965 8.20969C11.8965 7.96644 11.8965 7.74561 11.8965 7.48438C14.2619 7.48438 16.6338 7.48438 19.0614 7.48438Z" fill="#000" stroke="#000" strokeWidth="1" />
                                    <path d="M11.8965 21.2016C11.8965 20.9478 11.8965 20.7288 11.8965 20.4771C14.292 20.4771 16.6588 20.4771 19.0551 20.4771C19.0551 20.7237 19.0551 20.9424 19.0551 21.2016C16.6849 21.2016 14.3176 21.2016 11.8965 21.2016Z" fill="#000" stroke="#000" strokeWidth="1" />
                                </svg>
                                <h3 className="menu-text">Subscription</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="/allPackagesPage" className={`menus p-2 d-flex borderBottom ${sidebarOpen === '' ? 'justify-content-center' : ''} ${activeLink === 'allPackagesPage' ? 'active' : ''}`} onClick={() => handleActiveWithOutLink('allPackagesPage')} >
                                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.6797 28.2409C8.83891 28.2409 5.35076 26.0661 3.64845 22.6452C1.48957 20.729 0.254028 17.9911 0.254028 15.1035C0.254028 9.53545 4.76795 5.02153 10.3356 5.02153C14.1602 5.02153 17.6487 7.1857 19.3567 10.6051C21.5261 12.5243 22.7613 15.2585 22.7613 18.1589C22.7613 23.7266 18.2474 28.2409 12.6797 28.2409ZM15.771 5.30348C14.7554 5.30348 14.7554 3.75916 15.771 3.75916H22.7496C23.7651 3.75916 23.7651 5.30348 22.7496 5.30348H15.771ZM21.6728 25.7327C20.6572 25.7327 20.6572 24.1884 21.6728 24.1884H28.6514C29.6669 24.1884 29.6669 25.7327 28.6514 25.7327H21.6728ZM24.0059 18.9231C22.9903 18.9231 22.9903 17.3788 24.0059 17.3788H30.9845C32 17.3788 32 18.9231 30.9845 18.9231H24.0059ZM21.6728 12.1135C20.6572 12.1135 20.6572 10.5692 21.6728 10.5692H28.6514C29.6669 10.5692 29.6669 12.1135 28.6514 12.1135H21.6728ZM2.6155 18.7602C2.60378 18.5614 2.59773 18.3607 2.59773 18.1589C2.59773 12.5908 7.11166 8.07692 12.6797 8.07692C13.7898 8.07692 14.8579 8.25645 15.8568 8.58792C14.3102 7.27641 12.3683 6.56585 10.3356 6.56585C5.62062 6.56585 1.79798 10.3881 1.79798 15.1035C1.79798 16.3878 2.07237 17.598 2.6155 18.7602ZM17.6491 18.9311C16.6335 18.9311 16.6335 17.3867 17.6491 17.3867H19.046C20.0616 17.3867 20.0616 18.9311 19.046 18.9311H17.6491ZM6.31304 18.9311C5.29747 18.9311 5.29747 17.3867 6.31304 17.3867H7.70996C8.72553 17.3867 8.72553 18.9311 7.70996 18.9311H6.31304ZM11.9075 11.6834C11.9075 10.6678 13.4515 10.6678 13.4515 11.6834V12.3301C14.952 12.6868 16.025 14.0312 16.025 15.5858C16.025 16.6013 14.4807 16.6013 14.4807 15.5858C14.4807 14.5887 13.6764 13.7841 12.6793 13.7841C11.6827 13.7841 10.8784 14.5891 10.8784 15.5858C10.8784 16.5805 11.6849 17.3871 12.6793 17.3871C14.5268 17.3871 16.025 18.8849 16.025 20.7324C16.025 22.2869 14.952 23.6313 13.4515 23.9881V24.634C13.4515 25.6496 11.9075 25.6496 11.9075 24.634V23.9885C10.4108 23.6351 9.33404 22.2854 9.33404 20.7324C9.33404 19.7168 10.8784 19.7168 10.8784 20.7324C10.8784 21.7162 11.6868 22.547 12.6793 22.5337C13.6722 22.547 14.4807 21.7162 14.4807 20.7324C14.4807 19.7376 13.6741 18.9311 12.6793 18.9311C10.8323 18.9311 9.33404 17.4332 9.33404 15.5858C9.33404 14.0331 10.4108 12.6831 11.9075 12.3297V11.6834ZM12.6797 26.6965C17.3947 26.6965 21.2173 22.8739 21.2173 18.1589C21.2173 13.4435 17.3947 9.62125 12.6797 9.62125C7.96433 9.62125 4.14168 13.4435 4.14168 18.1589C4.14168 22.8743 7.96433 26.6965 12.6797 26.6965Z" fill="#000" strokeWidth="2" />
                                </svg>
                                <h3 className="menu-text">Package</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="/requestPage" className={`menus p-2 d-flex borderBottom ${sidebarOpen === '' ? 'justify-content-center' : ''} ${activeLink === 'requestPage' ? 'active' : ''}`} onClick={() => handleActiveWithOutLink('requestPage')} >
                                <Icon icon="carbon:request-quote" width="1.5em" height="1.5em" />
                                <h3 className="menu-text">Request</h3>
                            </Link>
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li className='borderBottom' ></li>
                        <li>
                            <Link to="/systemSettingPage" className={`menus p-2 d-flex borderBottom ${sidebarOpen === '' ? 'justify-content-center' : ''} ${activeLink === 'systemSettingPage' || activeLink === 'websiteSettingPage' || activeLink === 'manageFaqPage' || activeLink === 'paymentSettingPage' ? 'active' : ''}`} data-bs-toggle="collapse" data-bs-target="#collapseSettings" onClick={() => handleActiveDropAndLink('systemSettingPage')} >
                                <div className="flex-grow-1">
                                    <Icon icon="solar:settings-outline" width="1.5em" height="1.5em" />
                                    <h3 className="menu-text">Settings</h3>
                                </div>
                                <div className="">
                                    {SettingsDropOpen ? <Icon icon="ri:arrow-up-s-fill" width="1.5em" height="1.5em" /> : <Icon icon="ri:arrow-down-s-fill" width="1.5em" height="1.5em" />}
                                </div>
                            </Link>
                            <div id="collapseSettings" className={`collapse collapse-menu p-0 ${SettingsDropOpen ? 'show' : 'hide'}`}>
                                <ul className='list-unstyled p-0'>
                                    <li>
                                        <Link to="/systemSettingPage" className={`menus p-2 d-flex borderBottom ${sidebarOpen === '' ? 'justify-content-center' : ''} ${activeLink === 'systemSettingPage' ? 'active' : ''}`} onClick={() => handleActiveLink('systemSettingPage')} >
                                            <Icon icon="icon-park-outline:new-computer" width="1.4em" height="1.4em" />
                                            <h3 className="menu-text">System Settings</h3>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/websiteSettingPage" className={`menus p-2 d-flex borderBottom ${sidebarOpen === '' ? 'justify-content-center' : ''} ${activeLink === 'websiteSettingPage' ? 'active' : ''}`} onClick={() => handleActiveLink('websiteSettingPage')} >
                                            <svg width="24" height="18" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.125 4.5625H8.4375V5.5H13.125V4.5625ZM13.125 6.4375H8.4375V7.375H13.125V6.4375ZM11.25 8.3125H8.4375V9.25H11.25V8.3125ZM6.5625 4.5625H1.875V9.25H6.5625V4.5625ZM0 0.8125V13H15V0.8125H0ZM14.0625 12.0625H0.9375L0.975 2.6875H14.0625V12.0625Z" fill="#000" strokeWidth="1" />
                                            </svg>
                                            <h3 className="menu-text">Website Settings</h3>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/manageFaqPage" className={`menus p-2 d-flex borderBottom ${sidebarOpen === '' ? 'justify-content-center' : ''} ${activeLink === 'manageFaqPage' ? 'active' : ''}`} onClick={() => handleActiveLink('manageFaqPage')} >
                                            <Icon icon="mingcute:question-line" width="1.5em" height="1.5em" />
                                            <h3 className="menu-text">Manage Faq</h3>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/paymentSettingPage" className={`menus p-2 d-flex borderBottom ${sidebarOpen === '' ? 'justify-content-center' : ''} ${activeLink === 'paymentSettingPage' ? 'active' : ''}`} onClick={() => handleActiveLink('paymentSettingPage')} >
                                            <svg width="24" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.05219 8.69562L6.51594 8.23187L5.67438 7.38999L5.21062 7.85437C4.94062 7.67562 4.63938 7.54218 4.3175 7.45843V6.76468H2.82375V7.45843C2.49469 7.54343 2.18656 7.68062 1.91219 7.8653L1.46687 7.41999L0.625 8.26155L1.07781 8.71437C0.904687 8.97968 0.774688 9.27468 0.693438 9.58937H0V11.0819H0.693125C0.776562 11.4041 0.91 11.7062 1.08906 11.9762L0.625 12.4403L1.46656 13.2812L1.93062 12.8175C2.20125 12.9966 2.50375 13.1306 2.82656 13.2141V13.9062H4.31437V13.2137C4.63 13.1325 4.92594 13.0019 5.19187 12.8291L5.67438 13.3112L6.51594 12.4703L6.04063 11.9947C6.22656 11.7187 6.36375 11.4084 6.44875 11.0778H7.14125V9.59437H6.44875C6.36594 9.27062 6.23219 8.96687 6.05219 8.69562ZM3.57062 11.5597C2.89469 11.5597 2.34656 11.0116 2.34656 10.3356C2.34656 9.65968 2.89469 9.11155 3.57062 9.11155C4.24656 9.11155 4.79469 9.65968 4.79469 10.3356C4.79469 11.0116 4.24656 11.5597 3.57062 11.5597Z" fill="black" />
                                                <path d="M0 1.09375V6.45219H1.25V2.34375H9.76562V3.965H10.84V2.34375H13.75V3.77344C12.6725 4.05125 11.875 5.02687 11.875 6.19156C11.875 7.35625 12.6725 8.33187 13.75 8.60937V9.84375H10.84V8.16406H9.76562V9.84375H8.09906V11.0937H15V8.60937V7.67594V7.44156H14.375C13.6847 7.44156 13.125 6.88187 13.125 6.19156C13.125 5.50125 13.6847 4.94156 14.375 4.94156H15V4.64844V3.77344V1.09375H0Z" fill="black" />
                                                <path d="M10.8334 5.12064H9.76562V7.06689H10.8334V5.12064Z" fill="black" />
                                            </svg>
                                            <h3 className="menu-text">Payment Settings</h3>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link className={`menus p-2 d-flex borderBottom ${sidebarOpen === '' ? 'justify-content-center' : ''} ${activeLink === 'logout' ? 'active' : ''}`} onClick={() => handleActiveWithOutLink('logout')} data-bs-toggle="offcanvas" data-bs-target="#logoutCanvas" aria-controls="logoutCanvas" >
                                <Icon icon="material-symbols:logout" width="1.5em" height="1.5em" />
                                <h3 className="menu-text">Logout</h3>
                            </Link>
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>


            {/* Logout */}

            <div className="offcanvas offcanvas-end p-2" data-bs-backdrop="static" tabIndex="-1" id="logoutCanvas" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header ps-0 modalHighborder p-1">
                    <Link type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16">
                            <path fill="#B50000" fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                        </svg>
                    </Link>
                    <h2 className="offcanvas-title fontWeight900" id="staticBackdropLabel">Logout Message</h2>
                </div>
                <div className="offcanvas-body p-0">
                    {LogoutSuccess
                        ?
                        <>
                            <div>
                                <p className='border-bottom p-2'>Logout</p>
                                <div className="text-center p-5">
                                    <p className='mb-2'><img src="./images/logout.svg" alt="" /></p>
                                    <h1 className='mb-2'>Are you Sure?</h1>
                                    <h3 className='greyText'>Are you Sure you want to logout?</h3>
                                    <p className='text-center p-3'>
                                        <button className='btn deleteButtons text-white' onClick={handleLogout}>Logout</button>
                                        <button className='btn cancelButtons ms-3' data-bs-dismiss="offcanvas" aria-label="Close">Cancel</button>
                                    </p>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div>
                                <p className='modalLightBorder p-2 mb-0'>Logout</p>
                                <div className="mt-3">
                                    <div className='correvtSVG p-3 pt-4 rounded-circle'><img src="./images/Correct.svg" alt="" /></div>
                                    <div className="updatetext border m-4 border-2  ms-5 greydiv rounded-3 text-center greyText p-5">
                                        <p className='warningHeading'>Successful Updated</p>
                                        <p className='greyText warningText pt-2'>Your Changes has been<br />Successfully Saved</p>
                                    </div>
                                    <button className='btn contbtn continueButtons text-white' type='button' data-bs-dismiss="offcanvas" aria-label="Close" >Continue</button>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>

        </Container>
    );
};

export default Sidebar;














{/* <li>
<Link to="/allPackagesPage" className={`menus p-2 d-flex borderBottom ${sidebarOpen === '' ? 'justify-content-center' : ''} ${activeLink === 'allPackagesPage' || activeLink === 'linkFeature' ? 'active' : ''}`} data-bs-toggle="collapse" data-bs-target="#collapsePackage" onClick={() => handleActiveDropAndLink('allPackagesPage')} >
    <div className="flex-grow-1">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6797 28.2409C8.83891 28.2409 5.35076 26.0661 3.64845 22.6452C1.48957 20.729 0.254028 17.9911 0.254028 15.1035C0.254028 9.53545 4.76795 5.02153 10.3356 5.02153C14.1602 5.02153 17.6487 7.1857 19.3567 10.6051C21.5261 12.5243 22.7613 15.2585 22.7613 18.1589C22.7613 23.7266 18.2474 28.2409 12.6797 28.2409ZM15.771 5.30348C14.7554 5.30348 14.7554 3.75916 15.771 3.75916H22.7496C23.7651 3.75916 23.7651 5.30348 22.7496 5.30348H15.771ZM21.6728 25.7327C20.6572 25.7327 20.6572 24.1884 21.6728 24.1884H28.6514C29.6669 24.1884 29.6669 25.7327 28.6514 25.7327H21.6728ZM24.0059 18.9231C22.9903 18.9231 22.9903 17.3788 24.0059 17.3788H30.9845C32 17.3788 32 18.9231 30.9845 18.9231H24.0059ZM21.6728 12.1135C20.6572 12.1135 20.6572 10.5692 21.6728 10.5692H28.6514C29.6669 10.5692 29.6669 12.1135 28.6514 12.1135H21.6728ZM2.6155 18.7602C2.60378 18.5614 2.59773 18.3607 2.59773 18.1589C2.59773 12.5908 7.11166 8.07692 12.6797 8.07692C13.7898 8.07692 14.8579 8.25645 15.8568 8.58792C14.3102 7.27641 12.3683 6.56585 10.3356 6.56585C5.62062 6.56585 1.79798 10.3881 1.79798 15.1035C1.79798 16.3878 2.07237 17.598 2.6155 18.7602ZM17.6491 18.9311C16.6335 18.9311 16.6335 17.3867 17.6491 17.3867H19.046C20.0616 17.3867 20.0616 18.9311 19.046 18.9311H17.6491ZM6.31304 18.9311C5.29747 18.9311 5.29747 17.3867 6.31304 17.3867H7.70996C8.72553 17.3867 8.72553 18.9311 7.70996 18.9311H6.31304ZM11.9075 11.6834C11.9075 10.6678 13.4515 10.6678 13.4515 11.6834V12.3301C14.952 12.6868 16.025 14.0312 16.025 15.5858C16.025 16.6013 14.4807 16.6013 14.4807 15.5858C14.4807 14.5887 13.6764 13.7841 12.6793 13.7841C11.6827 13.7841 10.8784 14.5891 10.8784 15.5858C10.8784 16.5805 11.6849 17.3871 12.6793 17.3871C14.5268 17.3871 16.025 18.8849 16.025 20.7324C16.025 22.2869 14.952 23.6313 13.4515 23.9881V24.634C13.4515 25.6496 11.9075 25.6496 11.9075 24.634V23.9885C10.4108 23.6351 9.33404 22.2854 9.33404 20.7324C9.33404 19.7168 10.8784 19.7168 10.8784 20.7324C10.8784 21.7162 11.6868 22.547 12.6793 22.5337C13.6722 22.547 14.4807 21.7162 14.4807 20.7324C14.4807 19.7376 13.6741 18.9311 12.6793 18.9311C10.8323 18.9311 9.33404 17.4332 9.33404 15.5858C9.33404 14.0331 10.4108 12.6831 11.9075 12.3297V11.6834ZM12.6797 26.6965C17.3947 26.6965 21.2173 22.8739 21.2173 18.1589C21.2173 13.4435 17.3947 9.62125 12.6797 9.62125C7.96433 9.62125 4.14168 13.4435 4.14168 18.1589C4.14168 22.8743 7.96433 26.6965 12.6797 26.6965Z" fill="#000" strokeWidth="2" />
        </svg>
        <h3 className="menu-text">Package</h3>
    </div>
    <div className="">
        {AddonDropOpen ? <Icon icon="ri:arrow-up-s-fill" width="1.5em" height="1.5em" /> : <Icon icon="ri:arrow-down-s-fill" width="1.5em" height="1.5em" />}
    </div>
</Link>
<div id="collapsePackage" className={`collapse collapse-menu p-0 ${AddonDropOpen ? 'show' : 'hide'}`}>
    <ul className='list-unstyled p-0 bg-white'>
        <li>
            <Link to="/allPackagesPage" className={`menus p-2 d-flex borderBottom ${sidebarOpen === '' ? 'justify-content-center' : ''} ${activeLink === 'allPackagesPage' ? 'active' : ''}`} onClick={() => handleActiveLink('allPackagesPage')} >
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6797 28.2409C8.83891 28.2409 5.35076 26.0661 3.64845 22.6452C1.48957 20.729 0.254028 17.9911 0.254028 15.1035C0.254028 9.53545 4.76795 5.02153 10.3356 5.02153C14.1602 5.02153 17.6487 7.1857 19.3567 10.6051C21.5261 12.5243 22.7613 15.2585 22.7613 18.1589C22.7613 23.7266 18.2474 28.2409 12.6797 28.2409ZM15.771 5.30348C14.7554 5.30348 14.7554 3.75916 15.771 3.75916H22.7496C23.7651 3.75916 23.7651 5.30348 22.7496 5.30348H15.771ZM21.6728 25.7327C20.6572 25.7327 20.6572 24.1884 21.6728 24.1884H28.6514C29.6669 24.1884 29.6669 25.7327 28.6514 25.7327H21.6728ZM24.0059 18.9231C22.9903 18.9231 22.9903 17.3788 24.0059 17.3788H30.9845C32 17.3788 32 18.9231 30.9845 18.9231H24.0059ZM21.6728 12.1135C20.6572 12.1135 20.6572 10.5692 21.6728 10.5692H28.6514C29.6669 10.5692 29.6669 12.1135 28.6514 12.1135H21.6728ZM2.6155 18.7602C2.60378 18.5614 2.59773 18.3607 2.59773 18.1589C2.59773 12.5908 7.11166 8.07692 12.6797 8.07692C13.7898 8.07692 14.8579 8.25645 15.8568 8.58792C14.3102 7.27641 12.3683 6.56585 10.3356 6.56585C5.62062 6.56585 1.79798 10.3881 1.79798 15.1035C1.79798 16.3878 2.07237 17.598 2.6155 18.7602ZM17.6491 18.9311C16.6335 18.9311 16.6335 17.3867 17.6491 17.3867H19.046C20.0616 17.3867 20.0616 18.9311 19.046 18.9311H17.6491ZM6.31304 18.9311C5.29747 18.9311 5.29747 17.3867 6.31304 17.3867H7.70996C8.72553 17.3867 8.72553 18.9311 7.70996 18.9311H6.31304ZM11.9075 11.6834C11.9075 10.6678 13.4515 10.6678 13.4515 11.6834V12.3301C14.952 12.6868 16.025 14.0312 16.025 15.5858C16.025 16.6013 14.4807 16.6013 14.4807 15.5858C14.4807 14.5887 13.6764 13.7841 12.6793 13.7841C11.6827 13.7841 10.8784 14.5891 10.8784 15.5858C10.8784 16.5805 11.6849 17.3871 12.6793 17.3871C14.5268 17.3871 16.025 18.8849 16.025 20.7324C16.025 22.2869 14.952 23.6313 13.4515 23.9881V24.634C13.4515 25.6496 11.9075 25.6496 11.9075 24.634V23.9885C10.4108 23.6351 9.33404 22.2854 9.33404 20.7324C9.33404 19.7168 10.8784 19.7168 10.8784 20.7324C10.8784 21.7162 11.6868 22.547 12.6793 22.5337C13.6722 22.547 14.4807 21.7162 14.4807 20.7324C14.4807 19.7376 13.6741 18.9311 12.6793 18.9311C10.8323 18.9311 9.33404 17.4332 9.33404 15.5858C9.33404 14.0331 10.4108 12.6831 11.9075 12.3297V11.6834ZM12.6797 26.6965C17.3947 26.6965 21.2173 22.8739 21.2173 18.1589C21.2173 13.4435 17.3947 9.62125 12.6797 9.62125C7.96433 9.62125 4.14168 13.4435 4.14168 18.1589C4.14168 22.8743 7.96433 26.6965 12.6797 26.6965Z" fill="#000" strokeWidth="2" />
                </svg>
                <h3 className="menu-text">Package Details</h3>
            </Link>
        </li>
        <li>
            <Link to="/linkFeature" className={`menus p-2 d-flex borderBottom ${sidebarOpen === '' ? 'justify-content-center' : ''} ${activeLink === 'linkFeature' ? 'active' : ''}`} onClick={() => handleActiveLink('linkFeature')} >
                <Icon icon="fluent:note-add-48-regular" width="1.5em" height="1.5em" />
                <h3 className="menu-text">Link Features</h3>
            </Link>
        </li>
    </ul>
</div>
// {/* <Link to="/allPackagesPage" className={`menus p-2 d-flex borderBottom ${sidebarOpen === '' ? 'justify-content-center' : ''} ${activeLink === 'allPackagesPage' ? 'active' : ''}`} onClick={() => handleActiveWithOutLink('allPackagesPage')} ></Link>
</li> */}
