import "./App.css";
import React from "react";
import Navbar from "./components/navBar/Navbar.js";
import HeroScreen from "./components/HeroScreen";
import Login from "./components/login_logic/Login";
import Card1 from "./components/cards/Card1";
import Card2 from "./components/cards/Card2";
import Card3 from "./components/cards/Card3";
import Card4 from "./components/cards/Card4";
import Card5 from "./components/cards/Card5";
import Banner from "./components/cards/Banner";
import Footer from "./components/Footer";
import MLogin from "./mobile_view/MLogin";

function App() {
  document.title = "GMX Free E-Mail";

  return (
    <>
      <div className="web">
        <Navbar />
        <HeroScreen />
        <div className="container">
          <br />
          <Login />
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
          <Card5 />
        </div>
        <Banner />
        <Footer />
      </div>
      <div className="mb">
        <MLogin />
      </div>
    </>
  );
}

export default App;
