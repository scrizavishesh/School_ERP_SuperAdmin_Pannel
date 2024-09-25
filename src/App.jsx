import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout2 from './Dashboard/MainLayout2';
// import toast, { Toaster } from 'react-hot-toast';

import Login from './Pages/Login';

function App() {

  const token = localStorage.getItem('token');
  // console.log(token)

  return (
    <>
      
      {token 
        ? 
          <BrowserRouter>
            <MainLayout2 />
          </BrowserRouter>
        :
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        }
    </>
  );
}

export default App;