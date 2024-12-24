import React from "react";

const VideoGallery: React.FC = () => {
  const videoSources = [
    "https://main-website-310.s3.us-west-2.amazonaws.com/assets/landing/P1.mp4",
    "https://main-website-310.s3.us-west-2.amazonaws.com/assets/landing/P2.mp4",
    "https://main-website-310.s3.us-west-2.amazonaws.com/assets/landing/P3.mp4",
    "https://main-website-310.s3.us-west-2.amazonaws.com/assets/landing/P4.mp4",
    "https://main-website-310.s3.us-west-2.amazonaws.com/assets/landing/P5.mp4",
    "https://main-website-310.s3.us-west-2.amazonaws.com/assets/landing/P6.mp4",
  ];

  return (
    <div className="hidden items-center justify-between gap-x-8 md:flex lg:gap-x-12 ">
      {videoSources.map((src, index) => (
        <button
          key={index}
          className="size-full rounded-md border p-2 border-muted-foreground/30 transition-all duration-500 hover:border-muted-foreground/20"
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "100%",
            }}
            data-radix-aspect-ratio-wrapper=""
          >
            <video
              src={src}
              playsInline
              autoPlay
              loop
              muted
              width={400}
              height={400}
              className="size-full"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              }}
            />
          </div>
        </button>
      ))}
    </div>
  );
};

export default VideoGallery;
