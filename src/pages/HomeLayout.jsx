import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const HomeLayout = () => {
  return (
    <>
    <Header />
      <Navbar />
      <main className="aline-element py-10">
        <Outlet />
      </main>
    </>
  );
};

export default HomeLayout;
