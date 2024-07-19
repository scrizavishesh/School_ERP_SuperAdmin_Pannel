import React, { createContext, useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../Layouts/Navbar';
import Sidebar from '../Layouts/Sidebar';
import Main from '../Main/Main';

const Container = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    height: 100vh;
`;

const SidebarContainer = styled.div`
    flex-shrink: 0;
    width: ${(props) => (props.sidebarOpen ? '224px' : '64px')};
    /* width: ${(props) => (props.sidebarOpen ? '14%' : '4%')}; */
    transition: width 0.6s ease, transform 0.6s ease;
    background-color: var(--sidebarBackground);
    z-index: 2;

    @media screen and (max-width: 1000px) {
        transform: translateX(${(props) => (props.sidebarOpen ? '0' : '-100%')});
        position: absolute;
        z-index: 999;
        top: 0;
        bottom: 0;
        left: 0;
        width: 200px; /* Fixed width for small screens */
    }
`;

const MainContainer = styled.div`
    flex-grow: 1;
    width: ${(props) => (props.sidebarOpen ? '85%' : '96%')};
    transition: all width 0.6s ease; 
    /* z-index: 1; */
    background-color: #F2F3F6;

    @media screen and (max-width: 1000px) {
        width: 100% !important;
    }
`;

const SidebarContext = createContext();
export const useSidebarContext = () => useContext(SidebarContext);

const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(() => window.innerWidth > 1000);

    useEffect(() => {
        const handleResize = () => {
            setSidebarOpen(window.innerWidth > 1000);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <SidebarContext.Provider value={{ sidebarOpen, toggleSidebar }}>
            <Container>
                <SidebarContainer sidebarOpen={sidebarOpen}>
                    <Sidebar />
                </SidebarContainer>
                <MainContainer className="container-fluid" sidebarOpen={sidebarOpen}>
                    <div className="row bg-white">
                        <Navbar />
                    </div>
                    <div className="row">
                        <Main />
                    </div>
                </MainContainer>
            </Container>
        </SidebarContext.Provider>
    );
};

export default DashboardLayout;
