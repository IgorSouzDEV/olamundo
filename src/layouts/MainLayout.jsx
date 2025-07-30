import { Outlet } from "react-router-dom";
import Menu from "../components/Navigation";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <Menu />
      <main>
        <Banner />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default MainLayout;