import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from '../Pages/AdminDashboard'
import styled from 'styled-components';
import AllSchools from '../Pages/AllSchools';
import ViewSchoolDetails from '../Pages/ViewSchoolDetails';
import AddSchool from '../Pages/AddSchool';
import Addon from '../Pages/Addon';
import AddAddon from '../Pages/AddAddon';
import AddFeature from '../Pages/AddPermission';
import Packages from '../Pages/Packages';
import Subscription from '../Pages/Subscription';
import Request from '../Pages/Request';
import SystemSetting from '../Pages/SystemSetting';
import WebsiteSetting from '../Pages/WebsiteSetting';
import ManageFaq2 from '../Pages/ManageFaq2';
import PaymentSetting from '../Pages/PaymentSetting';
import MyForm from '../Pages/aaa';

const Container = styled.div`
height: 90vh;
  overflow: scroll;
`;

const Main = () => {
  return (
    <>
      <Container>
        <Routes>
          <Route path='/' element={<AdminDashboard/>}/>
          <Route path="/allSchoolsPage" element={<AllSchools />} />
          <Route path="/viewSchoolDetails/:schoolId" element={<ViewSchoolDetails />} />
          <Route path="/addSchoolsPage" element={<AddSchool />} />
          <Route path="/addons" element={<Addon />} />
          <Route path="/addAddons" element={<AddAddon />} />
          <Route path="/addfeatures" element={<AddFeature />} />
          <Route path="/allPackagesPage" element={<Packages />} />
          <Route path="/subscriptionPage" element={<Subscription/>} />
          <Route path="/requestPage" element={<Request />} />
          <Route path="/systemSettingPage" element={<SystemSetting />} />
          <Route path="/websiteSettingPage" element={<WebsiteSetting />} />
          <Route path="/manageFaqPage" element={<ManageFaq2 />} />
          <Route path="/paymentSettingPage" element={<PaymentSetting />} />
          <Route path="/a" element={<MyForm/>} />
        </Routes>
      </Container>
    </>
  )
}

export default Main