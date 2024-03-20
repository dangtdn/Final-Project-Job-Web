import dynamic from "next/dynamic";
import React, { useContext } from "react";
import ThemeContextProvider, {
  ThemeContext,
} from "../../../context/ThemeContext";
import MainHeader from "../header";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer/Footer";
import PopupLogin from "@/components/register/popup-login";
import PopupRegister from "@/components/register/popup-register";
import LostPassword from "@/components/register/lost-password";

const Layout = ({ children }: { children: React.ReactElement }) => {
  // const { isLogIn } = useContext(ThemeContext) as any;
  const isLogIn = true;

  const renderBody = () => {
    if (isLogIn) {
      return (
        <>
          <MainHeader isLogin={true}>{children}</MainHeader>
        </>
      );
    } else {
      return (
        <>
          <MainHeader isLogin={false}>{children}</MainHeader>
        </>
      );
    }
  };

  return (
    <>
      <ThemeContextProvider>
        {renderBody()}
        <ToastContainer />
        <PopupLogin />
        <PopupRegister />
        <LostPassword />
      </ThemeContextProvider>
    </>
  );
};

export default Layout;
