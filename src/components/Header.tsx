import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Produits", href: "/products" },
    { name: "Catégories", href: "/categories" },
    { name: "Vendeurs", href: "/vendors" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glassmorphism border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/2a47f1f3-92e0-4f0d-82ef-380ab7465539.png" 
              alt="All in One Store Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold text-foreground">All in One Store</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center max-w-sm w-full mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Rechercher des produits..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-secondary/50 border border-white/10 rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative hover:bg-accent hover:text-accent-foreground"
              onClick={() => console.log("Wishlist clicked")}
              title="Liste de souhaits"
            >
              <Heart className="w-5 h-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative hover:bg-accent hover:text-accent-foreground"
              onClick={() => console.log("Cart clicked")}
              title="Panier"
            >
              <ShoppingCart className="w-5 h-5" />
              <Badge className="absolute -top-2 -right-2 w-5 h-5 text-xs flex items-center justify-center premium-gradient border-0">
                3
              </Badge>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-accent hover:text-accent-foreground"
              onClick={() => console.log("Profile clicked")}
              title="Profil utilisateur"
            >
              <User className="w-5 h-5" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full pl-10 pr-4 py-2 bg-secondary/50 border border-white/10 rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;