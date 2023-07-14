import React from "react";

const Achievement = () => {
  return (
    <section className="bg-[#0066B3] py-32">
      <div className="container mx-auto">
        <div>
          {/* achievement text start */}
          <div className="text-center">
            <h3 className="capitalize text-white font-bold text-lg md:text-2xl mb-3">
              our best achievement
            </h3>
            <h1 className="md:w-[650px] mx-auto capitalize text-white font-bold text-2xl md:text-[40px] md:leading-normal break-words">
              We feel very proud for our great achievement
            </h1>
          </div>
          {/* achievement text end */}

          {/* achievement card end */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-5">
            <img src="/images/achievement/1.png" alt="" />
            <img src="/images/achievement/2.png" alt="" />
            <img src="/images/achievement/3.png" alt="" />
            <img src="/images/achievement/4.png" alt="" />
          </div>
          {/* achievement card end */}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
