import { useState } from "react";
import { SLIDER_DATA } from "../utils/constants";

const HomeBanner = () => {
  const [count, setCount] = useState(1);

  const slideImg = SLIDER_DATA.find(item => { return item.id === count});

  const handleNext = () => {
    if (count < SLIDER_DATA.length) {
      setCount(c => c + 1);
    }
  };

  const handlePrev = () => {
    if (count > 1) {
      setCount(c => c - 1);
    }
  };

  // console.log("Home", count, slideImg);

  return (
    <div className="px-4 mt-6 sm:px-6 lg:px-6 relative">
      <div
        style={{ backgroundImage: `url(${slideImg?.image})` }}
        className="h-120 md:h-[80dvh] flex flex-col bg-cover bg-center bg-no-repeat rounded-2xl"
      >
         <div className="rounded-2xl absolute bottom-0 left-1/2 w-[97%] -translate-x-1/2 h-full bg-gradient-to-t from-black/80 via-black/30 to-transparent "> </div>

        <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10 z-10">
          <h1 className="font-bold text-xl md:text-3xl lg:text-5xl text-foreground-inverse">
           {slideImg?.title}
          </h1>
          <div className="flex gap-2 absolute top-4 right-10">
            <button className="btn"  disabled={count === 1}  onClick={handlePrev}>
              <svg
                className="h-6 w-6 fill-current md:h-8 md:w-8 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
              </svg>
            </button>
            <button className="btn" disabled={count === SLIDER_DATA.length} onClick={handleNext}>
              <svg
                className="h-6 w-6 fill-current md:h-8 md:w-8 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
