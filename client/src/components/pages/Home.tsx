import Banner from "../molecules/Banner";
import CompanyGallery from "../molecules/CompanyGallery";
import OrderInfo from "../molecules/OrderInfo";
import AboutSection from "../organisms/AboutSection";
import CommitmentSection from "../organisms/CommitmentSection";
import DownloadAppSection from "../organisms/DownloadAppSection";
import Footer from "../organisms/Footer";
import ProductSection from "../organisms/ProductSection";
import ReviewSection from "../organisms/ReviewSection";
import TrustSection from "../organisms/TrustSection";

import { useEffect } from "react";
import WhyChoose from "../organisms/WhyChoose";

const Home = () => {
  useEffect(() => {
    document.title = "Sana Water";
  }, []);

  return (
    <div className="min-h-screen max-w-full overflow-x-hidden bg-[#F9FAFC]">
      <Banner />
      <OrderInfo />
      <ProductSection />
      <TrustSection />
      <AboutSection />
      <CommitmentSection />
      <WhyChoose />
      <CompanyGallery />
      <ReviewSection />
      <DownloadAppSection />
      <Footer />
    </div>
  );
};

export default Home;
