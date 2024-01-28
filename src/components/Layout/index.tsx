import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Common_Parts/Header';
import Footer from '../Common_Parts/Footer';
 
function Layout() {
  return (
   <>
    <Header />
    <Outlet />
    <Footer />
   </>
  )
}

export default Layout
