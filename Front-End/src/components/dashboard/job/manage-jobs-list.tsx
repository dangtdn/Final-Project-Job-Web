"use client";

import _ from "lodash";
import Link from "next/link";
import React from "react";
import {
  AiFillStar,
  AiOutlineEdit,
  AiOutlineEye,
  AiOutlineStar,
} from "react-icons/ai";
import { CgTrash } from "react-icons/cg";
import { HiChevronDown } from "react-icons/hi";
import { MdClose, MdOutlineFactCheck } from "react-icons/md";
import { RiCheckboxCircleLine, RiEyeOffLine } from "react-icons/ri";

import sweetAlert from "sweetalert";
import Pagination from "../pagination";
import { authAxios } from "@/lib/utils/axiosKits";
import useUser from "@/lib/auth/user";
import { toast } from "react-toastify";
import { LoaderGrowing } from "@/lib/loader/loader";
import useSWR, { useSWRConfig } from "swr";
import { localGet } from "@/lib/utils/localStore";

const fetcher = (url: string) => authAxios(url).then((res) => res.data);
const urlAPI = "/admin/jobs/private";

const MangeJobsList = () => {
  const { data, error } = useSWR(urlAPI, fetcher);
  const { mutate } = useSWRConfig();
  const [loading, setLoading] = React.useState(false) as any;
  const { user, isAdmin } = useUser();
  // delete job function start
  const deleteJob = async (id: any) => {
    sweetAlert({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this job!",
      icon: "warning",
      buttons: true as any,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        setLoading(true);
        try {
          await authAxios({
            method: "DELETE",
            url: `/jobs/${id}`,
          })
            .then((res) => {
              mutate(`/admin/jobs/private`).then(() => {
                toast.success(res.data.message, {
                  position: "bottom-right",
                  className: "foo-bar",
                });
                setLoading(false);
              });
            })
            .catch((err) => {
              toast.error(err.response.data.message, {
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
        method: "PUT",
        url: `/admin/jobs/status/${id}`,
        data: {
          status: "published",
        },
      })
        .then((res) => {
          mutate("/admin/jobs/private").then(() => {
            toast.success(res.data.message, {
              position: "bottom-right",
              className: "foo-bar",
            });
            setLoading(false);
          });
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
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
  };

  // disable job function start
  const disableJob = async (id: any) => {
    setLoading(true);
    try {
      await authAxios({
        method: "PUT",
        url: `/admin/jobs/status/${id}`,
        data: {
          status: "draft",
        },
      })
        .then((res) => {
          mutate("/admin/jobs/private").then(() => {
            toast.success(res.data.message, {
              position: "bottom-right",
              className: "foo-bar",
            });
            setLoading(false);
          });
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
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
  };

  // feature job function start
  const featureJob = async (id: any) => {
    setLoading(true);
    try {
      await authAxios({
        method: "PUT",
        url: `/admin/jobs/status/${id}`,
        data: {
          status: "featured",
        },
      })
        .then((res) => {
          mutate("/admin/jobs/private").then(() => {
            toast.success(res.data.message, {
              position: "bottom-right",
              className: "foo-bar",
            });
            setLoading(false);
          });
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
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
  };

  // un-feature job function start
  const unFeatureJob = async (id: any) => {
    setLoading(true);
    try {
      await authAxios({
        method: "PUT",
        url: `/admin/jobs/status/${id}`,
        data: {
          status: "nonFeatured",
        },
      })
        .then((res) => {
          mutate("/admin/jobs/private").then(() => {
            toast.success(res.data.message, {
              position: "bottom-right",
              className: "foo-bar",
            });
            setLoading(false);
          });
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
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
  };

  // approved job function start
  const approvedJob = async (id: any) => {
    sweetAlert({
      title: "Are you sure?",
      text: "You want to approve this job?",
      icon: "warning",
      buttons: true as any,
    }).then(async (willDelete) => {
      if (willDelete) {
        setLoading(true);
        try {
          await authAxios({
            method: "PUT",
            url: `/admin/jobs/status/${id}`,
            data: {
              status: "approved",
            },
          })
            .then((res) => {
              mutate("/admin/jobs/private").then(() => {
                toast.success(res.data.message, {
                  position: "bottom-right",
                  className: "foo-bar",
                });
                setLoading(false);
              });
            })
            .catch((err) => {
              toast.error(err.response.data.message, {
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

  // rejected job function start
  const rejectedJob = async (id: any) => {
    sweetAlert({
      title: "Are you sure?",
      text: "You want to reject this job?",
      icon: "warning",
      buttons: true as any,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        setLoading(true);
        try {
          await authAxios({
            method: "PUT",
            url: `/admin/jobs/status/${id}`,
            data: {
              status: "rejected",
            },
          })
            .then((res) => {
              mutate("/admin/jobs/private").then(() => {
                toast.success(res.data.message, {
                  position: "bottom-right",
                  className: "foo-bar",
                });
                setLoading(false);
              });
            })
            .catch((err) => {
              toast.error(err.response.data.message, {
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

  // get current pages
  const [currentPage, setCurrentPage] = React.useState(1);
  const [ShowPerPage, setShowPerPage] = React.useState(10);
  const indexOfLastPost = currentPage * ShowPerPage;
  const indexOfFirstPost = indexOfLastPost - ShowPerPage;
  const currentPosts = data
    ? data?.data?.slice(indexOfFirstPost, indexOfLastPost)
    : [];

  const handlePageChange = (data: any) => {
    setCurrentPage(data.selected);
  };

  return (
    <>
      <section className="mb-6">
        {/* button here */}

        <div className="pb-6 text-right">
          <button className="!py-3 px-8 bg-themePrimary rounded-lg shadow shadow-themePrimary">
            <Link
              href="/find-job/submit-job"
              className="text-white font-medium text-xxs"
            >
              Add New Job
            </Link>
          </button>
        </div>

        {/*end  button here */}

        {/* table start here */}
        {/* table data for desktop */}
        <div className="shadow rounded-lg mb-10 overflow-x-auto overflow-y-hidden hidden md:block relative">
          {/* loader */}

          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="text-left whitespace-nowrap bg-themeDark rounded-tl-lg rounded-bl-lg px-4 py-3.5 leading-9 text-white text-xxs font-medium">
                  Title
                </th>
                {/* <th className="text-left whitespace-nowrap bg-themeDark px-4 py-3.5 leading-9 text-white text-xxs font-medium">
                Filled
              </th> */}
                <th className="text-left whitespace-nowrap bg-themeDark px-3 py-3.5 leading-9 text-white text-xxs font-medium">
                  Date Posted
                </th>
                <th className="text-left whitespace-nowrap bg-themeDark px-3 py-3.5 leading-9 text-white text-xxs font-medium">
                  Listing Expires
                </th>
                <th className="text-left whitespace-nowrap bg-themeDark px-4 py-3.5 leading-9 text-white text-xxs font-medium">
                  Status
                </th>
                <th className="text-left whitespace-nowrap bg-themeDark px-4 py-3.5 leading-9 text-white text-xxs font-medium">
                  Featured
                </th>
                <th className="text-left whitespace-nowrap bg-themeDark px-4 py-3.5 leading-9 text-white text-xxs font-medium w-36">
                  Applications
                </th>
                <th className="text-left whitespace-nowrap bg-themeDark rounded-tr-lg rounded-br-lg px-4 py-3.5 leading-9 text-white text-xxs font-medium w-48">
                  Result
                </th>
              </tr>
            </thead>
            {!data?.data && (
              <div className="w-full h-80">
                <LoaderGrowing />
              </div>
            )}
            {loading && <LoaderGrowing />}
            <tbody>
              {error && (
                <tr>
                  <td
                    className="text-center whitespace-nowrap rounded-tr-lg rounded-br-lg px-4 py-6 leading-9 text-lg2 font-medium text-themeLight"
                    colSpan={"8" as any}
                  >
                    <p className="text-center text-themeLight">
                      Something went wrong. Please try again later.
                    </p>
                  </td>
                </tr>
              )}
              {data?.data &&
                !error &&
                (data?.data.length > 0 ? (
                  <>
                    {currentPosts.map((item: any, index: any) => (
                      <TableItem
                        key={index}
                        item={item}
                        approvedJob={approvedJob}
                        rejectedJob={rejectedJob}
                        deleteJob={deleteJob}
                        enableJob={enableJob}
                        disableJob={disableJob}
                        featureJob={featureJob}
                        unFeatureJob={unFeatureJob}
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
          {!data?.data && (
            <div className="w-full lg:w-2/4 mx-auto h-40 bg-white shadow rounded-lg flex justify-center items-center relative">
              <div className="text-center">
                <LoaderGrowing />
              </div>
            </div>
          )}
          {data?.data &&
            !error &&
            (data?.data.length > 0 ? (
              <>
                {_.map(currentPosts, (item, index) => (
                  <div
                    key={index}
                    className={`p-4 mb-4 shadow rounded-lg relative ${
                      user._id === item.user && isAdmin
                        ? "bg-green-50"
                        : "bg-white"
                    }`}
                  >
                    {loading && <LoaderGrowing />}
                    <MobileTable
                      item={item}
                      approvedJob={approvedJob}
                      deleteJob={deleteJob}
                      disableJob={disableJob}
                      enableJob={enableJob}
                      featureJob={featureJob}
                      rejectedJob={rejectedJob}
                      unFeatureJob={unFeatureJob}
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
            ))}
        </div>
        {data?.data && !error && data?.data.length > 0 && (
          <div>
            <Pagination
              setShowPerPage={setShowPerPage}
              totalCount={data?.data?.length}
              showPerPage={ShowPerPage}
              handlePageChange={handlePageChange}
              currentPage={currentPage}
            />
          </div>
        )}
        {/* end table start here */}
      </section>
    </>
  );
};

const TableItem = ({
  item,
  approvedJob,
  rejectedJob,
  deleteJob,
  enableJob,
  disableJob,
  featureJob,
  unFeatureJob,
}: {
  item: any;
  approvedJob: any;
  rejectedJob: any;
  deleteJob: any;
  enableJob: any;
  disableJob: any;
  featureJob: any;
  unFeatureJob: any;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user, isAdmin } = useUser();
  const createDate = new Date(item.createdAt);
  const datePosted = createDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const expireData = new Date(item.expireAt);
  const expireDate = expireData.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const toggle = () => setIsOpen(!isOpen);

  return (
    <tr
      className={`border-b border-themeLighter ${
        user._id === item.user && isAdmin ? "bg-green-50" : ""
      } w-full align-top last-of-type:border-none`}
    >
      <td className="text-themeDark text-base  pl-6 py-4 align-middle">
        <Link
          href={item ? `/job/${item?._id}` : "#"}
          className="text-xxs text-themeDarker hover:text-themePrimary"
        >
          {item.jobTitle}
        </Link>
      </td>
      {/* <td className="text-themeDark text-base  px-3 py-4 align-middle">
        “Restaurant Dishwasher”
      </td> */}
      <td className="text-themeDark text-base  px-3 py-4 align-middle">
        {datePosted}
      </td>
      <td className="text-red-400 text-base px-3 py-4 align-middle">
        {expireDate}
      </td>
      <td className="px-3 py-4 align-middle">
        <span className="grid">
          {item.status.isPublished ? (
            <span className="text-themePrimary">Enabled</span>
          ) : (
            <span className="text-red-400">Disable</span>
          )}
          {item.status.isApproved ? (
            <span className="text-themePrimary">Approved</span>
          ) : (
            <span className="text-themeLight">Pending Review</span>
          )}
        </span>
      </td>
      <td className="text-themeDark w-24 text-base pl-3 pr-6 py-4 align-middle   whitespace-nowrap">
        {/* Featured */}
        <div>
          {item.status.isFeatured ? (
            <div
              className="flex items-center group cursor-pointer hover:text-red-500 gap-2 justify-center"
              onClick={() => unFeatureJob(item._id)}
            >
              <span className="w-9 h-9 flex items-center justify-center">
                <AiFillStar className="w-6 h-6 text-themePrimary" />
              </span>
            </div>
          ) : (
            <div
              className="flex items-center group cursor-pointer hover:text-red-500 gap-2 justify-center"
              onClick={() => featureJob(item._id)}
            >
              <span className="w-9 h-9 flex items-center justify-center rounded-lg">
                <AiOutlineStar className="w-6 h-6 text-themePrimary" />
              </span>
            </div>
          )}
        </div>
      </td>
      <td className="text-themeDark text-base  px-3 py-4 align-middle text-center">
        <div>
          <Link
            href={
              item?.applications?.length > 0
                ? `/find-job/applications/${item?._id}`
                : "#"
            }
            className="text-themeDark whitespace-nowrap !mt-2 inline-block hover:text-white hover:bg-themePrimary transition-all duration-300 ease-in-out bg-green-300 rounded text-sm !px-4 !py-1"
          >
            {item?.applications?.length}
          </Link>
        </div>
      </td>
      <td className="text-themeDark text-base pl-3 pr-6 py-4 align-middle  whitespace-nowrap">
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
              className={`transition-all duration-200 ease-in-out ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <HiChevronDown />
            </span>
          </button>

          {/* dropdown items */}
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              isOpen
                ? "opacity-100 h-full gap-2 visible"
                : "opacity-0 h-0 invisible"
            }`}
          >
            {/* Edit */}
            <Link
              href={`/find-job/${item._id}/edit-job`}
              className="flex items-center group cursor-pointer gap-2 text-themeDark hover:text-themePrimary"
            >
              <span className="w-9 h-9 bg-[#1caf5721] flex items-center justify-center rounded-lg">
                <AiOutlineEdit className="w-6 h-6 text-themeDark group-hover:text-themePrimary" />
              </span>
              <span>Edit</span>
            </Link>
            {/* Disable */}
            {user._id === item.user && (
              <div>
                {item.status.isPublished ? (
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
            {/* Disable for admin */}
            {user && isAdmin && (
              <>
                {/* Approved */}
                <div>
                  {item.status.isApproved ? (
                    <div
                      className="flex items-center group cursor-pointer hover:text-red-400 gap-2"
                      onClick={() => rejectedJob(item._id)}
                    >
                      <span className="w-9 h-9 bg-[#1caf5721] flex items-center justify-center rounded-lg">
                        <MdClose className="w-6 h-6 text-themeDark group-hover:text-red-400" />
                      </span>
                      <span>Rejected</span>
                    </div>
                  ) : (
                    <div
                      className="flex items-center group cursor-pointer hover:text-themePrimary gap-2"
                      onClick={() => approvedJob(item._id)}
                    >
                      <span className="w-9 h-9 bg-[#1caf5721] flex items-center justify-center rounded-lg">
                        <MdOutlineFactCheck className="w-6 h-6 text-themeDark group-hover:text-themePrimary" />
                      </span>
                      <span>Approved</span>
                    </div>
                  )}
                </div>
              </>
            )}
            {/* Delete */}
            <div
              className="flex items-center group cursor-pointer hover:text-red-500 gap-2"
              onClick={() => deleteJob(item._id)}
            >
              <span className="w-9 h-9 bg-[#1caf5721] flex items-center justify-center rounded-lg">
                <CgTrash className="w-6 h-6 text-themeDark group-hover:text-red-500" />
              </span>
              <span>Delete</span>
            </div>
          </div>
          {/* end dropdown items */}
        </div>
      </td>
    </tr>
  );
};

const MobileTable = ({
  item,
  approvedJob,
  rejectedJob,
  deleteJob,
  enableJob,
  disableJob,
  featureJob,
  unFeatureJob,
}: {
  item: any;
  approvedJob: any;
  rejectedJob: any;
  deleteJob: any;
  enableJob: any;
  disableJob: any;
  featureJob: any;
  unFeatureJob: any;
}) => {
  const { user, isAdmin } = useUser();
  const createDate = new Date(item.createdAt);
  const datePosted = createDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const expireData = new Date(item.expireAt);
  const dateExpire = expireData.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div className="relative">
      <div className="flex flex-wrap gap-2 justify-between mb-3">
        <div className="flex gap-2 flex-wrap items-center">
          <span className="text-themeDark text-sm bg-green-200 rounded px-2.5 py-1 inline-block">
            {datePosted}
          </span>
          <span className="text-themeDark text-sm bg-red-300 rounded px-2.5 py-1 inline-block">
            {dateExpire}
          </span>
        </div>
        <div className="flex items-center">
          {item.status.isFeatured ? (
            <span
              className="text-themeDark rounded inline-block"
              onClick={() => unFeatureJob(item._id)}
            >
              <AiFillStar className={`text-themePrimary text-lg`} />
            </span>
          ) : (
            <span className="inline-block" onClick={() => featureJob(item._id)}>
              <AiOutlineStar className={`text-themeDark text-lg`} />
            </span>
          )}
        </div>
        <div>
          <div className="flex flex-wrap gap-2 items-center">
            {item.status.isPublished ? (
              <span className="text-themeDark text-sm bg-green-200 rounded px-2.5 py-1 inline-block">
                Enabled
              </span>
            ) : (
              <span className="text-white text-sm bg-red-400 rounded px-2.5 py-1 inline-block">
                Disabled
              </span>
            )}
            {item.status.isApproved ? (
              <span className="text-themeDark text-sm bg-green-200 rounded px-2.5 py-1 inline-block">
                Approved
              </span>
            ) : (
              <span className="text-white text-sm bg-red-400 rounded px-2.5 py-1 inline-block">
                Rejected
              </span>
            )}
          </div>
        </div>
      </div>
      <h3 className="text-lg2 font-medium mb-2">{item.jobTitle}</h3>
      {/* <div className="text-themeDark text-xss1">
        <strong>Filled:</strong> “Restaurant Dishwasher”
      </div> */}
      <div className="text-themeDark text-xss1">
        <strong>Applications:</strong> 12
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3 mt-3">
        {/* Edit */}
        <div className="flex items-center gap-2">
          <Link
            href={`/find-job/${item._id}/edit-job`}
            className="bg-green-200 shadow-sm flex gap-2 py-2 px-3 items-center justify-center rounded-lg"
          >
            <AiOutlineEdit className="text-xxs text-themeDarker" />
            <span className="text-themeDarker text-sm">Edit</span>
          </Link>
        </div>
        {/* Disable */}
        {user._id === item.user && (
          <div className="flex items-center gap-2">
            {item.status.isPublished ? (
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
        {user &&
          isAdmin &&
          (item.status.isApproved ? (
            <div className="flex items-center gap-2">
              <div
                className="bg-green-200 shadow-sm flex gap-2 py-2 px-3 items-center justify-center rounded-lg"
                onClick={() => rejectedJob(item._id)}
              >
                <MdClose className="text-xxs text-themeDarker" />
                <span className="text-themeDarker text-sm">Rejected</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <div
                className="bg-green-200 shadow-sm flex gap-2 py-2 px-3 items-center justify-center rounded-lg"
                onClick={() => approvedJob(item._id)}
              >
                <MdOutlineFactCheck className="text-xxs text-themeDarker" />
                <span className="text-themeDarker text-sm">Approved</span>
              </div>
            </div>
          ))}
        {/* Delete */}
        <div
          className="flex items-center gap-2"
          onClick={() => deleteJob(item._id)}
        >
          <div className="bg-red-200 shadow-sm flex gap-2 py-2 px-3 items-center justify-center rounded-lg">
            <CgTrash className="text-xxs text-themeDarker" />
            <span className="text-themeDarker text-sm">Delete</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MangeJobsList;
