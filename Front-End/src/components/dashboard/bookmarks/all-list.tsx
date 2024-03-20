import _ from "lodash";
import Link from "next/link";
import React from "react";
import { CgTrash } from "react-icons/cg";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import useSWR, { useSWRConfig } from "swr";
import sweetAlert from "sweetalert";
import { authAxios } from "@/lib/utils/axiosKits";
import { LoaderGrowing } from "@/lib/loader/loader";
import { toast } from "react-toastify";

const fetcher = (url: string) => authAxios(url).then((res) => res.data.data);

const AllList = () => {
  const [loading, setLoading] = React.useState(false);
  const { data, error } = useSWR("/bookmarks", fetcher, {
    refreshInterval: 0,
  });
  const { mutate } = useSWRConfig();

  // delete bookmarks by id and update data
  function onRemove(id: any, itemID: any) {
    setLoading(true);
    sweetAlert({
      title: "Are you sure?",
      text: "You want to delete this bookmark?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    } as any).then((willDelete) => {
      if (willDelete) {
        try {
          authAxios({
            method: "DELETE",
            url: `/user/bookmark/${id}`,
          }).then((res) => {
            mutate("/bookmarks").then(() => {
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
  }

  return (
    <section className="mb-6">
      <div className="h-16 bg-themeDark flex items-center px-10 rounded-lg">
        <p className="text-xxs text-white">All Bookmarks</p>
      </div>
      <div className="shadow rounded-xl py-10 px-6 lg:px-8 relative">
        {/* item 1 */}
        {/* {AllListMenu.map((resume, index) => ( */}
        {!data && (
          <div className="h-80 flex justify-center items-center text-center">
            <LoaderGrowing />
          </div>
        )}
        {loading && <LoaderGrowing />}
        {error && <div>Error</div>}
        {data?.length === 0 && (
          <div className="h-80 flex justify-center items-center text-center">
            <h2 className="text-4xl font-semibold">
              No Bookmark Data Found ☹️
            </h2>
          </div>
        )}
        {data && (
          <>
            {_.map(data, (bookmark, index) => (
              <div
                className="flex items-center justify-between py-2 mb-2"
                key={index}
              >
                <div className="flex items-center gap-3 lg:gap-4">
                  <div>
                    <div className="flex w-12 h-12 justify-center items-center rounded-full bg-[#21b75d2a]">
                      <HiOutlineCurrencyDollar className="text-2xl text-themePrimary " />
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-themeLight">
                      {bookmark.createdAt}
                    </span>
                    {/* <span className="text-xs text-themeLight">1 hour ago</span> */}
                    <p className="text-base text-themeDarker">
                      {bookmark.job && (
                        <>
                          <Link
                            href={`/find-job/${bookmark.job?._id}`}
                            className="hover:text-themePrimary relative pr-2"
                          >
                            {bookmark.job?.jobTitle}{" "}
                            <span className="bg-green-200 text-themeDarker rounded shadow-sm text-xss !px-2 absolute left-full -top-1">
                              Job
                            </span>
                          </Link>
                          <p className="text-sm text-themeLighter">
                            Note: {bookmark?.note}
                          </p>
                        </>
                      )}
                      {bookmark.job === null && (
                        <>
                          <p className="text-themeLighter relative pr-2">
                            Job removed
                            <span className="bg-green-200 text-themeDarker rounded shadow-sm text-xss !px-2 absolute left-full -top-1">
                              Job
                            </span>
                          </p>
                          <p className="text-sm text-themeLighter">
                            Note: {bookmark?.note}
                          </p>
                        </>
                      )}
                      {bookmark.company && (
                        <>
                          <Link
                            href={`/company/${bookmark.company?._id}`}
                            className="hover:text-themePrimary relative pr-2"
                          >
                            {bookmark.company?.companyName}{" "}
                            <span className="bg-indigo-200 text-themeDarker rounded shadow-sm text-xss !px-2 absolute left-full -top-1">
                              Company
                            </span>
                          </Link>
                          <p className="text-sm text-themeLighter">
                            Note: {bookmark?.note}
                          </p>
                        </>
                      )}
                      {bookmark.company === null && (
                        <>
                          <p className="text-themeLighter relative pr-2">
                            Company removed
                            <span className="bg-indigo-200 text-themeDarker rounded shadow-sm text-xss !px-2 absolute left-full -top-1">
                              Company
                            </span>
                          </p>
                          <p className="text-sm text-themeLighter">
                            Note: {bookmark?.note}
                          </p>
                        </>
                      )}
                      {bookmark.resume && (
                        <>
                          <Link
                            href={`/resume/${bookmark.resume?._id}`}
                            className="hover:text-themePrimary relative pr-2"
                          >
                            {bookmark.resume?.name}{" "}
                            <span className="bg-themeSecondary text-themeDarker rounded shadow-sm text-xss !px-2 absolute left-full -top-1">
                              Resume
                            </span>
                          </Link>
                          <p className="text-sm text-themeLighter">
                            Note: {bookmark?.note}
                          </p>
                        </>
                      )}
                      {bookmark.resume === null && (
                        <>
                          <p className="text-themeLighter relative pr-2">
                            Resume removed
                            <span className="bg-themeSecondary text-themeDarker rounded shadow-sm text-xss !px-2 absolute left-full -top-1">
                              Resume
                            </span>
                          </p>
                          <p className="text-sm text-themeLighter">
                            Note: {bookmark?.note}
                          </p>
                        </>
                      )}
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() =>
                      onRemove(
                        bookmark?.job?._id ||
                          bookmark?.resume?._id ||
                          bookmark?.company?._id,
                        bookmark?._id
                      )
                    }
                  >
                    <CgTrash className="text-2xl text-themeLight hover:text-red-400" />
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default AllList;
