import {  Outlet } from "react-router-dom";
import Footer from "../components/Footer";

import Header from "../components/Header";

const MasterLayout = () => {
  return (
    <>
     
      <Header />

      <main className="flex-shrink-0">
        <div className="container px-5 py-1">
          <Outlet></Outlet>
        </div>
      </main>

     <Footer />
      
    </>
  );
}

export default MasterLayout