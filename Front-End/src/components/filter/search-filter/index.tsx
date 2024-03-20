"use client";

import ImageOpt from "@/components/optimize/image";
import { ThemeContext } from "@/context/ThemeContext";
import styled from "@emotion/styled";
import _ from "lodash";
import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";

interface JobFieldValues {
  jobTitle: string;
  location: string;
  category: string;
}

interface CompanyFieldValues {
  companyName: string;
  category: string;
}

export const JobsFilter = ({
  types,
  jobExperience,
  setCurrentPage,
  setJobFilter,
  defaultData,
}: {
  types: {
    types: string;
    count: number;
  }[];
  jobExperience: {
    value: string;
    count: number;
  }[];
  setCurrentPage: any;
  setJobFilter: React.Dispatch<React.SetStateAction<any[]>>;
  defaultData: any[];
}) => {
  const { categoryData } = useContext(ThemeContext) as any;
  const [jobTypes, setJobTypes] = useState<string[]>([]);
  const [experienceYear, setExperienceYear] = useState<string[]>([]);
  const {
    control,
    formState: { isDirty, isValid, errors },
    reset: handleResetForm,
    handleSubmit,
    getValues,
  } = useForm<JobFieldValues>({ mode: "onChange" });

  /* --------------- reset all form field on click reset button --------------- */
  const ClearFilterHandler = () => {
    setJobTypes([]);
    setExperienceYear([]);
    setCurrentPage(1);
    handleResetForm();
  };

  /* -------------------- set value to jobTypes form field -------------------- */
  const AddJobTypesHandler = async (
    value: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.checked) {
      if (!jobTypes.includes(value)) {
        await setJobTypes([...jobTypes, value]);
        setCurrentPage(1);
      }
    } else {
      await setJobTypes(jobTypes.filter((item: any) => item !== value));
      setCurrentPage(1);
    }
  };

  /* ------------------- set value to experienceYear form field ------------------- */
  const AddExperienceHandler = async (
    value: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.checked) {
      if (!experienceYear.includes(value)) {
        await setExperienceYear([...experienceYear, value]);
        setCurrentPage(1);
      }
    } else {
      await setExperienceYear(_.without(experienceYear, value));
      setCurrentPage(1);
    }
  };

  const handleClickSearch = () => {
    let newJobFilter = [...defaultData];
    if (getValues().category !== "") {
      newJobFilter = newJobFilter.filter(
        (item) => item.category === getValues().category
      );
    }
    if (getValues().jobTitle !== "") {
      newJobFilter = newJobFilter.filter((item) =>
        item.jobTitle
          .toLowerCase()
          .includes(getValues().jobTitle.trim().toLowerCase())
      );
    }
    if (getValues().location !== "") {
      newJobFilter = newJobFilter.filter((item) =>
        item.location
          .toLowerCase()
          .includes(getValues().location.trim().toLowerCase())
      );
    }
    if (jobTypes.length) {
      newJobFilter = newJobFilter.filter((item) =>
        jobTypes.find((type) => item.jobTypes.join("-").includes(type))
      );
    }
    if (experienceYear.length) {
      newJobFilter = newJobFilter.filter((item) =>
        experienceYear.includes(item.jobExperience)
      );
    }
    jobExperience;
    if (
      getValues().jobTitle === "" &&
      getValues().category === "" &&
      getValues().location === "" &&
      !experienceYear.length &&
      !jobTypes.length
    ) {
      newJobFilter = [...defaultData];
    }

    setJobFilter(newJobFilter);
  };

  return (
    <div className="col-span-3">
      <div className="bg-white rounded-lg">
        <div className="px-6 py-3 flex items-center justify-between border-b border-gray">
          <p className="text-xs py-2 font-bold text-black leading-4">
            Search Filter
          </p>
          {(getValues().location !== "" ||
            getValues().jobTitle !== "" ||
            getValues().category !== "" ||
            jobTypes.length > 0 ||
            experienceYear.length > 0) && (
            <button
              type="button"
              onClick={ClearFilterHandler}
              className="text-xss1 font-normal text-grayLight px-2.5 py-2 rounded-lg duration-300 ease-in-out hover:text-red-400 leading-4"
            >
              Clear
            </button>
          )}
        </div>
        <div className="p-6">
          <form className="border-b border-gray">
            <div className="mb-4">
              <Controller
                control={control}
                name="jobTitle"
                defaultValue=""
                render={({
                  field: {
                    name: fieldName,
                    value,
                    onChange: handleChange,
                    onBlur: handleBlur,
                  },
                }) => {
                  const error = errors[fieldName];
                  return (
                    <input
                      className="bg-light rounded-md w-full text-grayLight text-base py-3 px-2 leading-tight focus:outline-none"
                      type="text"
                      onChange={(e) => {
                        handleChange(e.target.value); // method from hook form register
                        setCurrentPage(1); // current page reset to 0
                      }}
                      value={value}
                      onBlur={handleBlur}
                      placeholder="Job Title or Keyword"
                    />
                  );
                }}
              />
            </div>
            <div className="mb-4">
              <Controller
                control={control}
                name="location"
                defaultValue=""
                render={({
                  field: {
                    name: fieldName,
                    value,
                    onChange: handleChange,
                    onBlur: handleBlur,
                  },
                }) => {
                  const error = errors[fieldName];
                  return (
                    <input
                      className="bg-light rounded-md w-full text-grayLight text-base py-3 px-2 leading-tight focus:outline-none"
                      type="text"
                      onChange={(e) => {
                        handleChange(e.target.value); // method from hook form register
                        setCurrentPage(1); // current page reset to 0
                      }}
                      value={value}
                      onBlur={handleBlur}
                      placeholder="Location"
                    />
                  );
                }}
              />
            </div>
            <div className="jobCategorise pb-4">
              <Controller
                control={control}
                name="category"
                defaultValue=""
                render={({
                  field: {
                    name: fieldName,
                    value,
                    onChange: handleChange,
                    onBlur: handleBlur,
                  },
                }) => {
                  const error = errors[fieldName];
                  return (
                    <select
                      aria-label="Categories"
                      onChange={(e) => {
                        handleChange(e.target.value); // method from hook form register
                        setCurrentPage(1); // current page reset to 0
                      }}
                      onBlur={handleBlur}
                      value={value}
                      className="border-0 focus:shadow-none h-[52px] bg-light text-xxs text-grayLight text-base font-normal focus-visible:white focus:outline-none w-full svg_icon px-2 appearance-none rounded-md"
                    >
                      <option value="">Select Categories</option>
                      {_.map(categoryData, (item, index) => {
                        return (
                          <option value={item.categoryTitle} key={index}>
                            {_.capitalize(item.categoryTitle)}
                          </option>
                        );
                      })}
                    </select>
                  );
                }}
              />
            </div>
          </form>
        </div>

        {/* <!-- check Option --> */}
        <div className="collapsed-group mb-4">
          {types?.length > 0 && (
            <div className="mb-2">
              <div className="px-6 flex items-center justify-between">
                <div className="">
                  <p className="text-xs font-bold text-black leading-4">
                    Job Type
                  </p>
                </div>
                <button className="btnCollapsedToggle">
                  <ImageOpt
                    width={20}
                    height={20}
                    noPlaceholder
                    src="assets/img/minus.svg"
                    alt="icon"
                  />
                </button>
              </div>
              {/* <!-- collapsed-item --> */}
              <div className="collapsed-item px-6 py-4">
                <div className="border-b border-gray">
                  {_.map(_.sortBy(types, "_id"), (item, key) => {
                    return (
                      <div className="mb-3 w-full relative" key={key}>
                        <div className="w-full">
                          <InputCheckBox
                            id={`${item}-${key}`}
                            type="checkbox"
                            onChange={(e) => AddJobTypesHandler(item.types, e)}
                            label={_.capitalize(item.types)}
                            checked={jobTypes.includes(item.types)}
                            className="text-themeLight"
                          />
                        </div>
                        <span className="text-xs text-deep font-normal top-0 right-0 absolute">
                          {item.count}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <!--/ collapsed-item --> */}
            </div>
          )}
          {jobExperience?.length > 0 && (
            <div className="mb-2">
              <div className="px-6 flex items-center justify-between">
                <div className="">
                  <p className="text-xs font-bold text-black leading-4">
                    Experience
                  </p>
                </div>
                <button className="btnCollapsedToggle">
                  <ImageOpt
                    width={20}
                    height={20}
                    noPlaceholder
                    src="assets/img/minus.svg"
                    alt="icon"
                  />
                </button>
              </div>
              {/* <!-- collapsed-item --> */}
              <div className="collapsed-item px-6 py-4">
                <div>
                  {_.map(_.sortBy(jobExperience, "_id"), (item, key) => {
                    const name = _.replace(item.value, / /g, "-").toLowerCase();
                    return (
                      <div className="mb-3 w-full relative" key={key}>
                        <div className="w-full">
                          <InputCheckBox
                            id={`${item.value} + ${key}`}
                            type="checkbox"
                            label={`${item.value}+ Years`}
                            onChange={(e) => AddExperienceHandler(name, e)}
                            checked={experienceYear.includes(name)}
                            className="text-themeLight"
                          />
                        </div>
                        <span className="text-xs text-deep font-normal top-0 right-0 absolute">
                          {item.count}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <!--/ collapsed-item --> */}
            </div>
          )}
          {/* Button hidden */}
          <div className="text-center pb-4 px-6">
            <button
              type="button"
              className="w-full bg-themePrimary text-white px-6 py-3 text-xs font-medium rounded-md hover:bg-black transition-all outline-none"
              onClick={handleClickSearch}
            >
              Search Job
            </button>
          </div>
        </div>
        {/* <!--/ check Option --> */}
      </div>
    </div>
  );
};

export const CompanyFilter = ({
  setCurrentPage,
  setCompanyFilter,
  defaultData,
}: {
  setCurrentPage: any;
  setCompanyFilter: React.Dispatch<React.SetStateAction<any[]>>;
  defaultData: any[];
}) => {
  const { categoryData } = React.useContext(ThemeContext) as any;
  const {
    control,
    formState: { isDirty, isValid, errors },
    reset: handleResetForm,
    getValues,
  } = useForm<CompanyFieldValues>({ mode: "onChange" });

  /* --------------- reset all form field on click reset button --------------- */
  const ClearFilterHandler = () => {
    handleResetForm();
  };

  const handleClickSearch = () => {
    let newCompanyFilter = [...defaultData];
    if (getValues().companyName !== "") {
      newCompanyFilter = newCompanyFilter.filter((item) =>
        item.companyName
          .toLowerCase()
          .includes(getValues().companyName.trim().toLowerCase())
      );
    }
    if (getValues().companyName === "") {
      newCompanyFilter = [...defaultData];
    }

    setCompanyFilter(newCompanyFilter);
  };

  return (
    <div className="col-span-3">
      <div className="bg-white rounded-lg">
        <div className="px-6 py-3 flex items-center justify-between border-b border-gray">
          <p className="text-xs py-2 font-bold text-black leading-4">
            Search Filter
          </p>
          {(getValues().companyName !== "" || getValues().category !== "") && (
            <button
              type="button"
              onClick={ClearFilterHandler}
              className="text-xss1 font-normal text-grayLight px-2.5 py-2 rounded-lg duration-300 ease-in-out hover:text-red-400 leading-4"
            >
              Clear
            </button>
          )}
        </div>
        <div className="p-6">
          <form className="">
            <div className="mb-4">
              <Controller
                control={control}
                name="companyName"
                defaultValue=""
                render={({
                  field: {
                    name: fieldName,
                    value,
                    onChange: handleChange,
                    onBlur: handleBlur,
                  },
                }) => {
                  const error = errors[fieldName];
                  return (
                    <input
                      className="bg-light rounded-md w-full py-3 px-2 leading-tight focus:outline-none"
                      type="text"
                      onChange={(e) => {
                        handleChange(e); // method from hook form register
                        setCurrentPage(1); // current page reset to 0
                      }}
                      value={value}
                      onBlur={handleBlur}
                      placeholder="Company Name"
                    />
                  );
                }}
              />
            </div>
          </form>
          <div className="text-center pt-2 pb-3">
            <button
              type="button"
              className="w-full bg-themePrimary text-white px-6 py-3 text-xs font-medium rounded-md hover:bg-black transition-all outline-none"
              onClick={handleClickSearch}
            >
              Search Company
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputCheckBox = styled(Form.Check)`
  .form-check-input {
    width: 20px;
    height: 20px;
    background-color: #d5dde5;
    border-color: #d5dde5;
    border-radius: 3px;
    margin-top: 2px;
    :checked {
      background-color: #1caf57;
      border-color: #1caf57;
    }
    :focus {
      box-shadow: none;
    }
  }
  .form-check-label {
    padding-left: 10px;
    width: 100%;
    font-size: 16px;
    line-height: 18px;
    cursor: pointer;
  }
`;
