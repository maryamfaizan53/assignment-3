"use client"

import React from "react";
// import link from "next/link";
import Navbar from "@/app/components/nav";
import Footer from "@/app/components/footer";
import {useRouter} from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <>
      <div className="bg-black h-screen flex flex-row shadow-lg shadow-teal-400/50">
        {/* Sidebar Navbar */}
        <Navbar />

        {/* Main content */}
        <div className="flex flex-col justify-center items-center flex-grow">
          <h1 className="text-teal-400 text-8xl font-extrabold hover:lowercase hover:text-gray-400 shadow-teal-400/50 shadow-2xl">
            Assignment-3
          </h1>
          <div className="mt-8 space-x-4">
          
              <button
                onClick={() => router.push("/routing")}
                className="px-4 py-2 text-white bg-teal-500 rounded-lg font-extrabold hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-xl shadow-teal-400/50"
              >
                Routing
              </button>
          

            <button
              onClick={() => router.push("/linking")}
              className="px-4 py-2 text-white bg-teal-500 rounded-lg font-extrabold hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-xl shadow-teal-400/50"
            >
              Linking
            </button>

            <button
              onClick={() => router.push("/props")}
              className="px-4 py-2 text-white bg-teal-500 rounded-lg font-extrabold hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-xl shadow-teal-400/50 "
            >
              Props
            </button>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Page;
