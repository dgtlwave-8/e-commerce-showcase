import { Star, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: string;
}

const ProductCard = ({ name, price, oldPrice, rating, image }: ProductCardProps) => {
  return (
    <div className="group rounded-lg bg-card border border-border overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="relative aspect-square bg-muted overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {oldPrice && (
          <span className="absolute top-2 left-2 rounded bg-badge-sale px-2 py-0.5 text-[11px] font-bold text-badge-sale-foreground">
            SALE
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-3.5">
        <h3 className="text-sm font-medium leading-snug line-clamp-2 mb-1.5">{name}</h3>

        {/* Stars */}
        <div className="flex gap-0.5 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3.5 w-3.5 ${i < rating ? "fill-star-filled text-star-filled" : "fill-star-empty text-star-empty"}`}
            />
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-primary">€{price.toFixed(2)}</span>
          {oldPrice && (
            <span className="text-xs text-muted-foreground line-through">€{oldPrice.toFixed(2)}</span>
          )}
        </div>

        <button className="flex w-full items-center justify-center gap-2 rounded-md bg-secondary py-2 text-xs font-semibold text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
          <ShoppingCart className="h-3.5 w-3.5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
