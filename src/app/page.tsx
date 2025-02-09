import Benefit from "@/components/Benefit";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Gif from "@/components/Gif";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Pattern from "@/components/Pattern";
import Statistic from "@/components/Statistic";
import VideoUsers from "@/components/VideoUsers";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <Hero />
      <Gif />
      <Statistic />
      <Features />
      <Feedback />
      <VideoUsers />
      <Pattern />
      <Benefit />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
