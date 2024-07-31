import React, { useEffect, useState } from "react";

import Navigation from "../component/navigation";
import HeroSlider from "../component/heroSlider";
import Categories from "../component/categories";
import WeekDeal from "../component/weekDeal";
import OfferProduct from "../component/offerProduct";
import ControlledTabs from "../component/allProductsList";
import Brands from "../component/brands";
import SpecialOffer from "../component/specialOffer";
import Facilities from "../component/facilities";
import NewsLatter from "../component/newsLatter";
import Footer from "../component/footer";

const Homepage = () => {

  return (
    <>
      <Navigation />
      <HeroSlider />
      <Categories />
      <WeekDeal />
      <OfferProduct />
      <ControlledTabs />
      <Brands />
      <SpecialOffer />
      <Facilities />
      <NewsLatter />
      <Footer />
      
    </>
  );
};
export default Homepage;
