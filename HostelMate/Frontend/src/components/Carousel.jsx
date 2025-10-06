import { useState, useEffect } from "react";

const Carousel = ({ images, interval = 3000 }) => {

    const headings=[
        "Your Comfort, Our Priority",
        "Experience the Best Student Living",
        "Where Comfort Meets Convenience",
        "Live, Learn, and Thrive with Us"
    ]

    const captions=[
        "Relax in fully furnished rooms designed to feel like home.",
        "Modern spaces, vibrant community, and everything within reach.",
        "From study zones to common areas — we’ve got you covered.",
        "A perfect blend of academics, friendships, and lifestyle."
    ]

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="">
        <div className="w-full md:w-[60vw] mt-12 md:-mt-2 overflow-hidden md:ml-10">
        {/* Carousel wrapper */}
        <div className="relative h-80 md:h-140 w-full">
            {images.map((src, index) => (
            <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
            >
                {/* Left text section */}
                <div className="bg-black/60 md:bg-transparent w-full absolute z-30 left-0 top:0 md:-top-20 md:w-[30vw] h-full flex flex-col justify-center p-6 text-gray-900">
                <h1 className="md:text-6xl text-3xl font-bold text-center md:text-left text-white md:text-black">
                    {headings[index]}
                </h1>
                <div className="mt-4 italic text-white md:text-teal-900 text-center md:text-left md:w-[20vw] md:text-xl font-semibold">
                    <p>
                        "{captions[index]}"
                    </p>
                </div>
                </div>

                {/* Right image section */}
                <div className="absolute top-0 right-0 w-full md:w-[35vw] h-full">
                <img
                    src={src}
                    className="h-full w-full object-cover md:rounded-xl"
                    alt=""
                />
                </div>
            </div>
            ))}

            {/* Slider indicators */}
            <div className="flex justify-center">
                <div className="absolute z-30 rounded-lg flex bottom-5 md:left-5 bg-gray-300 p-1 pr-2 pl-2 space-x-5">
                {images.map((_, idx) => (
                    <button
                    key={idx}
                    type="button"
                    className={`md:w-2 md:h-2 w-1 h-1 rounded-full ${
                        idx === currentIndex ? "bg-white" : "bg-gray-500"
                    }`}
                    aria-current={idx === currentIndex ? "true" : "false"}
                    aria-label={`Slide ${idx + 1}`}
                    ></button>
                ))}
                </div>
            </div>

        </div>
        </div>

    </div>
  );
};

export default Carousel;
