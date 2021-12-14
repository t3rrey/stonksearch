import type { NextPage } from "next";
import Sidebar from "../components/Sidebar";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="flex">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Sidebar />
      <h1 className="text-6xl font-daughter">this is a test</h1>
    </div>
  );
};

export default Home;
