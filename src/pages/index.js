import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/layouts/Layout";
import DashboardAdmin from "@/components/admin/Dashboard/Dashboard";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import DashboardClient from "@/components/client/Dashboard/Dashboard";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if running in the browser before accessing localStorage
    if (typeof window !== "undefined") {
      const username = localStorage.getItem("username");
      setIsLoggedIn(!!username); // Check if username exists
      const isAdminUser = username === "admin";
      setIsAdmin(isAdminUser);
    }
  }, []);
  return (
    <Layout>
      <div>
      {isAdmin ? (
        <DashboardAdmin/>
      ) : (
        <DashboardClient/>
      )   }
        </div>
    </Layout>
  );
}
