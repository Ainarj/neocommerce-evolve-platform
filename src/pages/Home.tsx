import { useState } from "react";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ProductCard, { Product } from "@/components/ProductCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Award, Shield, Truck } from "lucide-react";

const Home = () => {
  const [featuredProducts] = useState<Product[]>([
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
      vendor: {
        name: "TechStore Pro",
        verified: true
      }
    },
    {
      id: "2",
      name: "Nike Air Jordan 1 Retro High OG",
      price: 760000,
      rating: 4.9,
      reviewCount: 1923,
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500",
      category: "fashion",
      featured: true,
      vendor: {
        name: "Sneaker Vault",
        verified: true
      }
    },
    {
      id: "3",
      name: "MacBook Pro 16\" M3 Max",
      price: 11600000,
      originalPrice: 12800000,
      rating: 4.7,
      reviewCount: 856,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
      category: "electronics",
      featured: true,
      discount: 9,
      vendor: {
        name: "Apple Premium",
        verified: true
      }
    },
    {
      id: "4",
      name: "Chanel N°5 Eau de Parfum 100ml",
      price: 640000,
      rating: 4.6,
      reviewCount: 634,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500",
      category: "beauty",
      featured: true,
      vendor: {
        name: "Luxury Beauty",
        verified: true
      }
    }
  ]);

  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Livraison Express",
      description: "Livraison gratuite en 24-48h partout à Madagascar",
      gradient: "success-gradient"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Paiement Sécurisé",
      description: "Transactions 100% sécurisées avec cryptage SSL",
      gradient: "premium-gradient"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Garantie Premium",
      description: "Garantie de satisfaction ou remboursement intégral",
      gradient: "warning-gradient"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Prix Compétitifs",
      description: "Les meilleurs prix du marché garantis",
      gradient: "hero-gradient"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="card-gradient border-white/10 hover-lift text-center group"
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${feature.gradient} rounded-xl mx-auto mb-4 flex items-center justify-center text-white shadow-card transition-transform group-hover:scale-110`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <Categories />

      {/* Featured Products Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Produits en{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Vedette
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre sélection premium des produits les plus populaires
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={(product) => console.log("Add to cart:", product)}
                onToggleWishlist={(product) => console.log("Toggle wishlist:", product)}
                onViewProduct={(product) => console.log("View product:", product)}
              />
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="premium" 
              size="lg" 
              className="group"
              onClick={() => window.location.href = '/products'}
            >
              Voir tous les produits
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="glassmorphism border-white/20 max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-12 text-center">
              <div className="hero-gradient w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Restez informé des dernières tendances
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Recevez en exclusivité nos offres spéciales, nouveaux produits et conseils personnalisés
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email..."
                  className="flex-1 bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button 
                  variant="premium" 
                  size="lg"
                  onClick={() => console.log("Newsletter subscription")}
                >
                  S'abonner
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                En vous abonnant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;