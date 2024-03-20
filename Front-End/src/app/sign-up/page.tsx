"use client";

import Layout from "@/components/Layout/Layout";
import useUser, { UserLogin } from "@/lib/auth/user";
import RegisterForm from "@/components/register/register-form";
import Head from "next/head";
import React from "react";

const SignUp = () => {
  const { loggedIn, loggedOut } = useUser();
  if (loggedIn) return <UserLogin />;

  if (loggedOut) {
    return (
      <>
        <Head>
          <meta name="description" content="Generated by create next app" />
        </Head>

        <Layout>
          <main>
            <section className="py-24 md:py-32 bg-light">
              <RegisterForm />
            </section>
          </main>
        </Layout>
      </>
    );
  }
};

export default SignUp;