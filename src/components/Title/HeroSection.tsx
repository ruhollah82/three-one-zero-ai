import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="container flex flex-col items-center justify-between md:flex-row text-white">
      <div className="flex w-full flex-col items-center justify-start py-4 md:items-start">
        <div className="mt-10 w-[350px] md:mt-8 lg:w-[425px]">
          <img
            src="src/components/Title/b.jpeg"
            alt="Placeholder"
            className="w-full h-auto"
          />
        </div>
        <h1 className="sr-only">GenAI + Bio</h1>
        <h2 className="mt-6 font-secondary text-xl font-medium md:mt-3 lg:text-2xl">
          Nature didn’t have time, we have GPUs
        </h2>
        <p className="z-10 mt-10 max-w-md text-lg text-muted-foreground md:text-base">
          At 310 AI, our aim is to build the generative AI engine that will make
          programmable biology a reality. This innovation will transform how
          biology is studied and used, making it more accessible and impactful
          for solving real-world problems.
        </p>
      </div>

      <div className="flex size-full max-h-[400px]">
        <div
          style={{ position: "relative", width: "100%", paddingBottom: "100%" }}
          data-radix-aspect-ratio-wrapper=""
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <div className="relative flex  size-full pointer-events-none -z-0 max-h-[350px] md:pointer-events-auto md:z-40 ">
              {/* Video element */}
              <video
                src="https://main-website-310.s3.us-west-2.amazonaws.com/assets/landing/P6.mp4"
                autoPlay
                loop
                muted
                className="size-full mx-auto my-auto"
                style={{
                  maxHeight: "350px",
                  maxWidth: "350px",
                  objectFit: "cover",
                }}
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
