import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import CategoryGrid from "@/components/CategoryGrid";
import RecommendedProducts from "@/components/RecommendedProducts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroBanner />
        <CategoryGrid />
        <RecommendedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
