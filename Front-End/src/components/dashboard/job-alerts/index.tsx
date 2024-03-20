"use client";

import _ from "lodash";
import Link from "next/link";
import React from "react";
import { AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import { CgTrash } from "react-icons/cg";
import { HiChevronDown } from "react-icons/hi";
import { RiCheckboxCircleLine, RiEyeOffLine } from "react-icons/ri";
import sweetAlert from "sweetalert";
import useSWR, { useSWRConfig } from "swr";
import Pagination from "../pagination";
import { authAxios } from "@/lib/utils/axiosKits";
import useUser from "@/lib/auth/user";
import { toast } from "react-toastify";
import { LoaderGrowing } from "@/lib/loader/loader";

const fetcher = (url: string) => authAxios(url).then((res) => res.data.data);

const JobAlertsInfo = () => {
  const { data, error } = useSWR("/job-alerts", fetcher);
  const [loading, setLoading] = React.useState(false);
  const { user, isCandidate } = useUser();
  const { mutate } = useSWRConfig();

  // delete category function here
  const deleteJobAlert = (id: any) => {
    setLoading(true);
    sweetAlert({
      title: "Are you sure?",
      text: "You want to delete this category?",
      icon: "warning",
      buttons: true as any,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        try {
          authAxios({
            method: "DELETE",
            url: `/jobs/alert/${id}/delete`,
          }).then((res) => {
            return mutate("/job-alerts").then(() => {
              toast.success(res.data.message, {
                position: "bottom-right",
                className: "foo-bar",
              });
              setLoading(false);
            }, 1000 as any);
          });
        } catch (error: any) {
          if (error?.response?.data) {
            toast.error(error.response.data.message, {
              position: "bottom-right",
              className: "foo-bar",
            });
          } else {
            toast.error(error.message, {
              position: "bottom-right",
              className: "foo-bar",
            });
          }
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    });
  };

  // delete category function here
  const sendEmail = (id: any) => {
    setLoading(true);
    sweetAlert({
      title: "Are you sure?",
      text: "You want to send email?",
      icon: "warning",
      buttons: true as any,
    }).then((willDelete) => {
      if (willDelete) {
        try {
          authAxios({
            method: "GET",
            url: `/user/alert/job/email/${id}`,
          }).then((res) => {
            toast.success(res.data.message, {
              position: "bottom-right",
              className: "foo-bar",
            });
            setLoading(false);
          });
        } catch (error: any) {
          toast.error(error.response.data.message, {
            position: "bottom-right",
            className: "foo-bar",
          });
          setLoading(false);
        }
      }
    });
  };

  // enable job function start
  const enableJob = async (id: any) => {
    setLoading(true);
    try {
      await authAxios({
        method: "PATCH",
        url: `/jobs/alert/status/${id}`,
        data: {
          active: true,
        },
      }).then((res) => {
        return mutate(`/job-alerts`).then(() => {
          toast.success(res.data.message, {
            position: "bottom-right",
            className: "foo-bar",
          });
          setLoading(false);
        }, 1000 as any);
      });
    } catch (error: any) {
      if (error?.response) {
        toast.error(error.response.data.message, {
          position: "bottom-right",
          className: "foo-bar",
        });
      } else {
        toast.error(error.message, {
          position: "bottom-right",
          className: "foo-bar",
        });
      }
      setLoading(false);
    }
  };

  // disable job function start
  const disableJob = async (id: any) => {
    setLoading(true);
    try {
      await authAxios({
        method: "PATCH",
        url: `/jobs/alert/status/${id}`,
        data: {
          active: false,
        },
      }).then((res) => {
        return mutate(`/job-alerts`).then(() => {
          toast.success(res.data.message, {
            position: "bottom-right",
            className: "foo-bar",
          });
          setLoading(false);
        }, 1000 as any);
      });
    } catch (error: any) {
      if (error.response.data.message) {
        toast.error(error.response.data.message, {
          position: "bottom-right",
          className: "foo-bar",
        });
      } else {
        toast.error(error.message, {
          position: "bottom-right",
          className: "foo-bar",
        });
      }
      setLoading(false);
    }
  };

  // get current pages
  const [currentPage, setCurrentPage] = React.useState(1);
  const [ShowPerPage, setShowPerPage] = React.useState(10);
  const indexOfLastPost = currentPage * ShowPerPage;
  const indexOfFirstPost = indexOfLastPost - ShowPerPage;
  const currentAlerts = data
    ? data?.slice(indexOfFirstPost, indexOfLastPost)
    : [];

  const handlePageChange = (data: any) => {
    setCurrentPage(data.selected + 1);
  };
  return (
    <section className="mb-6">
      {/* button here */}

      {!isCandidate && (
        <div className="pb-6 text-right">
          <button className="!py-3 px-8 bg-themePrimary rounded-lg shadow shadow-themePrimary">
            <Link
              href="/find-job/add-new-job-notifications"
              className="text-white font-medium text-xxs"
            >
              Add New Job Notification
            </Link>
          </button>
        </div>
      )}

      {/* table start here */}
      {/* table data for desktop */}
      <div className="shadow rounded-lg mb-10 overflow-x-auto overflow-y-hidden hidden md:block relative">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="text-left whitespace-nowrap bg-themeDark rounded-tl-lg rounded-bl-lg px-4 py-3.5 leading-9 text-white text-xxs font-medium">
                Job Name
              </th>
              <th className="text-left whitespace-nowrap bg-themeDark px-4 py-3.5 leading-9 text-white text-xxs font-medium">
                Types
              </th>
              <th className="text-left whitespace-nowrap bg-themeDark px-4 py-3.5 leading-9 text-white text-xxs font-medium">
                Categories
              </th>
              <th className="text-left whitespace-nowrap bg-themeDark px-4 py-3.5 leading-9 text-white text-xxs font-medium">
                Tags
              </th>
              <th className="text-left whitespace-nowrap bg-themeDark px-4 py-3.5 leading-9 text-white text-xxs font-medium">
                Location
              </th>
              {/* <th className="text-left whitespace-nowrap bg-themeDark px-4 py-3.5 leading-9 text-white text-xxs font-medium">
                Frequency
              </th> */}
              <th className="text-left whitespace-nowrap bg-themeDark px-4 py-3.5 leading-9 text-white text-xxs font-medium">
                Status
              </th>
              {!isCandidate && (
                <th className="text-left whitespace-nowrap bg-themeDark rounded-tr-lg rounded-br-lg px-4 py-3.5 leading-9 text-white text-xxs font-medium">
                  Result
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {error && (
              <tr>
                <td
                  className="text-center whitespace-nowrap rounded-tr-lg rounded-br-lg px-4 py-6 leading-9 text-lg2 font-medium text-themeLight"
                  colSpan={"8" as any}
                >
                  <p className="text-center text-red-400">
                    Something went wrong. Please try again later.
                  </p>
                </td>
              </tr>
            )}
            {loading && <LoaderGrowing />}
            {!data && (
              <div className="w-full h-80">
                <LoaderGrowing />
              </div>
            )}
            {data &&
              !error &&
              (data.length > 0 ? (
                <>
                  {_.map(currentAlerts, (item, index) => (
                    <TableItem
                      key={index}
                      item={item}
                      deleteJobAlert={deleteJobAlert}
                      sendEmail={sendEmail}
                      disableJob={disableJob}
                      enableJob={enableJob}
                    />
                  ))}
                </>
              ) : (
                <tr>
                  <td
                    className="text-center whitespace-nowrap rounded-tr-lg rounded-br-lg px-4 py-6 leading-9 text-lg2 font-medium text-themeLight"
                    colSpan={"8" as any}
                  >
                    No data found ☹️
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* table data for mobile */}
      <div className="block md:hidden">
        {error && (
          <div className="w-full lg:w-2/4 mx-auto h-40 bg-white shadow rounded-lg flex justify-center items-center">
            <div className="text-center">
              <h3 className="text-lg mb-2 font-semibold text-red-400">
                Failed to load data ☹️
              </h3>
              <p className="text-themeLight">
                Check Your internat connection OR api response issue.
              </p>
            </div>
          </div>
        )}
        {!data && (
          <div className="w-full lg:w-2/4 mx-auto h-40 bg-white shadow rounded-lg flex justify-center items-center relative">
            <div className="text-center">
              <LoaderGrowing />
            </div>
          </div>
        )}
        {data && data.length > 0 ? (
          <>
            {_.map(currentAlerts, (item, index) => (
              <div
                key={index}
                className={`p-4 mb-4 shadow rounded-lg relative ${
                  user?._id === item.user && !isCandidate
                    ? "bg-green-50"
                    : "bg-white"
                }`}
              >
                {loading && <LoaderGrowing />}
                <MobileTable
                  item={item}
                  deleteJobAlert={deleteJobAlert}
                  sendEmail={sendEmail}
                  disableJob={disableJob}
                  enableJob={enableJob}
                />
              </div>
            ))}
          </>
        ) : (
          <div className="text-center p-8 mb-4 shadow rounded-lg bg-white">
            <h3 className="text-lg font-semibold text-red-400">
              No data found ☹️
            </h3>
          </div>
        )}
      </div>

      {data && !error && data.length > 0 && (
        <div>
          <Pagination
            setShowPerPage={setShowPerPage}
            totalCount={data?.length}
            showPerPage={ShowPerPage}
            handlePageChange={handlePageChange}
          />
        </div>
      )}
      {/* end table start here */}
    </section>
  );
};

const TableItem = ({
  item,
  deleteJobAlert,
  sendEmail,
  enableJob,
  disableJob,
}: {
  item: any;
  deleteJobAlert: any;
  sendEmail: any;
  enableJob: any;
  disableJob: any;
}) => {
  const { user, isCandidate } = useUser();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <tr
      className={`border-b ${
        user?._id === item.user && !isCandidate ? "bg-green-50" : ""
      } border-themeLighter w-full align-top last-of-type:border-none`}
    >
      <td className="text-themeDark text-base  pl-6 py-4 align-middle">
        <Link
          href={`/find-job/${item.emailFrequency}`}
          className="hover:text-themePrimary relative pr-2"
        >
          {item.name}
        </Link>
      </td>
      <td className="text-themeDark text-base  px-3 py-4 align-middle">
        {item.type.join(",")}
      </td>
      <td className="text-themeDark text-base px-3 py-4 align-middle">
        {item.category}
      </td>
      <td className="text-themeDark text-base  px-3 py-4 align-middle">
        {item.tags.join(",")}
      </td>
      <td className="text-themeDark text-base px-3 py-4 align-middle">
        {item.region}
      </td>
      {/* <td className="text-themeDark text-base  px-4 py-4 align-middle">
        {item.emailFrequency}
      </td> */}
      <td className="text-base  px-3 py-4 align-middle">
        {item.active ? (
          <span className="text-green-400">Enabled</span>
        ) : (
          <span className="text-red-400">Disable</span>
        )}
      </td>
      {!isCandidate && (
        <td className="text-themeDark text-base pl-3 py-4 align-middle   whitespace-nowrap">
          <div>
            <button
              className={`flex ${
                isOpen ? "mb-2" : ""
              } items-center transition-all duration-300 ease-in-out gap-2 cursor-pointer`}
              onClick={toggle}
            >
              <span className="w-9 h-9 bg-[#1caf5721] flex items-center justify-center rounded-lg">
                <RiCheckboxCircleLine className="w-6 h-6 text-themePrimary" />
              </span>
              <span>Show Results</span>
              <span
                className={`transition duration-200 ease-in-out ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <HiChevronDown />
              </span>
            </button>

            {/* dropdown items */}
            <div
              className={`grid duration-300 ease-in-out ${
                isOpen
                  ? "opacity-100 h-full gap-2 visible"
                  : "opacity-0 h-0 invisible"
              }`}
            >
              {/* Email hidden */}
              {/* <div
              className="flex items-center  cursor-pointer gap-2 text-themeDarker hover:text-themePrimary transition-all duration-300 ease-in-out group"
              onClick={() => sendEmail(item._id)}
            >
              <span className="w-9 h-9 bg-[#1caf5721] flex items-center justify-center rounded-lg">
                <AiOutlineMail className="w-6 h-6 text-themeDarker group-hover:text-themePrimary transition-all duration-300 ease-in-out" />
              </span>
              <span>Email</span>
            </div> */}
              {/* Edit */}
              <Link
                href={`/find-job/job-alerts/${item._id}/edit-job-alert`}
                className="flex items-center gap-2 text-themeDarker hover:text-themePrimary transition-all duration-300 ease-in-out group"
              >
                <span className="w-9 h-9 bg-[#1caf5721] flex items-center justify-center rounded-lg">
                  <AiOutlineEdit className="w-6 h-6 text-themeDarker group-hover:text-themePrimary transition-all duration-300 ease-in-out" />
                </span>
                <span>Edit</span>
              </Link>
              {/* Disable */}
              {user?._id === item.user && (
                <div>
                  {item.active ? (
                    <div
                      className="flex items-center group cursor-pointer hover:text-red-500 gap-2"
                      onClick={() => disableJob(item._id)}
                    >
                      <span className="w-9 h-9 bg-[#1caf5721] flex items-center justify-center rounded-lg">
                        <RiEyeOffLine className="w-6 h-6 text-themeDark group-hover:text-red-500" />
                      </span>
                      <span>Disable</span>
                    </div>
                  ) : (
                    <div
                      className="flex items-center group cursor-pointer hover:text-themePrimary gap-2"
                      onClick={() => enableJob(item._id)}
                    >
                      <span className="w-9 h-9 bg-[#1caf5721] flex items-center justify-center rounded-lg">
                        <AiOutlineEye className="w-6 h-6 text-themeDark group-hover:text-themePrimary" />
                      </span>
                      <span>Enabled</span>
                    </div>
                  )}
                </div>
              )}
              {/* Delete */}
              <div
                className="flex items-center gap-2 cursor-pointer group text-themeDarker hover:text-red-400 transition-all duration-300 ease-in-out"
                onClick={() => deleteJobAlert(item._id)}
              >
                <span className="w-9 h-9 bg-[#1caf5721] flex items-center justify-center rounded-lg">
                  <CgTrash className="w-6 h-6 text-themeDarker group-hover:text-red-400 transition-all duration-300 ease-in-out" />
                </span>
                <span>Delete</span>
              </div>
            </div>
            {/* end dropdown items */}
          </div>
        </td>
      )}
    </tr>
  );
};

const MobileTable = ({
  item,
  deleteJobAlert,
  sendEmail,
  enableJob,
  disableJob,
}: {
  item: any;
  deleteJobAlert: any;
  sendEmail: any;
  enableJob: any;
  disableJob: any;
}) => {
  const { user, isCandidate } = useUser();
  return (
    <div className="relative">
      <div className="flex flex-wrap justify-between mb-3">
        {item.active ? (
          <div className="bg-green-200 text-themeDark text-xss rounded-lg px-3 py-1.5 inline-block">
            Enabled
          </div>
        ) : (
          <div className="bg-red-400 text-white text-xss rounded-lg px-3 py-1.5 inline-block">
            Disabled
          </div>
        )}
      </div>
      <h3 className="text-lg font-medium mb-2">{item.name}</h3>
      <div className="text-themeDark text-xss1">
        <strong>Types:</strong> {item.type.join(",")}
      </div>
      <div className="text-themeDark text-xss1">
        <strong>Categories:</strong> {item.category}
      </div>
      <div className="text-themeDark text-xss1">
        <strong>Tags:</strong> {item.tags.join(",")}
      </div>
      <div className="text-themeDark text-xss1 mb-4">
        <strong>Location:</strong> {item.region}
      </div>

      {/* Action buttons */}
      {!isCandidate && (
        <div className="flex flex-wrap gap-3 mt-3">
          {/* Email hidden */}
          {/* <div
          className="flex items-center gap-2"
          onClick={() => sendEmail(item._id)}
        >
          <div className="bg-orange-200 shadow-sm flex gap-2 py-2 px-3 items-center justify-center rounded-lg">
            <AiOutlineMail className="text-xxs text-themeDarker" />
            <span className="text-themeDarker text-sm">Email</span>
          </div>
        </div> */}
          {/* Edit */}
          <div className="flex items-center gap-2">
            <Link
              href={`/job/edit-job-alert?active_id=${item._id}`}
              className="bg-green-200 shadow-sm flex gap-2 py-2 px-3 items-center justify-center rounded-lg"
            >
              <AiOutlineEdit className="text-xxs text-themeDarker" />
              <span className="text-themeDarker text-sm">Edit</span>
            </Link>
          </div>
          {/* Disable */}
          {user?._id === item.user && (
            <div className="flex items-center gap-2">
              {item.active ? (
                <div
                  className="bg-indigo-200 shadow-sm flex gap-2 py-2 px-3 items-center justify-center rounded-lg"
                  onClick={() => disableJob(item._id)}
                >
                  <RiEyeOffLine className="text-xxs text-themeDarker" />
                  <span className="text-themeDarker text-sm">Disable</span>
                </div>
              ) : (
                <div
                  className="bg-indigo-200 shadow-sm flex gap-2 py-2 px-3 items-center justify-center rounded-lg"
                  onClick={() => enableJob(item._id)}
                >
                  <AiOutlineEye className="text-xxs text-themeDarker" />
                  <span className="text-themeDarker text-sm">Enable</span>
                </div>
              )}
            </div>
          )}
          {/* Delete */}
          <div
            className="flex items-center gap-2"
            // onClick={() => deleteJob(item._id) as any}
          >
            <div className="bg-red-200 shadow-sm flex gap-2 py-2 px-3 items-center justify-center rounded-lg">
              <CgTrash className="text-xxs text-themeDarker" />
              <span className="text-themeDarker text-sm">Delete</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobAlertsInfo;
