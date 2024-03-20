"use client";

import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/page-title";
import { blogsData } from "@/data/blogData";
import Head from "next/head";
import { usePathname } from "next/navigation";

export default function PostPage() {
  const pathName = usePathname();
  const blogId = pathName.split("/").at(-1);
  const blog = blogsData.find(({ id }) => id === blogId);
  return (
    <>
      <Head>
        <title>{blog?.title}</title>
        <meta name="description" content={blog?.excerpt} />
      </Head>
      <Layout>
        <main>
          {/* container */}
          <PageTitle
            title={blog?.title}
            image={blog?.cover_image || "/assets/img/post/default.webp"}
            excerpt={blog?.excerpt}
          />
          <div className="container mx-auto px-4 py-16">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full shadow rounded bg-white !p-8 relative">
                <div className="absolute !px-3 !py-1 rounded shadow-sm bg-green-100 top-2 right-2">
                  <p className="text-sm leading-relaxed">{blog?.date}</p>
                </div>
                <div className="markdown mt-3">
                  <p>{blog?.content}</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
