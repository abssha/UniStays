import React from "react";
import Carousel from "../components/Carousel";
import Cards from "../components/Cards";
import Midsec from "../components/Midsec";
import Midsec1 from "../components/Midsec1";

const HomeTop = () => {
  const slides = [
    "https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fasset-cdn.stanzaliving.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%3Abest%2Cw_700%2Fv1673266619%2FWebsite%2520v5%2FBanner%2FBrand2.jpg&w=1080&q=75",
    "https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fasset-cdn.stanzaliving.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%3Abest%2Cw_700%2Fv1679041277%2FWebsite%2520v5%2FBanner%2FNo_Brokerage.jpg&w=1080&q=75",
    "https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fasset-cdn.stanzaliving.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%3Abest%2Cw_700%2Fv1673266619%2FWebsite%2520v5%2FBanner%2FCoed-2.jpg&w=1080&q=75",
    "https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fasset-cdn.stanzaliving.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%3Abest%2Cw_700%2Fv1679041275%2FWebsite%2520v5%2FBanner%2FAccessibility.jpg&w=1080&q=75",
  ];

  const imgs = [
    "https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fasset-cdn.stanzaliving.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1653291829%2FWebsite%2520v5%2FProductCards%2FStudent_1_copy.png&w=828&q=75",
    "https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fasset-cdn.stanzaliving.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1653291829%2FWebsite%2520v5%2FProductCards%2FCo-living_1_copy.png&w=828&q=75",
    "https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fasset-cdn.stanzaliving.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1653291830%2FWebsite%2520v5%2FProductCards%2FApartments_1_copy.png&w=828&q=75",
  ];

  return (
    <div className="flex flex-col min-h-screen md:pt-30 pt-20">
      <div className="md:flex md:flex-row md:gap-15 md:items-center flex flex-col">
        <Carousel images={slides} />
        <Cards img={imgs} />
      </div>
      <hr className="hidden md:block border-t border-gray-300 mt-10" />
      <Midsec />
      <Midsec1 />
    </div>
  );
};

export default HomeTop;
