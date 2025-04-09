import React from "react";
import {
  Hero,
  Discover,
  Register,
  NewsLetter,
} from "../../components/z-index.component";

function Home() {
  return (
    <div className="bg-red-500 text-3xl">
      <Hero />
      <Discover />
      <Register />
      <NewsLetter />
    </div>
  );
}

export default Home;
