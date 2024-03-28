"use client";

import styled from "@emotion/styled";
import _ from "lodash";
import Link from "next/link";
import React from "react";
import { HiChevronDown } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import { ThemeContext } from "../../../context/ThemeContext";
import Image from "../../optimize/image";
import { authAxios } from "@/lib/utils/axiosKits";
import useUser from "@/lib/auth/user";
import { usePathname } from "next/navigation";
import {
  AdminMenuList,
  DashboardMenuList,
  EmployerMenuList,
  Menu,
} from "@/components/@menuData/menu";
import { BiLogOut } from "react-icons/bi";
import { srcDefaultImg, srcDefaultLogo } from "@/constants/appConstants";
import { IoNotificationsCircle } from "react-icons/io5";
import moment from "moment";
import { Logo } from "@/components/icons";
import ImageOpt from "../../optimize/image";

const fetcher = (url: string) => authAxios(url).then((res) => res.data);

const Header = () => {
  const {
    isSideNavOpen,
    setIsSideNavOpen,
    windowWidth,
    recentNotification,
    recentNotificationError,
  } = React.useContext(ThemeContext) as any;
  const [show, setShow] = React.useState(false);
  const { user } = useUser();
  const userData = user;
  const [UserMenu, setUserMenu] = React.useState(false);
  const [notification, setNotification] = React.useState(false);
  const pathName = usePathname();
  let path = pathName.split("/");
  path = path[path.length - 1] as any;

  const newNotification =
    _.filter(recentNotification?.notification, (item) => {
      return _.lowerCase(item.status) === "unread";
    }).length > 0;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const SideNavMenuHandler = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const UserMenuHandler = () => {
    setUserMenu(!UserMenu);
  };

  return (
    <>
      <div className="fixed top-0 w-full py-2.5 xl:py-4 px-6 bg-white shadow-md z-50">
        <nav className="relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="xl:pl-5 lg:w-auto lg:pr-0 xl:w-80">
                {/* Desktop logo here ... */}
                <Link
                  href="/dashboard"
                  className="text-xl font-bold"
                  data-config-id="brand"
                >
                  <span className="hidden xl:flex items-center">
                    {/* <Logo
                      className="w-[146px] h-[33px] text-themePrimary"
                      dark={true}
                    /> */}
                    <ImageOpt
                      className="rounded-full object-cover object-right p-1 border border-solid border-gray-500"
                      src={srcDefaultLogo}
                      alt="Logo image"
                      width={100}
                      height={55}
                    />
                    <span className="flex align-items-center justify-content-center text-xl font-bold text-themePrimary">
                      Works
                    </span>
                  </span>
                  {/* Mobile Logo Text */}
                  <h1 className="m-0 pr-3 text-4xl font-bold xl:hidden lg:block">
                    TDT
                  </h1>
                </Link>
              </div>
              <div className="lg:hidden">
                <button
                  className="flex items-center"
                  onClick={SideNavMenuHandler}
                >
                  <svg
                    className="text-white bg-themePrimary block h-8 w-8 p-2 rounded"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                  </svg>
                </button>
              </div>
              <div className="hidden lg:block">
                <ul className="bg-white w-full z-50 menu-open md:space-x-8 space-x-6 font-normal hidden absolute left-0 top-20 lg:static lg:flex">
                  {Menu.map((item, index) => (
                    <li className="ml-6 xl:ml-0 xl:mb-0" key={index}>
                      <Link
                        href={item.link}
                        className={`text-themeDark text-sm  font-medium transition-all hover:text-themePrimary`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <ul className="flex items-center space-x-6 mr-6">
                <li className="relative !p-1 grid items-center">
                  <button
                    className={`text-themeDark relative hover:text-themePrimary ${
                      notification ? "!text-themePrimary" : ""
                    }`}
                    onClick={() => setNotification(!notification)}
                  >
                    {newNotification && (
                      <span className="w-2 h-2 absolute -top-1 -right-0.5 rounded-full bg-red-400" />
                    )}
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 11.18V8C13.9986 6.58312 13.4958 5.21247 12.5806 4.13077C11.6655 3.04908 10.3971 2.32615 9 2.09V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V2.09C5.60294 2.32615 4.33452 3.04908 3.41939 4.13077C2.50425 5.21247 2.00144 6.58312 2 8V11.18C1.41645 11.3863 0.910998 11.7681 0.552938 12.2729C0.194879 12.7778 0.00173951 13.3811 0 14V16C0 16.2652 0.105357 16.5196 0.292893 16.7071C0.48043 16.8946 0.734784 17 1 17H4.14C4.37028 17.8474 4.873 18.5954 5.5706 19.1287C6.26819 19.6621 7.1219 19.951 8 19.951C8.8781 19.951 9.73181 19.6621 10.4294 19.1287C11.127 18.5954 11.6297 17.8474 11.86 17H15C15.2652 17 15.5196 16.8946 15.7071 16.7071C15.8946 16.5196 16 16.2652 16 16V14C15.9983 13.3811 15.8051 12.7778 15.4471 12.2729C15.089 11.7681 14.5835 11.3863 14 11.18ZM4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4C9.06087 4 10.0783 4.42143 10.8284 5.17157C11.5786 5.92172 12 6.93913 12 8V11H4V8ZM8 18C7.65097 17.9979 7.30857 17.9045 7.00683 17.7291C6.70509 17.5536 6.45451 17.3023 6.28 17H9.72C9.54549 17.3023 9.29491 17.5536 8.99317 17.7291C8.69143 17.9045 8.34903 17.9979 8 18ZM14 15H2V14C2 13.7348 2.10536 13.4804 2.29289 13.2929C2.48043 13.1054 2.73478 13 3 13H13C13.2652 13 13.5196 13.1054 13.7071 13.2929C13.8946 13.4804 14 13.7348 14 14V15Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                  {windowWidth > 1020 && (
                    <NotificationMenu active={notification} />
                  )}
                </li>
              </ul>
              <div className="hidden lg:block">
                <div className="relative">
                  {userData && (
                    <div
                      className="flex items-center text-center cursor-pointer"
                      onClick={UserMenuHandler}
                    >
                      <div className="mr-3 lg:pl-4 lg:border-l lg:border-l-themeLighter flex items-center">
                        {userData?.avatar && (
                          <Image
                            className="rounded-full object-cover object-right p-1 border border-solid border-gray-500"
                            src={userData?.avatar}
                            alt="User image"
                            width={50}
                            height={50}
                          />
                        )}
                        {!userData?.avatar && (
                          <Image
                            className="rounded-full object-cover object-right p-1 border border-solid border-gray-500"
                            src={srcDefaultImg}
                            alt="User image"
                            width={50}
                            height={50}
                          />
                        )}
                      </div>
                      <div>
                        <p className="text-sm leading-8">
                          {userData?.fullName?.firstName}
                        </p>
                      </div>
                      <span
                        className={`ml-2 transition duration-200 ease-in-out ${
                          UserMenu ? "rotate-180" : ""
                        }`}
                      >
                        <HiChevronDown />
                      </span>
                    </div>
                  )}
                  {!(userData !== undefined) && (
                    <div>
                      <div className="flex gap-3 items-center">
                        <div>
                          <Skeleton circle width={40} height={40} />
                        </div>
                        <div>
                          <Skeleton width={120} height={20} />
                        </div>
                      </div>
                    </div>
                  )}
                  <DashboardMenu active={UserMenu} />
                </div>
              </div>
            </div>
            <div className="lg:hidden flex items-center gap-2">
              <ul className="flex items-center space-x-6 !mr-2">
                <li className="relative !p-1 grid items-center">
                  <button
                    className={`text-themeDark relative hover:text-themePrimary ${
                      notification ? "!text-themePrimary" : ""
                    }`}
                    onClick={() => setNotification(!notification)}
                  >
                    {newNotification && (
                      <span className="w-2 h-2 absolute -top-1 -right-0.5 rounded-full bg-red-400" />
                    )}
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 11.18V8C13.9986 6.58312 13.4958 5.21247 12.5806 4.13077C11.6655 3.04908 10.3971 2.32615 9 2.09V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V2.09C5.60294 2.32615 4.33452 3.04908 3.41939 4.13077C2.50425 5.21247 2.00144 6.58312 2 8V11.18C1.41645 11.3863 0.910998 11.7681 0.552938 12.2729C0.194879 12.7778 0.00173951 13.3811 0 14V16C0 16.2652 0.105357 16.5196 0.292893 16.7071C0.48043 16.8946 0.734784 17 1 17H4.14C4.37028 17.8474 4.873 18.5954 5.5706 19.1287C6.26819 19.6621 7.1219 19.951 8 19.951C8.8781 19.951 9.73181 19.6621 10.4294 19.1287C11.127 18.5954 11.6297 17.8474 11.86 17H15C15.2652 17 15.5196 16.8946 15.7071 16.7071C15.8946 16.5196 16 16.2652 16 16V14C15.9983 13.3811 15.8051 12.7778 15.4471 12.2729C15.089 11.7681 14.5835 11.3863 14 11.18ZM4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4C9.06087 4 10.0783 4.42143 10.8284 5.17157C11.5786 5.92172 12 6.93913 12 8V11H4V8ZM8 18C7.65097 17.9979 7.30857 17.9045 7.00683 17.7291C6.70509 17.5536 6.45451 17.3023 6.28 17H9.72C9.54549 17.3023 9.29491 17.5536 8.99317 17.7291C8.69143 17.9045 8.34903 17.9979 8 18ZM14 15H2V14C2 13.7348 2.10536 13.4804 2.29289 13.2929C2.48043 13.1054 2.73478 13 3 13H13C13.2652 13 13.5196 13.1054 13.7071 13.2929C13.8946 13.4804 14 13.7348 14 14V15Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                  {windowWidth >= 640 && (
                    <NotificationMenu active={notification} />
                  )}
                </li>
              </ul>
              <div>
                <div className="relative">
                  {userData && (
                    <div
                      className="flex items-center text-center cursor-pointer"
                      onClick={UserMenuHandler}
                    >
                      <div className="mr-3 pl-3 border-l border-l-themeLighter flex items-center">
                        {/* {userData?.avatar && (
                          <Image
                            className="rounded-full object-cover object-right p-1 border border-solid border-gray-500"
                            src={userData?.avatar}
                            alt="User image"
                            width={50}
                            height={50}
                          />
                        )} */}
                        {/* {!userData?.avatar && ( */}
                        <Image
                          className="rounded-full object-cover object-right p-1 border border-solid border-gray-500"
                          src={srcDefaultImg}
                          alt="User image"
                          width={50}
                          height={50}
                        />
                        {/* )} */}
                      </div>
                      <div>
                        <p className="text-sm leading-8">
                          {userData?.fullName?.firstName}
                        </p>
                      </div>
                      <span
                        className={`ml-2 transition duration-200 ease-in-out ${
                          UserMenu ? "rotate-180" : ""
                        }`}
                      >
                        <HiChevronDown />
                      </span>
                    </div>
                  )}
                  {!(userData !== undefined) && (
                    <div>
                      <div className="flex gap-3 items-center">
                        <div>
                          <Skeleton circle width={48} height={48} />
                        </div>
                        <div>
                          <Skeleton width={120} height={20} />
                        </div>
                      </div>
                    </div>
                  )}
                  <DashboardMenu active={UserMenu} />
                </div>
              </div>
              <button className="flex items-center" onClick={handleShow}>
                <svg
                  className="text-white bg-themePrimary block h-8 w-8 p-2 rounded"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>

      <MobileMenuWrapper className={show ? "show" : "hide"}>
        <MobileMenu className={show ? "show" : "hide"}>
          <MobileMenuHeader>
            <CloseIcon>
              <MdClose onClick={handleClose} />
            </CloseIcon>
          </MobileMenuHeader>
          <MobileMenuBody>
            <div>
              <ul>
                {Menu.map((item, index) => (
                  <li key={index} className="border-b">
                    <Link
                      href="/"
                      className="block rounded w-full px-4 py-2 text-base text-themeDark hover:text-white hover:bg-themePrimary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </MobileMenuBody>
        </MobileMenu>
        <OverlayContainer
          className={show ? "show" : "hide"}
          onClick={handleClose}
        />
      </MobileMenuWrapper>

      {/* mobile notification component */}
      <MobileMenuWrapper
        className={`${notification ? "show" : "hide"} sm:hidden`}
      >
        <MobileMenu className={notification ? "show" : "hide"}>
          <MobileMenuHeader>
            <CloseIcon>
              <MdClose onClick={() => setNotification(!notification)} />
            </CloseIcon>
          </MobileMenuHeader>
          <MobileMenuBody>
            <div className="!p-4">
              {/* center loader */}
              {!recentNotification && !recentNotificationError && (
                <div className="flex py-7 justify-center items-center h-full">
                  <div
                    className="spinner-border w-7 h-7 text-themePrimary"
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              )}
              {/* error */}
              {recentNotificationError && (
                <div className="flex py-7 justify-center items-center h-full">
                  <div className="text-center">
                    <p className="text-sm text-themeLighterAlt">
                      Something went wrong. Please try again later.
                    </p>
                  </div>
                </div>
              )}
              {/* data */}
              {recentNotification?.notification && (
                <>
                  {_.map(recentNotification?.notification, (notify, index) => (
                    <div
                      key={index}
                      className="flex justify-between gap-3 !py-2 border-b cursor-pointer border-themeLighter"
                      onMouseEnter={() => notificationSeenHandler(notify._id)}
                    >
                      <div>
                        <p className="text-sm text-themeDarker inline-block relative">
                          {notify.event}
                          {_.lowerCase(notify.status) === "unread" && (
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full absolute top-0 -right-3" />
                          )}
                        </p>
                        <p className="text-sm text-themeLight">
                          {notify.message}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm text-themeLight">
                          {/* <Moment fromNow>{notify.timestamp}</Moment> */}
                        </span>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-between gap-3 !pt-3">
                    <div>
                      <p className="text-sm text-text-themeDarker">
                        {recentNotification?.notification.length} new
                        notifications
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-text-themeDarker">
                        <Link
                          href="/notifications"
                          className="text-themePrimary hover:text-themeLighterAlt"
                        >
                          View all
                        </Link>
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </MobileMenuBody>
        </MobileMenu>
        <OverlayContainer
          className={notification ? "show" : "hide"}
          onClick={() => setNotification(!notification)}
        />
      </MobileMenuWrapper>

      <DashboardMenuOverlay
        className={UserMenu ? "active" : ""}
        onClick={UserMenuHandler}
      />
      <NotificationMenuOverlay
        className={notification ? "active" : ""}
        onClick={() => setNotification(!notification)}
      />
    </>
  );
};

// on mouse enter notification seen handler
const notificationSeenHandler = async (id: any) => {
  // update notification
  try {
    await authAxios({
      method: "PUT",
      url: `/notifications/recent/catalog/${id}`,
      data: {
        status: "READ",
      },
    }).then((res) => {
      //   mutate("/notifications/recent/catalog");
    });
  } catch (error: any) {
    console.error(error);
  }
};

function DashboardMenu({ active }: { active: any }) {
  const { logOutHandler } = React.useContext(ThemeContext) as any;
  const { user, isCandidate, isEmployer, isAdmin } = useUser();
  return (
    <>
      <div
        className={`top-[calc(130%-8px)] absolute w-[230px] rounded-lg overflow-hidden p-0 -right-[15px] text-left transition-all duration-300 ease-in-out z-[999] shadow-xl before:content-[''] before:absolute before:right-[43px] before:-top-[6px] before:w-0 before:h-0 before:border-l-transparent before:border-r-transparent before:border-b-[rgb(247_248_250)] before:transition-all before:ease-in-out before:duration-300   ${
          active
            ? "transform scale-100 visible opacity-100"
            : "opacity-0 invisible transform scale-[0.95]"
        } bg-white`}
      >
        <ul>
          {user && isCandidate && (
            <>
              {DashboardMenuList.map((item, index) => (
                <li
                  key={index}
                  className="border-b border-gray last-of-type:border-b-0"
                >
                  <Link
                    href={item.link}
                    className="flex items-center gap-3 w-full duration-300 ease-in-out p-3 hover:bg-themePrimary text-base text-themeDarker hover:text-white group"
                  >
                    <span className="text-themePrimary group-hover:text-white">
                      {item?.icon}
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </>
          )}
          {user && isEmployer && (
            <>
              {EmployerMenuList.map((item, index) => (
                <li
                  key={index}
                  className="border-b border-gray last-of-type:border-b-0"
                >
                  <Link
                    href={item.link}
                    className="flex items-center gap-3 w-full duration-300 ease-in-out p-3 hover:bg-themePrimary text-base text-themeDarker hover:text-white group"
                  >
                    <span className="text-themePrimary group-hover:text-white">
                      {item?.icon}
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </>
          )}
          {user && isAdmin && (
            <>
              {AdminMenuList.map((item, index) => (
                <li
                  key={index}
                  className="border-b border-gray last-of-type:border-b-0"
                >
                  <Link
                    href={item.link}
                    className="flex items-center gap-3 w-full duration-300 ease-in-out p-3 hover:bg-themePrimary text-base text-themeDarker hover:text-white group"
                  >
                    <span className="text-themePrimary group-hover:text-white">
                      {item?.icon}
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </>
          )}
          <li>
            <button
              className="flex items-center gap-3 text-left w-full duration-300 ease-in-out p-3 text-base bg-red-400 hover:bg-red-500 text-white"
              onClick={logOutHandler}
            >
              {/* Log out icon */}
              <BiLogOut className="w-5 h-5 flex-none" />
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

// Notification Menu Wrapper
function NotificationMenu({ active }: { active: any }) {
  const { recentNotification, recentNotificationError } = React.useContext(
    ThemeContext
  ) as any;
  return (
    <>
      <div
        className={`transition-all	duration-300 ease-in-out w-[350px] -right-[150%] rounded-[3px] p-0 top-[150%]  text-left
           z-[999] shadow-[0px_0_8px_0px_rgb(0_0_0_/_10%)] before:content-[''] before:absolute before:right-[50px] before:-top-[6px] before:w-0 before:h-0 before:border-l-transparent before:border-r-transparent before:border-b-[rgb(247_248_250)] before:transition-all before:ease-in-out before:duration-300 ${
             active
               ? "transform scale-100 visible opacity-100"
               : "opacity-0 invisible transform scale-[0.95]"
           } bg-themeLighterAlt text-white absolute rounded-lg overflow-hidden`}
      >
        {/* Notification List */}
        <div className="pb-8 bg-white max-h-[400px] overflow-y-auto">
          {/* center loader */}
          {!recentNotification && !recentNotificationError && (
            <div className="flex py-7 justify-center items-center h-full">
              <div
                className="spinner-border w-7 h-7 text-themePrimary"
                role="status"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
          {/* error */}
          {recentNotificationError && (
            <div className="flex py-7 justify-center items-center h-full">
              <div className="text-center">
                <p className="text-sm text-themeDarker">
                  Something went wrong. Please try again later.
                </p>
              </div>
            </div>
          )}
          {/* data */}
          {recentNotification?.notification && (
            <>
              {_.map(recentNotification?.notification, (notify, index) => (
                <div
                  key={index}
                  className="flex justify-between cursor-pointer items-center px-4 py-3 border-b border-gray last-of-type:border-b-0 hover:bg-themeLighterAlt -mx-2"
                  onMouseEnter={() =>
                    _.lowerCase(notify.status) === "unread" &&
                    notificationSeenHandler(notify._id)
                  }
                >
                  <div className="flex gap-2 items-center">
                    {/* Message Icon */}
                    <IoNotificationsCircle className="w-10 h-10 mx-1 text-themePrimary flex-none" />
                    <div>
                      <p className="text-themeLight text-sm inline mr-2 relative">
                        {moment(notify.timestamp).fromNow()}
                        {_.lowerCase(notify.status) === "unread" && (
                          <span className="flex h-2 w-2 absolute top-0 -right-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                          </span>
                        )}
                      </p>
                      <p className="text-sm text-themeLighter">
                        {notify.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="absolute bottom-0 right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-20 w-full">
          <Link
            href="/notifications"
            className="block bg-themeDarkerAlt w-full p-2 text-white text-center font-bold"
          >
            See all notifications
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;

const MobileMenuWrapper = styled("div")`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: -100%;
  z-index: 100;
  transition: all ease-in-out 0.5s;
  &.show {
    right: 0;
  }
`;
const MobileMenu = styled("div")`
  position: absolute;
  top: 0;
  overflow: auto;
  right: -100%;
  max-width: 400px;
  width: 100%;
  height: 100%;
  padding: 15px;
  background: #fff;
  z-index: 110;
  transition: all ease-in-out 0.5s;
  &.show {
    right: 0;
  }
`;
const MobileMenuHeader = styled("div")`
  height: 40px;
`;
const MobileMenuBody = styled("div")``;
const CloseIcon = styled("div")`
  cursor: pointer;
  position: absolute;
  left: 20px;
  & svg {
    width: 30px;
    height: 30px;
    color: #000;
    transition: all ease-in-out 0.5s;
    &:hover {
      color: #ff0000;
    }
  }
`;
const OverlayContainer = styled("div")`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: -100%;
  transition: all ease-in-out 0.5s;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &.show {
    right: 0;
  }
`;
const DashboardMenuWrapper = styled("div")`
  top: calc(100% - 8px);
  width: 200px;
  right: -5px;
  border-radius: 3px;
  box-shadow: 0px 0 8px 0px rgb(0 0 0 / 10%);
  box-shadow: 0px 2px 12px 0px rgb(0 0 0 / 12%);
  padding: 0;
  position: absolute;
  top: 120%;
  right: -15px;
  text-align: left;
  z-index: 999;
  transform: scale(0.95);
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  pointer-events: none;
  &.active {
    transform: scale(1);
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }
  &::before {
    content: "";
    position: absolute;
    right: 43px;
    top: -6px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid rgb(247 248 250);
    transition: border-color 0.3s;
  }
`;
const DashboardMenuOverlay = styled("div")`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9;
  top: 0;
  opacity: 0;
  transform: scale(0);
  &.active {
    opacity: 1;
    transform: scale(1);
  }
`;
const NotificationMenuWrapper = styled("div")`
  top: calc(100% - 8px);
  width: 400px;
  right: -5px;
  border-radius: 3px;
  box-shadow: 0px 0 8px 0px rgb(0 0 0 / 10%);
  box-shadow: 0px 2px 12px 0px rgb(0 0 0 / 12%);
  padding: 0;
  top: 150%;
  right: -150%;
  text-align: left;
  z-index: 999;
  transform: scale(0.95);
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  pointer-events: none;
  &.active {
    transform: scale(1);
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }
  &::before {
    content: "";
    position: absolute;
    right: 50px;
    top: -6px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid rgb(247 248 250);
    transition: border-color 0.3s;
  }
`;
const NotificationList = styled("div")`
  max-height: 400px;
  height: 100%;
  overflow-y: auto;
`;
const NotificationMenuOverlay = styled("div")`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9;
  top: 0;
  opacity: 0;
  transform: scale(0);
  &.active {
    opacity: 1;
    transform: scale(1);
  }
`;
function Dashboard() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 18V8H18V18H10ZM0 10V0H8V10H0ZM6 8V2H2V8H6ZM0 18V12H8V18H0ZM2 16H6V14H2V16ZM12 16H16V10H12V16ZM10 0H18V6H10V0ZM12 2V4H16V2H12Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Bookmarks() {
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.99901 18.485L1.52101 9.99298C-0.582994 7.63698 -0.503994 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898ZM16.827 3.16998C15.327 1.66798 12.907 1.60698 11.337 3.01698L10.002 4.21498L8.66601 3.01798C7.09101 1.60598 4.67601 1.66798 3.17201 3.17198C1.68201 4.66198 1.60701 7.04698 2.98001 8.62298L10 15.654L17.02 8.62398C18.394 7.04698 18.319 4.66498 16.827 3.16998Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Alerts() {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 15H20V17H0V15H2V8C2 5.87827 2.84285 3.84344 4.34315 2.34315C5.84344 0.842855 7.87827 0 10 0C12.1217 0 14.1566 0.842855 15.6569 2.34315C17.1571 3.84344 18 5.87827 18 8V15ZM16 15V8C16 6.4087 15.3679 4.88258 14.2426 3.75736C13.1174 2.63214 11.5913 2 10 2C8.4087 2 6.88258 2.63214 5.75736 3.75736C4.63214 4.88258 4 6.4087 4 8V15H16ZM7 19H13V21H7V19Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Messages() {
  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 20.5L10.2 17H5C4.73478 17 4.48043 16.8946 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16V5.103C4 4.83778 4.10536 4.58343 4.29289 4.39589C4.48043 4.20836 4.73478 4.103 5 4.103H21C21.2652 4.103 21.5196 4.20836 21.7071 4.39589C21.8946 4.58343 22 4.83778 22 5.103V16C22 16.2652 21.8946 16.5196 21.7071 16.7071C21.5196 16.8946 21.2652 17 21 17H15.8L13 20.5ZM14.839 15H20V6.103H6V15H11.161L13 17.298L14.839 15ZM1 0H18V2H2V13H0V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Profile() {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.99955 15C12.6616 15 15.8646 16.575 17.6066 18.925L15.7646 19.796C14.3466 18.116 11.8466 17 8.99955 17C6.15255 17 3.65255 18.116 2.23455 19.796L0.393555 18.924C2.13555 16.574 5.33755 15 8.99955 15ZM8.99955 0C10.3256 0 11.5974 0.526784 12.5351 1.46447C13.4728 2.40215 13.9996 3.67392 13.9996 5V8C13.9995 9.28846 13.502 10.5272 12.6109 11.4578C11.7198 12.3884 10.5038 12.9391 9.21655 12.995L8.99955 13C7.67347 13 6.4017 12.4732 5.46402 11.5355C4.52634 10.5979 3.99955 9.32608 3.99955 8V5C3.99963 3.71154 4.4971 2.47284 5.38821 1.54222C6.27933 0.611607 7.49531 0.0609194 8.78255 0.00500011L8.99955 0ZM8.99955 2C8.23434 1.99996 7.49804 2.29233 6.94129 2.81728C6.38455 3.34224 6.04945 4.06011 6.00455 4.824L5.99955 5V8C5.9988 8.7809 6.30257 9.53133 6.84633 10.0918C7.39008 10.6523 8.13095 10.9787 8.91152 11.0016C9.69209 11.0245 10.4508 10.7422 11.0265 10.2145C11.6022 9.68691 11.9495 8.9556 11.9946 8.176L11.9996 8V5C11.9996 4.20435 11.6835 3.44129 11.1209 2.87868C10.5583 2.31607 9.7952 2 8.99955 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Logout() {
  return (
    <svg
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 20C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H15C15.2652 0 15.5196 0.105357 15.7071 0.292893C15.8946 0.48043 16 0.734784 16 1V4H14V2H2V18H14V16H16V19C16 19.2652 15.8946 19.5196 15.7071 19.7071C15.5196 19.8946 15.2652 20 15 20H1ZM14 14V11H7V9H14V6L19 10L14 14Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Resume() {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 0C17.552 0 18 0.448 18 1V4.757L16 6.757V2H2V18H16V15.242L18 13.242V19C18 19.552 17.552 20 17 20H1C0.448 20 0 19.552 0 19V1C0 0.448 0.448 0 1 0H17ZM18.778 6.808L20.192 8.222L12.414 16L10.998 15.998L11 14.586L18.778 6.808ZM10 10V12H5V10H10ZM13 6V8H5V6H13Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ApplicationIcon() {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 21 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 0C17.552 0 18 0.448 18 1V4.757L16 6.757V2H2V18H16V15.242L18 13.242V19C18 19.552 17.552 20 17 20H1C0.448 20 0 19.552 0 19V1C0 0.448 0.448 0 1 0H17ZM18.778 6.808L20.192 8.222L12.414 16L10.998 15.998L11 14.586L18.778 6.808ZM10 10V12H5V10H10ZM13 6V8H5V6H13Z"
        fill="currentColor"
      />
    </svg>
  );
}
