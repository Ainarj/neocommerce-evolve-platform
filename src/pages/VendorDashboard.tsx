import { useState } from "react";
import { Plus, TrendingUp, DollarSign, Package, Star, Eye, Edit, Trash2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const VendorDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showAddProduct, setShowAddProduct] = useState(false);

  const stats = [
    {
      title: "Ventes totales",
      value: "1,247",
      change: "+12% ce mois",
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: "success-gradient"
    },
    {
      title: "Revenus",
      value: "€24,680",
      change: "+8% ce mois",
      icon: <DollarSign className="w-6 h-6" />,
      gradient: "premium-gradient"
    },
    {
      title: "Produits actifs",
      value: "156",
      change: "Stable",
      icon: <Package className="w-6 h-6" />,
      gradient: "warning-gradient"
    },
    {
      title: "Note moyenne",
      value: "4.8",
      change: "+0.2 ce mois",
      icon: <Star className="w-6 h-6" />,
      gradient: "hero-gradient"
    }
  ];

  const recentOrders = [
    { id: "ORD-001", customer: "Marie Dubois", product: "iPhone 15 Pro", amount: "1299€", status: "Expédié" },
    { id: "ORD-002", customer: "Jean Martin", product: "MacBook Pro", amount: "2899€", status: "En cours" },
    { id: "ORD-003", customer: "Sophie Laurent", product: "AirPods Pro", amount: "249€", status: "Livré" },
    { id: "ORD-004", customer: "Pierre Moreau", product: "iPad Air", amount: "699€", status: "Confirmé" }
  ];

  const myProducts = [
    {
      id: "1",
      name: "iPhone 15 Pro Max",
      price: "1299€",
      stock: 15,
      views: 2847,
      sales: 156,
      rating: 4.8,
      status: "active"
    },
    {
      id: "2", 
      name: "MacBook Pro M3",
      price: "2899€",
      stock: 8,
      views: 1423,
      sales: 89,
      rating: 4.7,
      status: "active"
    },
    {
      id: "3",
      name: "AirPods Pro 2",
      price: "249€",
      stock: 0,
      views: 892,
      sales: 234,
      rating: 4.6,
      status: "out_of_stock"
    }
  ];

  const messages = [
    {
      id: "1",
      customer: "Marie Dubois",
      subject: "Question sur la garantie",
      preview: "Bonjour, j'aimerais savoir si le produit est bien couvert par...",
      timestamp: "Il y a 2h",
      unread: true
    },
    {
      id: "2",
      customer: "Jean Martin", 
      subject: "Problème de livraison",
      preview: "Ma commande n'est toujours pas arrivée, pouvez-vous me...",
      timestamp: "Il y a 5h",
      unread: true
    },
    {
      id: "3",
      customer: "Sophie Laurent",
      subject: "Très satisfaite !",
      preview: "Je voulais vous remercier pour la qualité exceptionnelle...",
      timestamp: "Hier",
      unread: false
    }
  ];

  const tabs = [
    { id: "overview", name: "Vue d'ensemble", icon: <TrendingUp className="w-4 h-4" /> },
    { id: "products", name: "Mes Produits", icon: <Package className="w-4 h-4" /> },
    { id: "orders", name: "Commandes", icon: <DollarSign className="w-4 h-4" /> },
    { id: "messages", name: "Messages", icon: <MessageCircle className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Dashboard{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Vendeur
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Gérez votre boutique et suivez vos performances
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "premium" : "ghost"}
              onClick={() => setActiveTab(tab.id)}
              className="flex items-center gap-2"
            >
              {tab.icon}
              {tab.name}
            </Button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="card-gradient border-white/10 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 ${stat.gradient} rounded-xl flex items-center justify-center text-white shadow-card`}>
                        {stat.icon}
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`${stat.change.includes('+') ? 'text-green-400 border-green-400/30' : 'text-muted-foreground'}`}
                      >
                        {stat.change}
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.title}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="card-gradient border-white/10">
              <CardHeader>
                <CardTitle className="text-foreground">Actions Rapides</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button 
                    variant="premium" 
                    className="h-20 flex flex-col gap-2"
                    onClick={() => setShowAddProduct(true)}
                  >
                    <Plus className="w-6 h-6" />
                    Ajouter un produit
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <Eye className="w-6 h-6" />
                    Voir ma boutique
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <MessageCircle className="w-6 h-6" />
                    Messages clients
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Orders */}
            <Card className="card-gradient border-white/10">
              <CardHeader>
                <CardTitle className="text-foreground">Commandes Récentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg">
                      <div className="space-y-1">
                        <div className="font-medium text-foreground">{order.customer}</div>
                        <div className="text-sm text-muted-foreground">{order.product}</div>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="font-medium text-foreground">{order.amount}</div>
                        <Badge 
                          variant="outline"
                          className={`${
                            order.status === 'Livré' ? 'text-green-400 border-green-400/30' :
                            order.status === 'Expédié' ? 'text-blue-400 border-blue-400/30' :
                            'text-yellow-400 border-yellow-400/30'
                          }`}
                        >
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === "products" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-foreground">Mes Produits</h2>
              <Button variant="premium" onClick={() => setShowAddProduct(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Ajouter un produit
              </Button>
            </div>

            <div className="grid gap-6">
              {myProducts.map((product) => (
                <Card key={product.id} className="card-gradient border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
                          <Badge 
                            variant="outline"
                            className={`${
                              product.status === 'active' ? 'text-green-400 border-green-400/30' :
                              'text-red-400 border-red-400/30'
                            }`}
                          >
                            {product.status === 'active' ? 'Actif' : 'Rupture de stock'}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Prix:</span>
                            <div className="font-medium text-foreground">{product.price}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Stock:</span>
                            <div className="font-medium text-foreground">{product.stock}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Vues:</span>
                            <div className="font-medium text-foreground">{product.views}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Ventes:</span>
                            <div className="font-medium text-foreground">{product.sales}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Note:</span>
                            <div className="font-medium text-foreground">{product.rating} ⭐</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Messages Tab */}
        {activeTab === "messages" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Messages Clients</h2>
            
            <div className="space-y-4">
              {messages.map((message) => (
                <Card key={message.id} className="card-gradient border-white/10 hover-lift cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-foreground">{message.customer}</h3>
                          {message.unread && (
                            <Badge className="premium-gradient text-white border-0">
                              Nouveau
                            </Badge>
                          )}
                        </div>
                        <h4 className="font-medium text-foreground mb-2">{message.subject}</h4>
                        <p className="text-muted-foreground text-sm">{message.preview}</p>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {message.timestamp}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Add Product Modal */}
        {showAddProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <Card className="card-gradient border-white/20 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center justify-between">
                  Ajouter un nouveau produit
                  <Button variant="ghost" size="sm" onClick={() => setShowAddProduct(false)}>
                    ✕
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nom du produit
                    </label>
                    <Input placeholder="Nom du produit" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Prix (€)
                    </label>
                    <Input type="number" placeholder="0.00" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Catégorie
                  </label>
                  <select className="w-full px-3 py-2 bg-secondary/50 border border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Sélectionner une catégorie</option>
                    <option value="electronics">Électronique</option>
                    <option value="fashion">Mode</option>
                    <option value="home">Maison</option>
                    <option value="beauty">Beauté</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Description
                  </label>
                  <Textarea placeholder="Description détaillée du produit" className="min-h-[120px]" />
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    variant="premium" 
                    className="flex-1"
                    onClick={() => setShowAddProduct(false)}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Ajouter le produit
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowAddProduct(false)}
                  >
                    Annuler
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default VendorDashboard;