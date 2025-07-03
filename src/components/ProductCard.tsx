import { useState } from "react";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  featured?: boolean;
  discount?: number;
  vendor: {
    name: string;
    verified: boolean;
  };
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onToggleWishlist?: (product: Product) => void;
  onViewProduct?: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart, onToggleWishlist, onViewProduct }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
    onToggleWishlist?.(product);
  };

  const handleAddToCart = () => {
    onAddToCart?.(product);
  };

  const handleViewProduct = () => {
    onViewProduct?.(product);
  };

  return (
    <Card 
      className="card-gradient border-white/10 hover-lift hover-glow group cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.featured && (
              <Badge className="premium-gradient text-white border-0">
                Premium
              </Badge>
            )}
            {product.discount && (
              <Badge className="bg-red-500 text-white border-0">
                -{product.discount}%
              </Badge>
            )}
          </div>

          {/* Quick Actions */}
          <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <Button
              size="icon"
              variant="glassmorphism"
              className="w-8 h-8"
              onClick={(e) => {
                e.stopPropagation();
                handleWishlistToggle();
              }}
            >
              <Heart
                className={`w-4 h-4 transition-colors ${isWishlisted ? 'text-red-500 fill-current' : 'text-white'}`}
              />
            </Button>
            <Button
              size="icon"
              variant="glassmorphism"
              className="w-8 h-8"
              onClick={(e) => {
                e.stopPropagation();
                handleViewProduct();
              }}
            >
              <Eye className="w-4 h-4 text-white" />
            </Button>
          </div>

          {/* Hover Overlay */}
          <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Vendor */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">{product.vendor.name}</span>
            {product.vendor.verified && (
              <Badge variant="outline" className="text-xs px-1 py-0 h-4">
                ✓
              </Badge>
            )}
          </div>

          {/* Product Name */}
          <h3 className="font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-foreground">
                  {product.price.toLocaleString()} MGA
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    {product.originalPrice.toLocaleString()} MGA
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button
            variant={isHovered ? "premium" : "secondary"}
            size="sm"
            className="w-full transition-all"
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart();
            }}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Ajouter au panier
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;