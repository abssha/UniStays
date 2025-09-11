import React from "react";
import Marquee from "react-fast-marquee";

const footer = ({ img }) => {
  return (
    <div className="md:h-100 h-70 bg-gray-50">
      <div className="pt-10 md:pt-20">
        <h1 className="text-center font-bold text-4xl md:text-5xl">
          The <span className="text-[#60C3AD]">spotlight</span> on us
        </h1>
        <p className="text-center font-normal text-xl/8 md:text-2xl/9 text-[#4E5253]">
          We don't just make second homes. We make headlines as well.
        </p>
      </div>
      <div className="md:mt-10 mt-5 h-10 relative">
        <Marquee
          pauseOnHover="true"
          loop={0}
          speed={100}
          md:speed={150}
          className="flex p-7"
        >
          {[...img, ...img].map((src, index) => (
            <img key={index} className="pr-3 h-10 md:h-15" src={src} alt="" />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default footer;
