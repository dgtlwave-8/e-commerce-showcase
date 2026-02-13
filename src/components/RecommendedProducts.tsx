import ProductCard from "./ProductCard";

const products = [
  { name: "Cordless Drill 20V", price: 89.99, oldPrice: 129.99, rating: 5, image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=400&fit=crop" },
  { name: "Interior Wall Paint 10L", price: 34.50, rating: 4, image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=400&fit=crop" },
  { name: "LED Ceiling Light Panel", price: 45.00, oldPrice: 59.99, rating: 4, image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=400&fit=crop" },
  { name: "Garden Hose 30m Premium", price: 27.90, rating: 3, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop" },
  { name: "Adjustable Wrench Set", price: 19.95, rating: 5, image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=400&h=400&fit=crop" },
  { name: "Laminate Flooring Oak", price: 24.99, oldPrice: 32.00, rating: 4, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop" },
  { name: "Smart Thermostat WiFi", price: 119.00, rating: 5, image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=400&fit=crop" },
  { name: "Safety Work Gloves Pack", price: 12.50, rating: 4, image: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=400&h=400&fit=crop" },
];

const RecommendedProducts = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="font-display text-2xl font-bold mb-6">Recommended for You</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
};

export default RecommendedProducts;
