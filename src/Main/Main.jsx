import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from '../Pages/AdminDashboard'
import styled from 'styled-components';
import AllSchools from '../Pages/AllSchools';
import AddSchool from '../Pages/AddSchool';
import Addon from '../Pages/Addon';
import Packages from '../Pages/Packages';
import Subscription from '../Pages/Subscription';
import Request from '../Pages/Request';
import SystemSetting from '../Pages/SystemSetting';
import WebsiteSetting from '../Pages/WebsiteSetting';
import ManageFaq2 from '../Pages/ManageFaq2';
import PaymentSetting from '../Pages/PaymentSetting';
import AddAddons from '../Pages/AddAddon';
import AddFeature from '../Pages/AddFeature';

const Container = styled.div`
  background-color: #F2F3F6;
`;

const Main = () => {
  return (
    <>
      <Container>
        <Routes>
          <Route  path='/' element={<AdminDashboard/>}/>
          <Route path="/allSchoolsPage" element={<AllSchools />} />
          <Route path="/addSchoolsPage" element={<AddSchool />} />
          <Route path="/addons" element={<Addon />} />
          <Route path="/allPackagesPage" element={<Packages />} />
          <Route path="/subscriptionPage" element={<Subscription/>} />
          <Route path="/requestPage" element={<Request />} />
          <Route path="/systemSettingPage" element={<SystemSetting />} />
          <Route path="/websiteSettingPage" element={<WebsiteSetting />} />
          <Route path="/manageFaqPage" element={<ManageFaq2 />} />
          <Route path="/paymentSettingPage" element={<PaymentSetting />} />
          <Route path="/addaddon" element={<AddAddons />} />
          <Route path="/addfeature" element={<AddFeature />} />
        </Routes>
      </Container>
    </>
  )
}

export default Main