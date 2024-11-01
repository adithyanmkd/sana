import Banner from "../molecules/Banner";
import OrderInfo from "../molecules/OrderInfo";
import AboutSection from "../organisms/AboutSection";
import DownloadAppSection from "../organisms/DownloadAppSection";
import Footer from "../organisms/Footer";
import ProductSection from "../organisms/ProductSection";
import ReviewSection from "../organisms/ReviewSection";
import TrustSection from "../organisms/TrustSection";

const Home = () => {
  return (
    <div>
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
