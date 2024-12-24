import Header from "./Header/Header";
import VideoGallery from "./Title/VideoGallery";
import HeroSection from "./Title/HeroSection";

const TopSection = () => {
  return (
    <div className="bg-black h-screen gap-2 pt-2 pr-36 pl-36">
      <Header />
      <HeroSection />
      <VideoGallery />
    </div>
  );
};

export default TopSection;
