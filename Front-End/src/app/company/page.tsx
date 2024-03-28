"use client";

import Layout from "@/components/Layout/Layout";
import CompanyItem from "@/components/company/company-item";
import { CompanyFilter } from "@/components/filter/search-filter";
import ImageOpt from "@/components/optimize/image";
import PageTitle from "@/components/page-title";
import Pagination from "@/components/pagination";
import { Axios } from "@/lib/utils/axiosKits";
import _ from "lodash";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => Axios(url).then((res) => res.data);
const CompanyAPI = "/companies";

const CompanyDataList = () => {
  // get current pages
  const [currentPage, setCurrentPage] = useState(1);
  const [companiesPerPage] = useState(9);
  const [companyFilter, setCompanyFilter] = useState<any[]>([]);
  const [AllCompanies, setAllCompanies] = useState<{
    companies: any[];
    totalCompanyCount: number;
  }>({
    companies: companyFilter,
    totalCompanyCount: 0,
  }) as any;
  const { data, error } = useSWR(CompanyAPI, fetcher, {
    fallbackData: {
      companies: [
        {
          id: 1,
          img: "./assets/img/loader/company_loader.svg",
        },
        {
          id: 2,
          img: "./assets/img/loader/company_loader.svg",
        },
        {
          id: 3,
          img: "./assets/img/loader/company_loader.svg",
        },
        {
          id: 4,
          img: "./assets/img/loader/company_loader.svg",
        },
        {
          id: 5,
          img: "./assets/img/loader/company_loader.svg",
        },
        {
          id: 6,
          img: "./assets/img/loader/company_loader.svg",
        },
        {
          id: 7,
          img: "./assets/img/loader/company_loader.svg",
        },
        {
          id: 8,
          img: "./assets/img/loader/company_loader.svg",
        },
        {
          id: 9,
          img: "./assets/img/loader/company_loader.svg",
        },
      ],
      companyFilter: companyFilter,
      totalCompanyCount: AllCompanies?.totalCompanyCount || 0,
      loading: true,
    },
  });
  const indexOfLastItems = currentPage * companiesPerPage;
  const indexOfFirstItems = indexOfLastItems - companiesPerPage;
  const currentCompanies = AllCompanies.companies
    ? AllCompanies.companies.slice(indexOfFirstItems, indexOfLastItems)
    : [];

  const handlePageChange = (data: any) => {
    setCurrentPage(data.selected);
  };

  useEffect(() => {
    if (data && data.companies) {
      setCompanyFilter(data.companies);
    }
  }, [data]);

  useEffect(() => {
    if (companyFilter) {
      setAllCompanies({
        companies: companyFilter,
        totalCompanyCount: companyFilter.length,
      });
    }
  }, [companyFilter]);

  if (error) return <div>Error! {error.message}</div>;
  if (!data)
    return (
      <div className="h-80 w-full flex justify-center items-center">
        <h1 className="text-5xl font-semibold text-center">Loading...</h1>
      </div>
    );

  return (
    <>
      <section className="pt-16 pb-20 !bg-light">
        <div className="container 2xl:px-0">
          <div className="xl:grid grid-cols-12 gap-6">
            <CompanyFilter
              setCurrentPage={setCurrentPage}
              setCompanyFilter={setCompanyFilter}
              defaultData={data.companies}
            />

            <div className="col-span-9">
              <div className="bg-white rounded-md md:flex flex-wrap justify-between items-center mb-6 py-2.5 md:py-2">
                <p className="text-xs font-bold text-black leading-4 px-6 mb-6 md:mb-0">
                  We have found{" "}
                  <span className="text-themePrimary">
                    {AllCompanies?.totalCompanyCount}
                  </span>{" "}
                  Company
                </p>
                {/* <div className="text-center mr-2.5">
                  <Link
                    href="/company/add-company"
                    className="block w-auto bg-themePrimary text-white px-6 py-2.5 text-xss font-medium rounded-md hover:bg-black transition-all outline-none"
                  >
                    Add Your Company
                  </Link>
                </div> */}
              </div>
              <div className="grid gap-6 xl:gap-6 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                {data?.loading &&
                  _.map(data?.companies, (item) => (
                    <div key={item.id}>
                      <ImageOpt
                        src={item.img}
                        alt="image"
                        width={315}
                        height={437}
                      />
                    </div>
                  ))}
                {AllCompanies.companies.length > 0 &&
                  _.map(currentCompanies, (item, index) => (
                    <CompanyItem key={index} item={item} />
                  ))}
              </div>
              {AllCompanies.length === 0 && (
                <div className="h-80 flex justify-center items-center text-center">
                  <h2 className="text-4xl font-semibold">No Data Found ☹️</h2>
                </div>
              )}

              {AllCompanies?.totalCompanyCount > companiesPerPage && (
                <Pagination
                  totalCount={AllCompanies?.totalCompanyCount}
                  showPerPage={companiesPerPage}
                  handlePageChange={handlePageChange}
                  currentPage={currentPage}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Company = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Layout>
        <main>
          <PageTitle title="All Companies" />
          <CompanyDataList />
        </main>
      </Layout>
    </>
  );
};

export default Company;
