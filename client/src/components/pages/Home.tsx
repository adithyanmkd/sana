import Banner from "../molecules/Banner";
import OrderInfo from "../molecules/OrderInfo";
import AboutSection from "../organisms/AboutSection";
import ProductSection from "../organisms/ProductSection";
import TrustSection from "../organisms/TrustSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <OrderInfo />
      <ProductSection />
      <TrustSection />
      <AboutSection />
    </div>
  );
};

export default Home;
