import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Facebook, MessageCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "allinonestoretana101@gmail.com",
      action: () => window.open("mailto:allinonestoretana101@gmail.com")
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      value: "+261 38 51 117 60",
      action: () => window.open("tel:+261385111760")
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+261 32 64 352 32",
      action: () => window.open("https://wa.me/261326435232")
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      title: "Facebook",
      value: "Notre page Facebook",
      action: () => window.open("https://www.facebook.com/profile.php?id=61577882525407&mibextid=wwXIfr&mibextid=wwXIfr")
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localisation",
      value: "Madagascar",
      action: null
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-muted-foreground text-lg">
            Nous sommes là pour vous aider
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <div className="card-gradient rounded-2xl p-8 shadow-card">
            <h2 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="votre@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Sujet
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-white/10 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                >
                  <option value="">Sélectionner un sujet</option>
                  <option value="support">Support technique</option>
                  <option value="commande">Question sur une commande</option>
                  <option value="partenariat">Partenariat</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Votre message..."
                  required
                />
              </div>

              <Button type="submit" variant="premium" size="lg" className="w-full">
                <Mail className="w-5 h-5 mr-2" />
                Envoyer le message
              </Button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-6">
            <div className="card-gradient rounded-2xl p-8 shadow-card">
              <h2 className="text-2xl font-semibold mb-6">Nos coordonnées</h2>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all ${contact.action ? 'cursor-pointer hover:scale-105' : ''}`}
                    onClick={contact.action || undefined}
                  >
                    <div className="w-12 h-12 premium-gradient rounded-full flex items-center justify-center text-white flex-shrink-0">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{contact.title}</div>
                      <div className="text-muted-foreground">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Heures d'ouverture */}
            <div className="card-gradient rounded-2xl p-8 shadow-card">
              <h3 className="text-xl font-semibold mb-4">Heures de service</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lundi - Vendredi</span>
                  <span className="font-medium">8h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Samedi</span>
                  <span className="font-medium">9h00 - 16h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dimanche</span>
                  <span className="font-medium">Fermé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;