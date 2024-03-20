import _ from "lodash";
import { useRouter } from "next/navigation";
import React from "react";
import ImageOpt from "../optimize/image";

// const CategoryItemTwo = ({ data) => {
const CategoryItemTwo = ({ category }: { category: any }) => {
  const router = useRouter();

  const OnSearchHandler = (title: any) => {
    const values = {
      category: title,
    };
    router.push("/find-job");
  };

  return (
    <div className="bg-white p-3 border-white border border-solid transition-all rounded-md group hover:border-themePrimary">
      <div>
        <div className="mb-2">
          <ImageOpt
            width={70}
            height={70}
            src={"/assets/img/avatar.png"}
            alt="img"
            className={`rounded-lg`}
          />
        </div>
        <h3 className="text-xxs font-normal text-black leading-6 mb-1">
          {/* {data.name} */}
          {category?.categoryTitle}
        </h3>
        {/* <p className="text-grayLight text-xss font-normal">{data.count} Jobs</p> */}
        <p className="text-grayLight text-xss font-normal">
          {category?.count} Job{category?.count > 1 && <span>s</span>}
        </p>
        <a
          onClick={() => OnSearchHandler(category?.categoryTitle)}
          className="text-xss1 font-medium text-themePrimary hover:text-themePrimary leading-5 flex gap-4 items-center cursor-pointer"
        >
          View All Job
          <ImageOpt
            width={16}
            height={16}
            noPlaceholder
            src="assets/img/arrow-right-circle.svg"
            alt="icon"
          />
        </a>
      </div>
    </div>
  );
};

export default CategoryItemTwo;
