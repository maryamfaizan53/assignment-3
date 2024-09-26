import React from 'react';
import Link from 'next/link';

const Skills = () => {
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center text-center space-y-6">
      <h1 className="text-4xl text-teal-400 font-extrabold"><i>Linking In Next.js</i></h1>
      <p className="text-white max-w-2xl">
     <b> 1. Static Props (getStaticProps)</b> <br />
Fetches data at build time and passes it as props to the page component.
Used for pre-rendering static pages that do not need frequent data updates. <br />

<b>2. Server-Side Props (getServerSideProps)</b> <br />
Fetches data on every request and passes it as props to the page component.
Used for dynamic content that needs to be updated on every request (e.g., dashboards, real-time data).
Pages using server-side props are rendered on the server before sending them to the client. <br />
<b>3. Client-Side Props</b> <br />
Props are passed directly from a parent component to a child component during render.
Often used in combination with useEffect for client-side data fetching after the component mounts.
Suitable for non-SEO content or actions that only need to happen on the client side (e.g., user interactions). <br />
<b>4. Dynamic Route Props (getStaticPaths with getStaticProps)</b> <br />
Used for dynamic routes to pre-render pages based on dynamic parameters (e.g., user IDs, product IDs).
In combination with getStaticPaths, it generates paths and passes props specific to each route. <br />

<b>5. Default Props</b> <br />
Default values for props can be defined within a component.
This ensures that if a prop is not passed, a fallback value will be used.
Helps avoid undefined or missing prop errors and provides consistent behavior.
      </p>
      <Link href="/">
        <button className="px-4 py-2 text-white bg-teal-500 rounded-lg font-extrabold hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-xl shadow-teal-400/50">
          Go To Home
        </button>
      </Link>
    </div>
  );
};

export default Skills;
