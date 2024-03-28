import React from "react";
import ImageOpt from "../optimize/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import _ from "lodash";
import { Axios } from "@/lib/utils/axiosKits";
import useSWR from "swr";

const fetcher = (url: string) => Axios(url).then((res) => res.data.data);
const catsAPI = "/categories";
const CountAPI = "/jobs-count";

const Banner = ({
  totalCount,
  categories,
}: {
  totalCount: any;
  categories: any;
}) => {
  const { data: countData, error: countError } = useSWR(CountAPI, fetcher, {
    fallbackData: totalCount,
  });
  const { data: categoryData, error: categoryError } = useSWR(
    catsAPI,
    fetcher,
    {
      fallbackData: [],
    }
  );
  const router = useRouter();
  const { register, handleSubmit } = useForm({
    mode: "onBlur",
  });

  const OnSubmitHandler = (data: any) => {
    const values = {
      jobTitle: data.jobTitle,
      location: data.location,
      category: data.category,
    };
    const filtered = _.pickBy(values, (value) => value !== "");

    router.push("/find-job");
  };

  return (
    <section
      className="py-16 md:py-20 lg:py-24 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(assets/img/banner-bg.webp)" }}
    >
      <div
        className="absolute w-full h-full left-0 top-0 z-2"
        style={{ backgroundColor: "#a6a5dea6" }}
      ></div>
      <div className="container">
        <div className="w-10/12 m-auto z-4 relative">
          <div className="text-center">
            <h1 className="text-xxl xl:text-xxxl font-bold text-white text-center leading-none mb-3">
              Find Your Dream Job <br className="hidden xl:inline" />
              At TDT Works
            </h1>
            <p className="text-lg font-normal text-white leading-8">
              TDT Works support students in finding job opportunities as well as{" "}
              <br className="hidden xl:inline" />
              creating conditions for employers to find talented candidates.
            </p>
          </div>
          <div
            className="search-wrapper mt-10 p-2 rounded-2xl mb-10"
            style={{ backgroundColor: "#A6A5DE" }}
          >
            <form onSubmit={handleSubmit(OnSubmitHandler)}>
              <div className="bg-white overflow-hidden rounded-xl  md:grid gap-7 lg:gap-10 grid-cols-8 xl:grid-cols-7 items-center">
                <div className="col-span-2  px-4 md:px-0 md:pl-4 border-r-2 border-gray h-full flex items-center">
                  <input
                    type="text"
                    className="w-full block !pr-3 py-4 border-b-2 border-gray md:border-0 md:py-4 focus:outline-none bg-left bg-no-repeat px-8 placeholder:text-deep"
                    placeholder="Job Title"
                    {...register("jobTitle")}
                    style={{
                      backgroundImage: "url(assets/img/search.svg)",
                      backgroundPosition: "0 center",
                    }}
                  />
                </div>
                <div className="col-span-2 px-4 md:!px-0  border-r-2 border-gray h-full flex items-center">
                  <input
                    type="text"
                    className="w-full block !pr-3 py-3 border-b-2 border-gray md:border-0 md:py-4 focus:outline-none bg-left bg-no-repeat px-8 placeholder:text-deep"
                    placeholder="Location"
                    {...register("location")}
                    style={{
                      backgroundImage: "url(assets/img/map-pin.svg)",
                      backgroundPosition: "0 center",
                    }}
                  />
                </div>
                <div className="col-span-2 px-4 md:!px-0">
                  <select
                    aria-label="Default select example"
                    {...register("category")}
                    className="border-0 focus:shadow-none py-3 select2-init text-xxs text-deep font-normal focus-visible:white focus:outline-none w-full"
                  >
                    <option value="">Select Categories</option>
                    {categoryData.map((item: any) => (
                      <option value={item.categoryTitle} key={item._id}>
                        {_.capitalize(item.categoryTitle)}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="btn-banner px-4 md:!px-0 col-span-2 xl:col-span-1 text-center grid md:justify-end py-4 md:!py-2 lg:text-right mr-4">
                  <button
                    type="submit"
                    className="md:w-28 block bg-themePrimary text-white px-4 py-3 text-xs font-medium rounded-md hover:bg-black transition-all outline-none"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="grid gap-8 xl:gap-12 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1">
            {countData && !countError && (
              <>
                <div className="bg-white rounded-lg text-center p-8 duration-300 transition hover:bg-opacity-90">
                  <div className="flex mb-6 justify-center">
                    <ImageOpt
                      width={50}
                      height={50}
                      noPlaceholder
                      src="assets/img/job.svg"
                      alt="img"
                      className={undefined}
                      layout={undefined}
                    />
                  </div>
                  <h2 className="text-xl text-black font-bold leading-none mb-2">
                    {countData?.totalJobs + " +" ?? "0"}
                  </h2>
                  <p className="text-xs text-deep font-medium">JOB AVAILABLE</p>
                </div>
                <div className="bg-white rounded-lg text-center p-8 duration-300 transition hover:bg-opacity-90">
                  <div className="flex mb-6 justify-center">
                    <ImageOpt
                      width={50}
                      height={50}
                      noPlaceholder
                      src="assets/img/comp.svg"
                      alt="img"
                      className={undefined}
                      layout={undefined}
                    />
                  </div>
                  <h2 className="text-xl text-black font-bold leading-none mb-2">
                    {countData?.totalCompanies + " +" ?? "0"}
                  </h2>
                  <p className="text-xs text-deep font-medium">COMPANY</p>
                </div>
                {/* <div className="bg-white rounded-lg text-center p-8 duration-300 transition hover:bg-opacity-90">
                  <div className="flex mb-6 justify-center">
                    <ImageOpt
                      width={50}
                      height={50}
                      noPlaceholder
                      src="assets/img/employee.svg"
                      alt="img"
                      className={undefined}
                      layout={undefined}
                    />
                  </div>
                  <h2 className="text-xl text-black font-bold leading-none mb-2">
                    {countData.totalResumes + " +" ?? "0"}
                  </h2>
                  <p className="text-xs text-deep font-medium">
                    AVAILABLE RESUMES
                  </p>
                </div> */}
              </>
            )}
            {countError && (
              <>
                {_.map(["1", "2", "3"], (item) => (
                  <div
                    key={item}
                    className="text-center bg-red-400 p-20 rounded-lg"
                  >
                    <p className="text-lg font-normal text-white leading-8">
                      No Data Found
                    </p>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
