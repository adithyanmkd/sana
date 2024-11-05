import Banner from "../molecules/Banner";
import OrderInfo from "../molecules/OrderInfo";
import AboutSection from "../organisms/AboutSection";
import DownloadAppSection from "../organisms/DownloadAppSection";
import Footer from "../organisms/Footer";
import ProductSection from "../organisms/ProductSection";
import ReviewSection from "../organisms/ReviewSection";
import TrustSection from "../organisms/TrustSection";

import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Sana Water";
  }, []);

  return (
    <div className="min-h-screen max-w-full overflow-x-hidden">
      <Banner />
      <OrderInfo />
      <ProductSection />
      <TrustSection />
      <AboutSection />
      <ReviewSection />
      <DownloadAppSection />
      <Footer />
    </div>
  );
};

export default Home;
