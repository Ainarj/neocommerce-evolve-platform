import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Category {
  id: string;
  name: string;
  icon: string;
  gradient: string;
  productCount: number;
  featured: boolean;
}

const Categories = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const categories: Category[] = [
    {
      id: "electronics",
      name: "Électronique",
      icon: "💻",
      gradient: "premium-gradient",
      productCount: 1240,
      featured: true,
    },
    {
      id: "fashion",
      name: "Mode",
      icon: "👗",
      gradient: "warning-gradient",
      productCount: 2840,
      featured: true,
    },
    {
      id: "home",
      name: "Maison & Jardin",
      icon: "🏠",
      gradient: "success-gradient",
      productCount: 890,
      featured: false,
    },
    {
      id: "beauty",
      name: "Beauté & Santé",
      icon: "💄",
      gradient: "hero-gradient",
      productCount: 560,
      featured: true,
    },
    {
      id: "sports",
      name: "Sports & Loisirs",
      icon: "⚽",
      gradient: "success-gradient",
      productCount: 720,
      featured: false,
    },
    {
      id: "books",
      name: "Livres & Média",
      icon: "📚",
      gradient: "warning-gradient",
      productCount: 1150,
      featured: false,
    },
    {
      id: "toys",
      name: "Jouets & Enfants",
      icon: "🧸",
      gradient: "premium-gradient",
      productCount: 430,
      featured: false,
    },
    {
      id: "automotive",
      name: "Auto & Moto",
      icon: "🚗",
      gradient: "hero-gradient",
      productCount: 280,
      featured: false,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explorez nos{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Catégories
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre sélection soigneusement organisée pour tous vos besoins
          </p>
        </div>

        {/* Featured Categories */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Catégories Populaires</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories
              .filter((cat) => cat.featured)
              .map((category) => (
                <Card
                  key={category.id}
                  className="card-gradient border-white/10 hover-lift hover-glow cursor-pointer group relative overflow-hidden"
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <CardContent className="p-6 text-center relative z-10">
                    <div className={`w-16 h-16 ${category.gradient} rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl shadow-card transition-transform group-hover:scale-110`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {category.productCount.toLocaleString()} produits
                    </p>
                    <Button
                      variant={hoveredCategory === category.id ? "premium" : "secondary"}
                      size="sm"
                      className="w-full transition-all"
                    >
                      Explorer
                    </Button>
                  </CardContent>
                  
                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
                    <div className={category.gradient}></div>
                  </div>
                </Card>
              ))}
          </div>
        </div>

        {/* All Categories Grid */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-6">Toutes les Catégories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="card-gradient border-white/10 hover-lift cursor-pointer group"
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <CardContent className="p-4 text-center">
                  <div className={`w-12 h-12 ${category.gradient} rounded-xl mx-auto mb-3 flex items-center justify-center text-lg shadow-card transition-transform group-hover:scale-110`}>
                    {category.icon}
                  </div>
                  <h4 className="text-sm font-medium text-foreground mb-1">
                    {category.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {category.productCount}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="glassmorphism border-white/20 inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Vous ne trouvez pas ce que vous cherchez ?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contactez-nous pour des catégories spécialisées ou des demandes particulières
              </p>
              <Button variant="premium" size="lg">
                Nous contacter
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Categories;