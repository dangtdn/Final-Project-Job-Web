import React, { useContext } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";
import PopupLogin from "@/components/register/popup-login";
import PopupRegister from "@/components/register/popup-register";
import LostPassword from "@/components/register/lost-password";

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <Header />
      {children}
      <ToastContainer />
      <Footer />
      <PopupLogin />
      <PopupRegister />
      <LostPassword />
    </>
  );
};

export default Layout;
