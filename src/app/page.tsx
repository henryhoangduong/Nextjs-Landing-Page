import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Gif from "@/components/Gif";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Statistic from "@/components/Statistic";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <Hero />
      <Gif />
      <Statistic />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
