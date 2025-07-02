import { ArrowRight, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-sm font-medium text-white/90 border border-white/20">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                Plateforme #1 en France
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                L'avenir du{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  E-commerce
                </span>{" "}
                commence ici
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                Découvrez une expérience d'achat révolutionnaire avec notre plateforme premium. 
                Des produits exceptionnels, une technologie de pointe et une communauté dynamique.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" variant="glassmorphism" className="group">
                <span>Explorer les produits</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Play className="w-5 h-5 mr-2" />
                Voir la démo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-sm text-white/70">Produits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-sm text-white/70">Vendeurs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100K+</div>
                <div className="text-sm text-white/70">Clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Cards */}
          <div className="relative lg:block hidden">
            <div className="space-y-6 animate-slide-up">
              {/* Featured Product Card */}
              <Card className="glassmorphism border-white/20 overflow-hidden hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 premium-gradient rounded-lg flex items-center justify-center">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Produit Premium</h3>
                        <p className="text-sm text-white/70">Excellence garantie</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">299€</div>
                      <div className="text-sm text-green-400">En stock</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-sm text-white/70 ml-2">(4.8)</span>
                    </div>
                    <Button size="sm" variant="premium">
                      Ajouter
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Mini Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="glassmorphism border-white/20 hover-lift">
                  <CardContent className="p-4 text-center">
                    <div className="w-8 h-8 success-gradient rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white text-sm">📦</span>
                    </div>
                    <div className="text-sm font-medium text-white">Livraison Rapide</div>
                    <div className="text-xs text-white/70">24-48h</div>
                  </CardContent>
                </Card>
                
                <Card className="glassmorphism border-white/20 hover-lift">
                  <CardContent className="p-4 text-center">
                    <div className="w-8 h-8 warning-gradient rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white text-sm">🛡️</span>
                    </div>
                    <div className="text-sm font-medium text-white">Garantie</div>
                    <div className="text-xs text-white/70">2 ans</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;