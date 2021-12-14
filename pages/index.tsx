import type { NextPage } from "next";
import Sidebar from "../components/Sidebar";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="flex bg-gray-300 h-screen">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Sidebar />
    </div>
  );
};

export default Home;
