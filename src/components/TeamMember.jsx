import React from "react";

const TeamMember = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto">
        <div>
          {/* team member text start */}
          <div className="text-center">
            <h3 className="capitalize text-[#FFAB00] font-bold text-lg md:text-2xl mb-3">
              our best achievement
            </h3>
            <h1 className="md:w-[650px] mx-auto capitalize text-[#0066B3] font-bold text-2xl md:text-[40px] md:leading-normal break-words">
              We feel very proud for our great achievement
            </h1>
          </div>
          {/* team member text end */}

          {/* team member card end */}
          <div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5">
              {/* 1 */}
              <div className="rounded-b-lg border-b-[15px] border-[#0066B3] hover:border-[#FFAB00] [&>div>h2]:hover:text-[#FFAB00] relative">
                <img
                  className="w-full"
                  src="images/team_img/img.png"
                  alt="Team_images"
                />
                <img
                  className="absolute top-5 left-5"
                  src="images/team_img/share.png"
                  alt=""
                />

                <div className="px-5 py-7 text-center">
                  <h2 className="text-[#0066B3] text-2xl font-bold">
                    Michael x. Daniel
                  </h2>
                  <p className="text-base font-semibold">office cleaner</p>
                </div>
              </div>
              {/* 2 */}
              <div className="rounded-b-lg border-b-[15px] border-[#0066B3] hover:border-[#FFAB00] [&>div>h2]:hover:text-[#FFAB00] relative">
                <img
                  className="w-full"
                  src="images/team_img/img (1).png"
                  alt="Team_images"
                />
                <img
                  className="absolute top-5 left-5"
                  src="images/team_img/share.png"
                  alt=""
                />
                <div className="px-5 py-7 text-center">
                  <h2 className="text-[#0066B3] text-2xl font-bold">
                    Michael x. Daniel
                  </h2>
                  <p className="text-base font-semibold">office cleaner</p>
                </div>
              </div>
              {/* 3 */}
              <div className="rounded-b-lg border-b-[15px] border-[#0066B3] hover:border-[#FFAB00] [&>div>h2]:hover:text-[#FFAB00] relative">
                <img
                  className="w-full"
                  src="images/team_img/img (2).png"
                  alt="Team_images"
                />
                <img
                  className="absolute top-5 left-5"
                  src="images/team_img/share.png"
                  alt=""
                />
                <div className="px-5 py-7 text-center">
                  <h2 className="text-[#0066B3] text-2xl font-bold">
                    Michael x. Daniel
                  </h2>
                  <p className="text-base font-semibold">office cleaner</p>
                </div>
              </div>
              {/* 4 */}
              <div className="rounded-b-lg border-b-[15px] border-[#0066B3] hover:border-[#FFAB00] [&>div>h2]:hover:text-[#FFAB00] relative">
                <img
                  className="w-full"
                  src="images/team_img/img (3).png"
                  alt="Team_images"
                />
                <img
                  className="absolute top-5 left-5"
                  src="images/team_img/share.png"
                  alt=""
                />
                <div className="px-5 py-7 text-center">
                  <h2 className="text-[#0066B3] text-2xl font-bold">
                    Michael x. Daniel
                  </h2>
                  <p className="text-base font-semibold">office cleaner</p>
                </div>
                {/*  */}
              </div>
            </div>
            {/* view all button */}
            <div className="mt-5 text-center">
              <button className="py-5 px-7 bg-[#0066B3] text-white text-base font-bold">
                View All Projects
              </button>
            </div>
            {/* view all button */}
          </div>
          {/* team member card end */}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
