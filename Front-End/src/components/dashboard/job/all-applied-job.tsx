"use client";

import _ from "lodash";
import Link from "next/link";
import React from "react";
import { FiFile } from "react-icons/fi";
import Pagination from "../pagination";
import { authAxios } from "@/lib/utils/axiosKits";
import { LoaderGrowing } from "@/lib/loader/loader";
import PopupModule from "@/lib/popup-modul/popup-modul";
import useSWR, { useSWRConfig } from "swr";
import useUser from "@/lib/auth/user";
import { CgTrash } from "react-icons/cg";
import { toast } from "react-toastify";
import sweetAlert from "sweetalert";

const fetcher = (url: string) => authAxios(url).then((res) => res.data.data);

const AllApplications = () => {
  const { user, isAdmin, isEmployer, isCandidate } = useUser();
  const { data: dataApplications, error: errorApplications } = useSWR(
    isAdmin && `/applications`,
    fetcher
  );
  const { data: dataJobPrivate, error: errorJobPrivate } = useSWR(
    isEmployer && `/admin/jobs/private`,
    fetcher
  );
  const { data: dataUserApplication, error: errorUserApplication } = useSWR(
    isCandidate && `users/${user._id}/job-apply`,
    fetcher
  );
  const getData = () => {
    if (isAdmin) {
      return dataApplications;
    } else if (isEmployer) {
      return (dataJobPrivate ?? [])?.reduce((applies: any[], item: any) => {
        if (item?.applications) {
          applies = [...applies, ...item.applications];
        }
        return applies;
      }, [] as any[]);
    } else if (isCandidate) {
      return dataUserApplication;
    } else {
      return [];
    }
  };

  const error = () => {
    if (isAdmin) {
      return errorApplications;
    } else if (isEmployer) {
      return errorJobPrivate;
    } else {
      return errorUserApplication;
    }
  };
  const [loading, setLoading] = React.useState(false);
  // get current pages
  const [currentPage, setCurrentPage] = React.useState(1);
  const [ShowPerPage, setShowPerPage] = React.useState(10);
  const { mutate } = useSWRConfig();
  const indexOfLastPost = currentPage * ShowPerPage;
  const indexOfFirstPost = indexOfLastPost - ShowPerPage;
  const currentPosts = getData()
    ? getData()?.slice(indexOfFirstPost, indexOfLastPost)
    : [];

  const handlePageChange = (data: any) => {
    setCurrentPage(data.selected);
  };

  const onRemove = (id: any, userId: any) => {
    setLoading(true);
    sweetAlert({
      title: "Are you sure?",
      text: "You want to delete this application?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    } as any).then((willDelete) => {
      if (willDelete) {
        try {
          authAxios({
            method: "DELETE",
            url: `/users/${id}/delete`,
          }).then((res) => {
            mutate(
              !isAdmin
                ? isEmployer
                  ? `/admin/jobs/private`
                  : `users/${user._id}/job-apply`
                : `/applications`
            ).then(() => {
              toast.success(res.data.message, {
                position: "bottom-right",
                className: "foo-bar",
              });
              setLoading(false);
            });
          });
        } catch (error: any) {
          toast.error(error.response.data.message, {
            position: "bottom-right",
            className: "foo-bar",
          });
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    });
  };

  return (
    <section className="mb-6">
      {loading && <LoaderGrowing />}
      {/* table start here */}
      {/* table data for desktop */}
      <div className="shadow rounded-lg mb-10 overflow-x-auto overflow-y-hidden hidden md:block relative">
        {!getData() && !error() && (
          <div className="relative min-h-40">
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="text-left whitespace-nowrap bg-themeDark rounded-tl-lg rounded-bl-lg px-4 py-3.5 leading-9 text-white text-xxs font-medium">
                    Company Name
                  </th>
                  <th className="text-left whitespace-nowrap bg-themeDark px-4 py-3.5 leading-9 text-white text-xxs font-medium">
                    Status
                  </th>
                  <th className="text-left whitespace-nowrap bg-themeDark px-4 py-3.5 leading-9 text-white text-xxs font-medium">
                    Date Posted
                  </th>
                  <th className="text-left whitespace-nowrap bg-themeDark rounded-tr-lg rounded-br-lg px-4 py-3.5 leading-9 text-white text-xxs font-medium">
                    Result
                  </th>
                </tr>
              </thead>
              <tbody>
                <LoaderGrowing />
              </tbody>
            </table>
          </div>
        )}
        {error() && (
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
        {getData() && !error() && (
          <>
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="text-left whitespace-nowrap bg-themeDark rounded-tl-lg rounded-bl-lg px-4 py-3.5 leading-9 text-white text-xxs font-medium">
                    Job Title
                  </th>
                  <th className="text-left whitespace-nowrap bg-themeDark px-4 py-3.5 leading-9 text-white text-xxs font-medium">
                    Cover Letter
                  </th>
                  <th className="text-left whitespace-nowrap bg-themeDark px-4 py-3.5 leading-9 text-white text-xxs font-medium">
                    CV
                  </th>
                  <th className="text-left whitespace-nowrap bg-themeDark px-4 py-3.5 leading-9 text-white text-xxs font-medium">
                    Email
                  </th>
                  <th className="text-left whitespace-nowrap bg-themeDark px-4 py-3.5 leading-9 text-white text-xxs font-medium w-48">
                    Status
                  </th>
                  <th className="text-left whitespace-nowrap bg-themeDark px-4 py-3.5 leading-9 text-white text-xxs font-medium w-48">
                    Setting
                  </th>
                </tr>
              </thead>
              <tbody>
                {getData().length > 0 ? (
                  <>
                    {_.map(currentPosts, (item, index) => (
                      <TableItem key={index} item={item} onRemove={onRemove} />
                    ))}
                  </>
                ) : (
                  <tr>
                    <td
                      className="text-center whitespace-nowrap rounded-tr-lg rounded-br-lg px-4 py-6 leading-9 text-lg2 font-medium text-themeLight"
                      colSpan={5}
                    >
                      No data found ☹️
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </>
        )}
      </div>

      {/* table data for mobile */}
      <div className="block md:hidden">
        {!getData() && !error() && (
          <div className="p-4 mb-4 h-60 relative shadow rounded-lg bg-white">
            <LoaderGrowing />
          </div>
        )}
        {getData() &&
          !error() &&
          (getData().length > 0 ? (
            <>
              {_.map(currentPosts, (item, index) => (
                <div
                  key={index}
                  className={`p-4 mb-4 shadow rounded-lg relative bg-white`}
                >
                  <MobileTable item={item} />
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

      {getData() && !error() && getData().length > 0 && (
        <div>
          <Pagination
            setShowPerPage={setShowPerPage}
            totalCount={getData()?.length}
            showPerPage={ShowPerPage}
            handlePageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      )}
      {/* end table start here */}
    </section>
  );
};

const TableItem = ({
  item,
  onRemove,
}: {
  item: any;
  onRemove: (id: any, userId: any) => void;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <tr
        className={`border-b w-full border-themeLighter align-top last-of-type:border-none`}
      >
        <td className="text-themeDark text-base pl-6 py-4 align-middle">
          <Link
            href={
              item?.jobItem?.jobTitle ? `/find-job/${item?.jobItem?._id}` : "#"
            }
            className="text-lg2 text-themeDark hover:text-themePrimary transition-all duration-200 ease-in-out font-bold"
          >
            {item?.jobItem?.jobTitle}
          </Link>
          <br />
          <span className="text-sm text-themeLight">
            Name: {item?.fullName}
          </span>
        </td>
        <td className="text-themeDark text-base pl-6 py-4 align-middle">
          {item?.coverLetter && (
            <div>
              <button
                onClick={toggle}
                className="text-themeDark whitespace-nowrap !mt-2 inline-block hover:text-white hover:bg-themePrimary transition-all duration-300 ease-in-out bg-green-100 rounded text-sm !px-4 !py-1"
              >
                Read Cover Letter
              </button>
            </div>
          )}
        </td>
        <td className="text-themeDark text-base pl-6 py-4 align-middle">
          {item?.cvFile !== "undefined" && (
            <div>
              <a
                href={`${item?.cvFile?.split("pdf")[0]}jpg`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-themeDark whitespace-nowrap !mt-2 inline-block hover:text-white hover:bg-themePrimary transition-all duration-300 ease-in-out bg-green-100 rounded text-sm !px-4 !py-1"
              >
                View CV
              </a>
            </div>
          )}
        </td>
        <td className="text-themeDark text-base pl-6 py-4 align-middle">
          <p className="text-base text-themeDark">{item?.email}</p>
        </td>
        <td className="text-themeDark text-base  px-3 py-4 align-middle">
          <div className="text-left flex gap-3">
            <span className="inline-grid gap-3">
              <span className="border !border-themePrimary text-themePrimary bg-transparent !px-6 py-2 rounded text-center text-xs">
                {item?.status}
              </span>
            </span>
          </div>
        </td>
        <td className="text-themeDark text-base  px-3 py-4 align-middle">
          <div>
            <button onClick={() => onRemove(item?._id, item?.user)}>
              <CgTrash className="text-2xl text-themeLight hover:text-red-400" />
            </button>
          </div>
        </td>
      </tr>
      <PopupModule
        PopupTitle={"Cover Latter"}
        Popup={isOpen}
        PopupHandler={toggle}
      >
        <p className="text-base text-themeLight">{item?.coverLetter}</p>
      </PopupModule>
    </>
  );
};

const MobileTable = ({ item }: { item: any }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="relative">
        <div className="!mb-3">
          <span className="border !border-themePrimary text-themePrimary bg-transparent !px-3 py-1 rounded text-center text-xs">
            Applied
          </span>
        </div>
        <div className="">
          <p className="text-lg2 text-themeDark font-bold">
            {item?.jobItem?.jobTitle}
          </p>
          <p className="text-themeDark">Name: {item?.fullName}</p>
          <span className="text-themeDark">{item?.email}</span>
          <div>
            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 mt-3">
              {/* Disable */}
              {item?.coverLetter && (
                <div className="flex items-center gap-2">
                  <button
                    className="bg-green-200 shadow-sm flex gap-2 py-2 px-3 items-center justify-center cursor-pointer rounded-lg"
                    onClick={toggle}
                  >
                    <FiFile className="text-xxs text-themeDarker" />
                    <span className="text-themeDarker text-sm">
                      View Cover Latter
                    </span>
                  </button>
                </div>
              )}
              {/* View CV */}
              {item?.cvFile !== "undefined" && (
                <div className="flex items-center gap-2">
                  <a
                    className="bg-green-200 shadow-sm flex gap-2 py-2 px-3 items-center justify-center cursor-pointer rounded-lg"
                    href={item?.cvFile}
                  >
                    <FiFile className="text-xxs text-themeDarker" />
                    <span className="text-themeDarker text-sm">View CV</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <PopupModule
        PopupTitle={"Cover Latter"}
        Popup={isOpen}
        PopupHandler={toggle}
      >
        <p className="text-base text-themeLight">{item?.coverLetter}</p>
      </PopupModule>
    </>
  );
};

export default AllApplications;
