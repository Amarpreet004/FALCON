"use client" 

import React from 'react'
import { Outlet } from "react-router-dom";
import { NavbarDemo } from '../_components/navBar';
import Footer from '../_components/footer';

const AppRoutes = () => {
  return (
    <>
      <NavbarDemo/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default AppRoutes