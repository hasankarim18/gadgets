import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import React from "react";





const App = () => {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-137px)]">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default App
