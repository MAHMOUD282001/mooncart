import React, { useEffect } from "react";
import {
  Banner,
  Hero,
  PopularProducts,
  RecentProducts,
  ShippingInfo,
  SweetProducts,
  Testimonials,
  TrendingProducts,
} from "../../router";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Hero />
      <Banner />
      <PopularProducts />
      <ShippingInfo />
      <TrendingProducts />
      <Testimonials />
      <RecentProducts />
      <SweetProducts />
    </>
  );
};

export default Home;
