"use client";

import AddJobAlerts from "@/components/dashboard/job-alerts/add-job-alerts";
import Layout from "@/components/dashboard/layout";
import useUser, { UserGoBack, UserNotLogin } from "@/lib/auth/user";
import Head from "next/head";
import React from "react";

export default function AddNewAlert() {
  const { user, loggedIn, loggedOut, isEmployer } = useUser();
  const userData = user;

  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Layout>
        <main>
          {loggedOut && <UserNotLogin />}
          {userData && loggedIn && <AddJobAlerts />}
        </main>
      </Layout>
    </>
  );
}