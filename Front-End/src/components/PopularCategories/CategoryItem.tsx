"use client";

import _ from "lodash";
import React from "react";
import ImageOpt from "../optimize/image";
import { useRouter } from "next/navigation";
import { Category } from "./PopularCategories";

const CategoryItem = ({ data }: { data: Category }) => {
  const router = useRouter();

  const OnSearchHandler = (title: string) => {
    const values = {
      category: title,
    } as {
      category: string;
    };
    const filtered = _.pickBy(values, (value: string) => value !== "");
    router.push("/find-job");
  };

  return (
    // <Link href="/">
    <a
      className="text-center bg-white rounded-lg p-6 group cursor-pointer"
      onClick={() => OnSearchHandler(data?.categoryTitle)}
    >
      <div className="mb-3 flex justify-center transition-all group-hover:scale-125">
        {/* {data?.avatar && (
          <>
            {_.includes(data.avatar, ".svg") ? (
              <ImageOpt
                width={60}
                height={60}
                noPlaceholder
                src={data.avatar}
                className="rounded"
                alt="icon"
              />
            ) : (
              <ImageOpt
                width={60}
                height={60}
                className="rounded"
                src={"/assets/img/avatar.png"}
                alt="icon"
              />
            )}
          </>
        )} */}
        <ImageOpt
          width={60}
          height={60}
          className="rounded"
          src={"/assets/img/avatar.png"}
          alt="icon"
        />
      </div>
      <h4 className="text-xs text-black font-normal mb-2">
        {_.capitalize(data.categoryTitle) || data.categoryTitle}
      </h4>
      <p className="text-grayLight text-xss font-normal">
        {/* {data.count || data.subtitle} Jobs */}
        {/* {data.categoryTitle && data.categoryTitle} */}
        {data.subCategory} Job
        {data.subCategory.length > 1 && <span>s</span>}
      </p>
    </a>
    // </Link>
  );
};

export default CategoryItem;
