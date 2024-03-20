"use client";

import ApplicationsByJob from "@/components/dashboard/job/applications-by-job";
import Layout from "@/components/dashboard/layout";
import useUser, { UserGoBack, UserNotLogin } from "@/lib/auth/user";
import Head from "next/head";

const JobApplications = () => {
  const { user, loggedIn, loggedOut, isCandidate } = useUser();

  return (
    <>
      <Head>
        <meta name="description" content="Job Application" />
      </Head>

      <Layout>
        <main>
          {loggedOut && <UserNotLogin />}
          {isCandidate && <UserGoBack />}
          {user && loggedIn && !isCandidate && <ApplicationsByJob />}
        </main>
      </Layout>
    </>
  );
};

export default JobApplications;
