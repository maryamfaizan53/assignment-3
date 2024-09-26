import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center text-center space-y-6">
      <h1 className="text-4xl text-teal-400 font-extrabold">
        Routing In Next.JS
      </h1>
      <p className="text-white max-w-2xl">
        <b> 1. File-Based Routing System</b> <br />
        Next.js automatically creates routes based on the file structure inside
        the pages/ (or app/ directory for newer versions).
        <br />
        <b>2. Dynamic Routing</b> <br />
        To create dynamic routes, wrap the file name in square brackets.
        <br />
        <b>3. Nested Routes</b> <br />
        Subdirectories in the pages/ folder create nested routes. Example:
        pages/blog/posts.js will create the /blog/posts route. <br />
        <b>4. API Routes</b> <br />
        You can create API routes inside the pages/api/ directory. These routes
        are server-side and are used for handling backend logic. <br />
        <b>5. Client-Side Navigation with Link</b> <br />
        Use the Link component from next/link for internal navigation without
        refreshing the page. <br />
        <b>6. Programmatic Navigation with useRouter()</b> <br />
        Use the useRouter() hook to navigate programmatically inside components.
        PropTypes.bool.isRequired. <br />
       
        
      </p>
      <Link href="/">
        <button className="px-4 py-2 text-white bg-teal-500 rounded-lg font-extrabold hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-xl shadow-teal-400/50">
          Go To Home
        </button>
      </Link>
    </div>
  );
};

export default About;
