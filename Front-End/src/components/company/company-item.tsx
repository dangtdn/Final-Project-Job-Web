import Link from "next/link";
import React from "react";
import ImageOpt from "../optimize/image";

const CompanyItem = ({ item }: { item: any }) => {
  return (
    <div className="relative grid content-between bg-white p-6 border-white border border-solid transition-all rounded-md group hover:!border-themePrimary">
      <div className="text-center pt-4 pb-6">
        <div className="flex justify-center mb-3">
          <ImageOpt
            width={100}
            height={100}
            className="rounded-lg"
            src={item?.logo ? item?.logo : "assets/img/avatar.png"}
            alt="img"
          />
        </div>
        <h3 className="text-xs font-normal text-black leading-6 mb-0">
          {item ? item.companyName : "Company Name"}
        </h3>
        <p className="text-deep text-xss1 font-normal mb-2 leading-6">
          {item ? item.companyTagline : "Web and UI/UX Designer"}
        </p>
        {/* <div className="">
          <ul className="flex flex-wrap justify-center">
            <li>
              <a href="#">
                <ImageOpt
                  width={20}
                  height={20}
                  noPlaceholder
                  src="assets/img/star1.svg"
                  alt="icon"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <ImageOpt
                  width={20}
                  height={20}
                  noPlaceholder
                  src="assets/img/star1.svg"
                  alt="icon"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <ImageOpt
                  width={20}
                  height={20}
                  noPlaceholder
                  src="assets/img/star1.svg"
                  alt="icon"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <ImageOpt
                  width={20}
                  height={20}
                  noPlaceholder
                  src="assets/img/star1.svg"
                  alt="icon"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <ImageOpt
                  width={20}
                  height={20}
                  noPlaceholder
                  src="assets/img/star-disable.svg"
                  alt="icon"
                />
              </a>
            </li>
            <li className="ml-2">
              <a className="text-xss1 text-black leading-5" href="#">
                4.8 (1234)
              </a>
            </li>
          </ul>
        </div> */}
      </div>
      <div className="px-2">
        <ul className="mb-6">
          {item && item.companySize && (
            <li className="mb-3">
              <div className="flex gap-3 items-center text-deep text-xss1 font-normal">
                <ImageOpt
                  width={16}
                  height={16}
                  noPlaceholder
                  className=""
                  src="assets/img/users1.svg"
                  alt="img"
                />
                {item ? item.companySize : "10-20"} Employee
              </div>
            </li>
          )}
          {item && item.avarageSalary && (
            <li className="mb-3">
              <div className="flex gap-3 items-center text-deep text-xss1 font-normal">
                <ImageOpt
                  width={16}
                  height={16}
                  noPlaceholder
                  className=""
                  src="assets/img/dollar-sign3.svg"
                  alt="img"
                />
                {item ? item.avarageSalary : "100K"}
              </div>
            </li>
          )}
          {item && item.location && (
            <li className="mb-0">
              <div className="flex gap-3 items-center text-deep text-xss1 font-normal">
                <ImageOpt
                  width={16}
                  height={16}
                  noPlaceholder
                  className=""
                  src="assets/img/map-pin1.svg"
                  alt="img"
                />
                {item ? item.location : "USA"}
              </div>
            </li>
          )}
        </ul>
      </div>
      <div>
        <Link
          href={`/company/${item?._id ?? item?._id?.$oid}`}
          className="block leading-4 text-deep transition-all font-medium text-xs group-hover:text-white text-center py-3 px-6 bg-light rounded-md group-hover:!bg-themePrimary"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default CompanyItem;
