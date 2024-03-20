import React from "react";
import BlogItem from "./BlogItem";
import Link from "next/link";

export type Item = {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  cover_image: string;
};

interface BlogsProps {
  data: Item[];
}

const Blogs: React.FC<BlogsProps> = ({ data }) => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-themePrimary font-bold text-xs leading-none mb-1">
            Our Blog
          </p>
          <h2 className="text-xl font-bold text-black">
            See How You Can Up Your Career Status
          </h2>
        </div>
        <div className="grid gap-4 xl:gap-6 xl:grid-cols-3 md:grid-cols-2">
          {data.map((item, index) => (
            <BlogItem data={item} key={index} />
          ))}
        </div>
        <div className="text-center mt-14">
          <Link
            href="/career-advice"
            className="text-white text-xs font-normal transition-all bg-arsenic px-6 py-2.5 rounded-md hover:bg-themePrimary"
          >
            See All Blog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
