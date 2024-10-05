import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Video from "../components/Video";
import Menu from "../components/Menu";
import Gallery from "../components/Gallery";
import Review from "../components/Review";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <Video />
      <Menu />
      <Gallery />
      <Review />
      <Blog />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
