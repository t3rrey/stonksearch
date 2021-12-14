import type { NextPage } from "next";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="flex bg-gray-300 h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow ">
        <Header />
      </div>
    </div>
  );
};

export default Home;
