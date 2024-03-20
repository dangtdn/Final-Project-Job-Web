import Link from "next/link";
import React from "react";
import CategoryItem from "./CategoryItem";

export type Category = {
  _id: string;
  categoryTitle: string;
  subCategory: string;
  avatar: string;
  iconUrl?: string;
};

// export const categoryList: Category[] = [
//   {
//     categoryTitle: "Accounting/Finance",
//     logo: "./assets/img/top-c-1.svg",
//     subCategory: ["1234 Jobs"],
//   },
//   {
//     categoryTitle: "Automotive Jobs",
//     logo: "./assets/img/top-c-2.svg",
//     subCategory: ["1234 Jobs"],
//   },
//   {
//     categoryTitle: "Bank/Non-Bank Fin.",
//     logo: "./assets/img/top-c-3.svg",
//     subCategory: ["1234 Jobs"],
//   },
//   {
//     categoryTitle: "Commercial/Supply",
//     logo: "./assets/img/top-c-4.svg",
//     subCategory: ["1234 Jobs"],
//   },
//   {
//     categoryTitle: "Construction/Facilities",
//     logo: "./assets/img/top-c-5.svg",
//     subCategory: ["1234 Jobs"],
//   },
//   {
//     categoryTitle: "Design/Creative",
//     logo: "./assets/img/top-c-6.svg",
//     subCategory: ["1234 Jobs"],
//   },
//   {
//     categoryTitle: "Education/Training",
//     logo: "./assets/img/top-c-7.svg",
//     subCategory: ["1234 Jobs"],
//   },
//   {
//     categoryTitle: "Engineer/Architects",
//     logo: "./assets/img/top-c-8.svg",
//     subCategory: ["1234 Jobs"],
//   },
//   {
//     categoryTitle: "Hospitality/Travel",
//     logo: "./assets/img/top-c-9.svg",
//     subCategory: ["1234 Jobs"],
//   },
//   {
//     categoryTitle: "Electrical/Repair",
//     logo: "./assets/img/top-c-10.svg",
//     subCategory: ["1234 Jobs"],
//   },
//   {
//     categoryTitle: "IT/Telecommunication",
//     logo: "./assets/img/top-c-11.svg",
//     subCategory: ["1234 Jobs"],
//   },
//   {
//     categoryTitle: "Marketing/Sales",
//     logo: "./assets/img/top-c-12.svg",
//     subCategory: ["1234 Jobs"],
//   },
// ];

const PopularCategories = ({ data }: { data?: Category[] }) => {
  return (
    <section className="py-16 md:py-20 lg:py-25 !bg-light">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-themePrimary font-bold text-xs leading-none mb-2">
            Popular Categories
          </p>
          <h2 className="text-xl font-bold text-black">
            Browse Top Categories
          </h2>
        </div>
        <div className="grid gap-4 xl:gap-5 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
          {data
            ?.filter((_, index) => index < 12)
            .map((item, index) => (
              <CategoryItem key={index} data={item} />
            ))}
        </div>
        <div className="text-center mt-14">
          <Link
            href="/all-categories"
            className="text-white text-xs font-normal transition-all bg-arsenic px-6 py-2.5 rounded-lg hover:bg-themePrimary"
          >
            Browse All Category
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
