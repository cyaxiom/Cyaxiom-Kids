import React from "react";
import {
  Hero,
  Discover,
  Register,
  NewsLetter,
  Subscribe,
} from "../../components/z-index.component";

function Home() {
  return (
    <div className="">
      <Hero />
      <Discover />
      <Register />
      <NewsLetter />
      <Subscribe/>
    </div>
  );
}

export default Home;
