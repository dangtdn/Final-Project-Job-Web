"use client";

import { useEffect, useState } from "react";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/page-title";
import { JobsFilter } from "@/components/filter/search-filter";
import SortBy from "@/components/filter/data-sort-by";
import ImageOpt from "@/components/optimize/image";
import Pagination from "@/components/pagination";
import JobItem from "@/components/Job/JobItem";
import { Axios } from "@/lib/utils/axiosKits";
import useSWR from "swr";
import _ from "lodash";
import { Loader } from "@/lib/loader/loader";

const fetcher = (url: string) => Axios(url).then((res) => res.data);

export default function FindJob() {
  const [jobTypes, setJobTypes] = useState<{ types: string; count: number }[]>(
    []
  );
  const [jobExperience, setJobExperience] = useState<
    { value: string; count: number }[]
  >([]);

  // get current pages
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(9);
  const [allJobs, setAllJobs] = useState<{
    totalJobCount: number;
    jobs: any[];
  }>({
    totalJobCount: 0,
    jobs: [],
  });
  const [jobFilter, setJobFilter] = useState<any[]>([]);
  const indexOfLastItems = currentPage * jobsPerPage;
  const indexOfFirstItems = indexOfLastItems - jobsPerPage;
  const currentJobs = allJobs.jobs
    ? allJobs.jobs.slice(indexOfFirstItems, indexOfLastItems)
    : [];

  // call SWR
  const jobAPI = "/jobs-search";
  const { data, error } = useSWR(jobAPI, fetcher, {
    fallbackData: {
      jobs: [
        {
          id: 1,
          img: "./assets/img/loader/job_loader.svg",
        },
        {
          id: 2,
          img: "./assets/img/loader/job_loader.svg",
        },
        {
          id: 3,
          img: "./assets/img/loader/job_loader.svg",
        },
        {
          id: 4,
          img: "./assets/img/loader/job_loader.svg",
        },
        {
          id: 5,
          img: "./assets/img/loader/job_loader.svg",
        },
        {
          id: 6,
          img: "./assets/img/loader/job_loader.svg",
        },
        {
          id: 7,
          img: "./assets/img/loader/job_loader.svg",
        },
        {
          id: 8,
          img: "./assets/img/loader/job_loader.svg",
        },
        {
          id: 9,
          img: "./assets/img/loader/job_loader.svg",
        },
      ],
      filter: {
        jobTypes: jobTypes,
        jobExperience: jobExperience,
      },
      totalJobCount: allJobs?.totalJobCount || 0,
      loading: true,
    },
  });

  useEffect(() => {
    if (data?.jobs) {
      const jobTypes: string[] = [];
      for (const job of data.jobs) {
        if (job.jobTypes) {
          jobTypes.push(...job.jobTypes);
        }
      }
      const filter = {
        // jobTypes: (
        //   data?.jobs?.map((item: any) => item.jobTypes) as string[][]
        // ).reduce((arr, types) => (arr = [...arr, ...types]), []),
        jobTypes,
        jobExperience: data?.jobs?.map(
          (item: any) => item.jobExperience
        ) as string[],
      };
      const filterJobTypes = filter?.jobTypes.filter((value, index, self) => {
        return self.indexOf(value) === index;
      });
      const filterJobExperience = filter?.jobExperience.filter(
        (value, index, self) => {
          return self.indexOf(value) === index;
        }
      );

      setJobTypes(
        filterJobTypes.map((type) => ({
          types: type,
          count: data?.jobs?.filter((job: any) =>
            job.jobTypes.includes(type.trim())
          ).length,
        }))
      );
      setJobExperience(
        filterJobExperience
          .filter((value) => value)
          .map((experience) => ({
            value: experience,
            count: data?.jobs?.filter(
              (job: any) => job.jobExperience === experience
            ).length,
          }))
      );
      setJobFilter(data.jobs);
    }
  }, [data]);

  useEffect(() => {
    if (jobFilter) {
      setAllJobs({
        totalJobCount: jobFilter.length,
        jobs: [...jobFilter],
      });
    }
  }, [jobFilter]);

  const handlePageChange = (data: any) => {
    setCurrentPage(data.selected + 1);
  };

  return (
    <>
      <Layout>
        <main>
          <PageTitle title="Find Your Dream Job" excerpt={null} image={null} />
          {error && <div>Error! {error.message}</div>}
          {!data && <Loader />}
          {data && (
            <>
              <section className="pt-14 pb-20 !bg-light">
                <div className="container 2xl:px-0">
                  <div className="xl:grid grid-cols-12 gap-6">
                    <JobsFilter
                      types={jobTypes}
                      jobExperience={jobExperience}
                      setCurrentPage={setCurrentPage}
                      setJobFilter={setJobFilter}
                      defaultData={data.jobs}
                    />

                    <div className="col-span-9">
                      <SortBy totalCount={allJobs.jobs.length} />
                      {data?.loading && (
                        <div className="grid gap-6 xl:gap-6 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-center">
                          {_.map(data?.jobs, (item) => (
                            <div key={item.id}>
                              <ImageOpt
                                src={item.img}
                                alt="image"
                                width={315}
                                height={418}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="grid gap-6 xl:gap-6 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-center">
                        {currentJobs.map((item: any, index: number) => (
                          <JobItem key={index} item={item} />
                        ))}
                      </div>
                      {allJobs?.jobs?.length === 0 && (
                        <div className="h-80 flex justify-center items-center text-center">
                          <h2 className="text-4xl font-semibold">
                            No Data Found ☹️
                          </h2>
                        </div>
                      )}
                      {allJobs?.totalJobCount > jobsPerPage && (
                        <Pagination
                          totalCount={allJobs?.totalJobCount}
                          showPerPage={jobsPerPage}
                          handlePageChange={handlePageChange}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
        </main>
      </Layout>
    </>
  );
}
