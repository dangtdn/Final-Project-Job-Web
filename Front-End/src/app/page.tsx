"use client";

import { blogsData } from "@/data/blogData";
import { testimonialsData } from "@/data/testimonialsData";
import Banner from "@/components/Banner/Banner";
import Layout from "@/components/Layout/Layout";
import Blogs from "@/components/Blogs/Blogs";
import PopularCategories from "@/components/PopularCategories/PopularCategories";
import RecentJob from "@/components/Job/RecentJob";
import Testimonials from "@/components/testimonials/Testimonials";
import useSWR from "swr";
import { Axios } from "@/lib/utils/axiosKits";

const fetcher = (url: string) => Axios(url).then((res: any) => res.data);
const JobsAPI = "/jobs";
const catsAPI = "/categories";

const loadingCategory = [
  {
    _id: "621253b9bdd5a651f22648c9",
    status: {
      isFeatured: false,
      isActive: true,
    },
    categoryTitle: "Category Name",
    avatar: "/assets/img/avatar.png",
    subCategory: "Sub category",
    count: 0,
  },
  {
    _id: "45457679i8uyjfgser3465578iui",
    status: {
      isFeatured: false,
      isActive: true,
    },
    categoryTitle: "Category Name",
    avatar: "/assets/img/avatar.png",
    subCategory: "Sub category",
    count: 0,
  },
  {
    _id: "43545676uyjhgfbert45",
    status: {
      isFeatured: false,
      isActive: true,
    },
    categoryTitle: "Category Name",
    avatar: "/assets/img/avatar.png",
    subCategory: "Sub category",
    count: 0,
  },
  {
    _id: "456576787978545634trhfhty",
    status: {
      isFeatured: false,
      isActive: true,
    },
    categoryTitle: "Category Name",
    avatar: "/assets/img/avatar.png",
    subCategory: "Sub category",
    count: 0,
  },
  {
    _id: "34657869796774563452345",
    status: {
      isFeatured: false,
      isActive: true,
    },
    categoryTitle: "Category Name",
    avatar: "/assets/img/avatar.png",
    subCategory: "Sub category",
    count: 0,
  },
  {
    _id: "3452345456767897896575634",
    status: {
      isFeatured: false,
      isActive: true,
    },
    categoryTitle: "Category Name",
    avatar: "/assets/img/avatar.png",
    subCategory: "Sub category",
    count: 0,
  },
  {
    _id: "34523543456457568767856745",
    status: {
      isFeatured: false,
      isActive: true,
    },
    categoryTitle: "Category Name",
    avatar: "/assets/img/avatar.png",
    subCategory: "Sub category",
    count: 0,
  },
  {
    _id: "621346456456dd5a651f22648c9",
    status: {
      isFeatured: false,
      isActive: true,
    },
    categoryTitle: "Category Name",
    avatar: "/assets/img/avatar.png",
    subCategory: "Sub category",
    count: 0,
  },
  {
    _id: "dfgrtuy45634524354",
    status: {
      isFeatured: false,
      isActive: true,
    },
    categoryTitle: "Category Name",
    avatar: "/assets/img/avatar.png",
    subCategory: "Sub category",
    count: 0,
  },
  {
    _id: "wet45645766iujtygberer",
    status: {
      isFeatured: false,
      isActive: true,
    },
    categoryTitle: "Category Name",
    avatar: "/assets/img/avatar.png",
    subCategory: "Sub category",
    count: 0,
  },
  {
    _id: "45645676yjhrfdgw",
    status: {
      isFeatured: false,
      isActive: true,
    },
    categoryTitle: "Category Name",
    avatar: "/assets/img/avatar.png",
    subCategory: "Sub category",
    count: 0,
  },
  {
    _id: "ewreryt676879i6kujrythgbe45",
    status: {
      isFeatured: false,
      isActive: true,
    },
    categoryTitle: "Category Name",
    avatar: "/assets/img/avatar.png",
    subCategory: "Sub category",
    count: 0,
  },
];

const Home = () => {
  const { data: categoryData, error: categoryError } = useSWR(
    catsAPI,
    fetcher,
    {
      fallbackData: loadingCategory,
    }
  );
  const { data: jobData, error: jobError } = useSWR(JobsAPI, fetcher, {
    fallbackData: [],
  });
  const totalCount = {
    totalJobs: jobData?.jobs?.length ?? 0,
    totalCompanies: 0,
    totalResumes: 0,
  };
  const CategoryData = ({ categoryData }: { categoryData: any }) => {
    if (!categoryData) {
      return <PopularCategories data={loadingCategory} />;
    }

    return <>{categoryData && <PopularCategories data={categoryData} />}</>;
  };

  const PopularJobsData = ({ data }: { data: any }) => {
    return (
      <>
        <RecentJob data={data} />
      </>
    );
  };

  return (
    <>
      <Layout>
        <main>
          <Banner totalCount={totalCount} categories={categoryData} />
          <CategoryData categoryData={categoryData} />
          {/* <PopularCategories /> */}
          <PopularJobsData data={jobData.jobs} />
          <Testimonials data={testimonialsData} />
          <Blogs data={blogsData} />
        </main>
      </Layout>
    </>
  );
};

export default Home;
