import React, { Fragment } from "react";
import { Footer } from "./Footer";
import { Accordian } from "./Accordian";
import { CardDetails } from "./CardDetails";
import { Carousel } from "./Carousel";
import { Navbar } from "./Navbar";
import { Information } from "./Information";
import Meta from "./Meta";

const HomePage = () => {
  return (
    <Fragment>
      <Meta title={'Welcome To Cyber Tronic Event - IODump'}/>
      <Carousel />
      <CardDetails />
      <Information />
      <Accordian />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
