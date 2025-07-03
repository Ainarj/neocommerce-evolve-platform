import { useState, useMemo } from "react";
import { Search, Filter, Grid, List } from "lucide-react";
import ProductCard, { Product } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Products = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 8000000]);
  const [sortBy, setSortBy] = useState("name");
  const [showFilters, setShowFilters] = useState(false);

  const [products] = useState<Product[]>([
    {
      id: "1",
      name: "iPhone 15 Pro Max - 256GB Titanium",
      price: 5200000,
      originalPrice: 5600000,
      rating: 4.8,
      reviewCount: 2847,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
      category: "electronics",
      featured: true,
      discount: 7,
      vendor: { name: "TechStore Pro", verified: true }
    },
    {
      id: "2",
      name: "MacBook Pro 16\" M3 Max",
      price: 11600000,
      originalPrice: 12800000,
      rating: 4.7,
      reviewCount: 856,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
      category: "electronics",
      featured: true,
      discount: 9,
      vendor: { name: "Apple Premium", verified: true }
    },
    {
      id: "3",
      name: "Nike Air Jordan 1 Retro High OG",
      price: 760000,
      rating: 4.9,
      reviewCount: 1923,
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500",
      category: "fashion",
      featured: true,
      vendor: { name: "Sneaker Vault", verified: true }
    },
    {
      id: "4",
      name: "Sony WH-1000XM5 Casque Sans Fil",
      price: 1400000,
      originalPrice: 1600000,
      rating: 4.6,
      reviewCount: 1245,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      category: "electronics",
      discount: 12,
      vendor: { name: "Audio Expert", verified: true }
    },
    {
      id: "5",
      name: "Chanel N°5 Eau de Parfum 100ml",
      price: 640000,
      rating: 4.6,
      reviewCount: 634,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500",
      category: "beauty",
      featured: true,
      vendor: { name: "Luxury Beauty", verified: true }
    },
    {
      id: "6",
      name: "Canapé Scandinave 3 Places",
      price: 3600000,
      originalPrice: 4800000,
      rating: 4.4,
      reviewCount: 423,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500",
      category: "home",
      discount: 25,
      vendor: { name: "Home Design", verified: false }
    }
  ]);

  const categories = [
    { id: "", name: "Toutes les catégories" },
    { id: "electronics", name: "Électronique" },
    { id: "fashion", name: "Mode" },
    { id: "home", name: "Maison" },
    { id: "beauty", name: "Beauté" },
    { id: "sports", name: "Sport" },
    { id: "books", name: "Livres" }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return filtered;
  }, [products, searchQuery, selectedCategory, priceRange, sortBy]);

  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Catalogue{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Produits
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Découvrez notre gamme complète de {products.length} produits
          </p>
        </div>

        <Card className="card-gradient border-white/10 mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              <div className="lg:col-span-4 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  placeholder="Rechercher des produits..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-secondary/50 border border-white/10 rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="lg:col-span-3">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-secondary/50 border border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div className="lg:col-span-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-secondary/50 border border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="name">Nom</option>
                  <option value="price-asc">Prix croissant</option>
                  <option value="price-desc">Prix décroissant</option>
                  <option value="rating">Note</option>
                </select>
              </div>

              <div className="lg:col-span-3 flex items-center gap-2">
                <div className="flex rounded-lg overflow-hidden border border-white/10">
                  <Button
                    variant={viewMode === "grid" ? "premium" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-none"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "premium" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
                
                <Button
                  variant={showFilters ? "premium" : "outline"}
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filtres
                </Button>
              </div>
            </div>

            {showFilters && (
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Prix (MGA)
                    </label>
                    <div className="space-y-2">
                      <input
                        type="range"
                min="0"
                max="15000000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>0 MGA</span>
                        <span>{priceRange[1].toLocaleString()} MGA</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Vendeur vérifié
                    </label>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="verified" className="rounded border-white/20" />
                      <label htmlFor="verified" className="text-sm text-muted-foreground">
                        Vendeurs certifiés uniquement
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Promotions
                    </label>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="discount" className="rounded border-white/20" />
                      <label htmlFor="discount" className="text-sm text-muted-foreground">
                        Produits en promotion
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">
              {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
            </span>
            {selectedCategory && (
              <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30">
                {categories.find(cat => cat.id === selectedCategory)?.name}
              </Badge>
            )}
          </div>
        </div>

        <div className={`grid gap-6 ${
          viewMode === "grid" 
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
            : "grid-cols-1"
        }`}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={(product) => console.log("Add to cart:", product)}
              onToggleWishlist={(product) => console.log("Toggle wishlist:", product)}
              onViewProduct={(product) => console.log("View product:", product)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <Card className="card-gradient border-white/10 text-center py-16">
            <CardContent>
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Aucun produit trouvé
              </h3>
              <p className="text-muted-foreground mb-6">
                Essayez de modifier vos critères de recherche ou parcourez nos catégories
              </p>
              <Button variant="premium" onClick={() => {
                setSearchQuery("");
                setSelectedCategory("");
                setPriceRange([0, 8000000]);
              }}>
                Réinitialiser les filtres
              </Button>
            </CardContent>
          </Card>
        )}

        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => console.log("Charger plus de produits")}
            >
              Charger plus de produits
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;