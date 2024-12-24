import React from "react";

const MainContent: React.FC = () => {
  return (
    <section className="container grid grid-cols-1 items-center gap-10  md:grid-cols-2 md:gap-y-20 h-screen w-[100vw] mt-10 pt-2 pr-36 pl-36 text-white ">
      {/* Left Column */}
      <div className="flex flex-col items-start">
        <h2 className="max-w-md font-secondary text-2xl font-medium md:text-4xl">
          Molecule Programming Foundational AI Model
        </h2>
        <p className="my-2.5 text-muted-foreground">
          The most important task AI can solve in biology today is to take a
          description of a protein function and turn it into a sequence. The 310
          AI molecular programming model (MP) supports pioneering
          text-to-protein generation. Compressing 4B years of nature to create a
          new reality.
        </p>
        <a
          className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#303635] text-white shadow hover:bg-opacity-80 h-9 px-4 py-2"
          href="/ai"
        >
          AI
        </a>
      </div>

      {/* Right Column with Video */}
      <div>
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "56.25%",
          }}
          data-radix-aspect-ratio-wrapper=""
        >
          <video
            style={{
              position: "absolute",
              inset: "0px",
              opacity: 1,
              transform: "translateY(-2.41731px)",
            }}
            playsInline
            autoPlay
            loop
            muted
            className="rounded-lg"
            width="1280"
            height="720"
          >
            <source
              src="https://main-website-310.s3.us-west-2.amazonaws.com/assets/310-MP-Animation-480.mp4"
              type="video/mp4"
              media="(max-width: 640px)"
            />
            <source
              src="https://main-website-310.s3.us-west-2.amazonaws.com/assets/310-MP-Animation-720.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      {/* Third Column (Image) */}
      <div className="order-2 md:order-none">
        <img
          alt="Copilot: AI Chat for Designer Bio"
          loading="lazy"
          width="522.5"
          height="281.66"
          decoding="async"
          data-nimg="1"
          className="w-full"
          style={{ color: "transparent" }}
          src="src/assets/Copilot-Cover.png"
        />
      </div>

      {/* Left Column (Copilot Section) */}
      <div className="flex min-h-[80%] flex-col items-start">
        <h2 className="font-secondary text-2xl font-medium md:max-w-full md:text-4xl">
          Copilot: AI Chat for Designer Bio
        </h2>
        <p className="my-2.5 text-muted-foreground">
          Design biomolecules seamlessly in a web-based chat platform. Access
          state-of-the-art open-source models as well as proprietary MP. Search
          databases, visualize, and orchestrate pipelines all in one place.
        </p>
        <a
          className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#303635] text-white shadow hover:bg-opacity-80 h-9 px-4 py-2 mt-auto"
          href="/copilot-services"
        >
          Copilot
        </a>
      </div>
    </section>
  );
};

export default MainContent;
