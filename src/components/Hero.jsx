import React from "react";

const Hero = () => {
  return (
    <section className="py-28 px-5 bg-[#ECF8FF]">
      <div className="container mx-auto">
        <div>
          {/* hero header start */}
          <div className="text-center">
            <h3 className="capitalize text-[#FFAB00] font-bold text-lg md:text-2xl">
              our Photo Gallery
            </h3>
            <h1 className="md:w-[560px] mx-auto capitalize text-[#0066B3] font-bold text-2xl md:text-[40px] md:leading-normal break-words">
              Look at Our cleanta cleaning service Insides
            </h1>
          </div>
          {/* hero header end */}

          {/* hero menus end */}
          <div className="my-5 flex flex-wrap items-center justify-center gap-5">
            <a
              className="md:py-4 md:px-7 py-2 px-3 font-semibold text-base bg-white hover:bg-[#FFAB00] hover:text-white"
              href="@">
              View All
            </a>
            <a
              className="md:py-4 md:px-7 py-2 px-3 font-semibold text-base bg-white hover:bg-[#FFAB00] hover:text-white"
              href="@">
              Residential
            </a>
            <a
              className="md:py-4 md:px-7 py-2 px-3 font-semibold text-base bg-white hover:bg-[#FFAB00] hover:text-white"
              href="@">
              Commercial
            </a>
            <a
              className="md:py-4 md:px-7 py-2 px-3 font-semibold text-base bg-white hover:bg-[#FFAB00] hover:text-white"
              href="@">
              Window
            </a>
            <a
              className="md:py-4 md:px-7 py-2 px-3 font-semibold text-base bg-white hover:bg-[#FFAB00] hover:text-white"
              href="@">
              Kitchen
            </a>
          </div>
          {/* hero menus end */}

          {/* hero images end */}
          <div>
            {/* image div */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center justify-center">
              <div className="relative">
                <img
                  className="w-full"
                  src="images/1.png"
                  alt="Photo_Gallery_Image"
                />
                <img
                  className="absolute bottom-4 px-5"
                  src="images/hover.png"
                  alt="Photo_Gallery_Image"
                />
              </div>
              <img
                className="w-full"
                src="images/2.png"
                alt="Photo_Gallery_Image"
              />
              <img
                className="w-full"
                src="images/3.png"
                alt="Photo_Gallery_Image"
              />
              <img
                className="w-full"
                src="images/5.png"
                alt="Photo_Gallery_Image"
              />
              <img
                className="w-full"
                src="images/6.png"
                alt="Photo_Gallery_Image"
              />
              <img
                className="w-full"
                src="images/4.png"
                alt="Photo_Gallery_Image"
              />
            </div>
            {/* button div */}
            <div className="mt-5 text-center">
              <button className="py-5 px-7 bg-[#0066B3] text-white text-base font-bold">
                View All Projects
              </button>
            </div>
          </div>
          {/* hero images end */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
