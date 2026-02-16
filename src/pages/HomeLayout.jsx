import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar, Loading } from "../components";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <main className="aline-element py-10 px-10">
          <Outlet />
        </main>
      )}
    </>
  );
};

export default HomeLayout;
