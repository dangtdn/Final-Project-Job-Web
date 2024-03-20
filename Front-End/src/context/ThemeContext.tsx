"use client";

import React, { createContext } from "react";
import { toast } from "react-toastify";
import useUser from "../lib/auth/user";
import { authAxios, Axios } from "../lib/utils/axiosKits";
import { localRemove } from "../lib/utils/localStore";
import { usePathname, useRouter } from "next/navigation";
import { AxiosRequestConfig } from "axios";
import useSWR from "swr";
import sweetAlert from "sweetalert";

type ThemeContextType = {
  apiEndPoint?: string;
  body?: false | HTMLBodyElement | null;
  windowWidth?: number | false;
  windowHeight?: number | false;
  isMobileMenuOpen?: boolean;
  setIsMobileMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isSideNavOpen?: boolean;
  setIsSideNavOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  LoginPopup?: boolean;
  LoginPopupHandler?: () => void;
  setLoginPopup?: React.Dispatch<React.SetStateAction<boolean>>;
  RegisterPopup?: boolean;
  RegisterPopupHandler?: () => void;
  setRegisterPopup?: React.Dispatch<React.SetStateAction<boolean>>;
  lostPasswordShow?: boolean;
  lostPasswordHandler?: () => void;
  categoryData?: any[];
  categoryError?: any;
  bookmarkData: any;
  bookmarkError: any;
  // categoryMutate,
  logOutHandler?: () => Promise<void>;
  frontendLogOutHandler?: () => Promise<void>;
  recentNotification: any;
  recentNotificationError: any;
};

const defaultThemeContext: ThemeContextType = {
  apiEndPoint: "",
  body: null,
  windowWidth: undefined,
  windowHeight: undefined,
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: undefined,
  isSideNavOpen: false,
  setIsSideNavOpen: undefined,
  LoginPopup: false,
  LoginPopupHandler: undefined,
  setLoginPopup: undefined,
  RegisterPopup: false,
  RegisterPopupHandler: undefined,
  setRegisterPopup: undefined,
  lostPasswordShow: false,
  lostPasswordHandler: undefined,
  categoryData: undefined,
  categoryError: undefined,
  // categoryMutate: undefined,
  recentNotification: undefined,
  recentNotificationError: undefined,
  bookmarkData: undefined,
  bookmarkError: undefined,
  // bookmarkMutate: undefined,
  // hydrationFix: false,
};

const fetcher = (url: AxiosRequestConfig<any>) =>
  Axios(url).then((res: any) => res.data.data);
const authFetcher = (url: string) =>
  authAxios(url).then((res: any) => res.data.data);
const JobCategoryAPI = "/categories";

export const ThemeContext =
  createContext<ThemeContextType>(defaultThemeContext);

const ThemeContextProvider = ({ children }: { children: any }) => {
  const apiEndPoint = `/api`;
  const pathName = usePathname();
  const [windowWidth, setWindowWidth] = React.useState(
    typeof window === "object" && window.innerWidth
  );
  const [windowHeight, setWindowHeight] = React.useState(
    typeof window === "object" && window.innerHeight
  );
  const body = typeof window === "object" && document.querySelector("body");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false); // mobile menu open
  const [isSideNavOpen, setIsSideNavOpen] = React.useState(false); // side nav open
  const [LoginPopup, setLoginPopup] = React.useState(false); // Login Popup
  const [RegisterPopup, setRegisterPopup] = React.useState(false); // register popup
  const [lostPasswordShow, setLostPasswordShow] = React.useState(false); // lost password popup

  // user after login fetch data
  const { user, loggedOut, loggedIn, mutate } = useUser() as any;

  // Frontend data fetching hooks
  const {
    data: categoryData,
    error: categoryError,
    mutate: categoryMutate,
  } = useSWR(JobCategoryAPI, fetcher, {
    revalidateOnFocus: false,
  });

  // user notification data fetching hooks
  const { data: recentNotification, error: recentNotificationError } = useSWR(
    loggedIn && `/notifications`,
    authFetcher
  );

  // user bookmark data fetching hooks
  const {
    data: bookmarkData,
    error: bookmarkError,
    mutate: bookmarkMutate,
  } = useSWR(
    pathName.split("/")[1] === "dashboard" && `/bookmarks`,
    authFetcher
  );

  const router = useRouter();

  React.useEffect(() => {
    const body = document.querySelector("body") as any;
    let resizeWindow = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
      window.innerWidth >= 768 && window.innerWidth < 1300
        ? body.setAttribute("data-sidebar-style", "overlay")
        : window.innerWidth <= 768
        ? body.setAttribute("data-sidebar-style", "overlay")
        : body.setAttribute("data-sidebar-style", "full");
    };
    body.setAttribute("data-typography", "poppins");
    body.setAttribute("data-theme-version", "light");
    body.setAttribute("data-theme-version", "dark");
    body.setAttribute("data-layout", "vertical");
    body.setAttribute("data-nav-headerbg", "color_1");
    body.setAttribute("data-headerbg", "color_1");
    body.setAttribute("data-sidebar-style", "overlay");
    body.setAttribute("data-sibebarbg", "color_1");
    body.setAttribute("data-primary", "color_1");
    body.setAttribute("data-sidebar-position", "fixed");
    body.setAttribute("data-header-position", "fixed");
    body.setAttribute("data-container", "wide");
    body.setAttribute("direction", "ltr");
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  const LoginPopupHandler = () => {
    setLoginPopup(!LoginPopup);
  };

  const RegisterPopupHandler = () => {
    setRegisterPopup(!RegisterPopup);
  };

  const lostPasswordHandler = () => {
    sweetAlert({
      title: "Lost Password",
      text: "Please contact the administrator at the 'Contact Us' page for support.",
      icon: "info",
      buttons: true,
      dangerMode: true,
    } as any);
  };

  const logOutHandler = async () => {
    try {
      await localRemove("UserData");
      await router.replace("/login");
      toast.success("You have successfully logged out", {
        position: "bottom-right",
        className: "foo-bar",
      });
    } catch (error: any) {
      toast.error(error.response.data.message, {
        position: "bottom-right",
        className: "foo-bar",
      });
    }
  };

  const frontendLogOutHandler = async () => {
    try {
      await localRemove("UserData");
      await router.replace("/login");
      toast.success("You have successfully logged out", {
        position: "bottom-right",
        className: "foo-bar",
      });
    } catch (error: any) {
      toast.error(error.response.data.message, {
        position: "bottom-right",
        className: "foo-bar",
      });
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        apiEndPoint,
        body,
        windowWidth,
        windowHeight,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        isSideNavOpen,
        setIsSideNavOpen,
        LoginPopup,
        LoginPopupHandler,
        setLoginPopup,
        RegisterPopup,
        RegisterPopupHandler,
        setRegisterPopup,
        lostPasswordShow,
        lostPasswordHandler,
        categoryData,
        categoryError,
        bookmarkData,
        bookmarkError,
        // categoryMutate,
        logOutHandler,
        frontendLogOutHandler,
        recentNotification,
        recentNotificationError,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
