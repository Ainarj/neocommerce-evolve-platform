import { useState, useRef, useEffect } from "react";
import { Send, X, MessageCircle, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot" | "vendor";
  timestamp: Date;
  senderName?: string;
  avatar?: string;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Bonjour ! Je suis votre assistant virtuel. Comment puis-je vous aider aujourd'hui ?",
      sender: "bot",
      timestamp: new Date(),
      senderName: "Assistant IA"
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: message,
      sender: "user",
      timestamp: new Date(),
      senderName: "Vous"
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(message),
        sender: "bot",
        timestamp: new Date(),
        senderName: "Assistant IA"
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userMessage: string): string => {
    const responses = [
      "Je vous aide tout de suite ! Pouvez-vous me donner plus de détails sur votre demande ?",
      "C'est une excellente question ! Laissez-moi vous connecter avec l'un de nos spécialistes.",
      "Je peux vous aider avec ça. Voulez-vous que je vous montre nos produits recommandés ?",
      "Parfait ! Je vais transférer votre demande à notre équipe de support.",
      "Merci pour votre message ! Voici quelques options qui pourraient vous intéresser..."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('fr-FR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          variant="premium"
          className="rounded-full w-16 h-16 shadow-glow relative animate-glow"
        >
          <MessageCircle className="w-6 h-6" />
          <Badge className="absolute -top-2 -right-2 w-6 h-6 text-xs flex items-center justify-center bg-red-500 border-0 animate-pulse">
            3
          </Badge>
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]">
      <Card className="card-gradient border-white/20 shadow-elegant overflow-hidden">
        {/* Header */}
        <CardHeader className="p-4 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 premium-gradient rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Support NeoCommerce</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-muted-foreground">En ligne</span>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>

        {/* Messages */}
        <CardContent className="p-0">
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.sender === "user" 
                    ? "bg-primary" 
                    : msg.sender === "bot"
                    ? "premium-gradient"
                    : "success-gradient"
                }`}>
                  {msg.sender === "user" ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                
                <div className={`max-w-[80%] ${msg.sender === "user" ? "text-right" : ""}`}>
                  <div className={`rounded-lg px-3 py-2 ${
                    msg.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}>
                    <p className="text-sm">{msg.content}</p>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {msg.senderName} • {formatTime(msg.timestamp)}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Tapez votre message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 bg-secondary/50 border border-white/10 rounded-lg px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button
                size="icon"
                variant="premium"
                onClick={sendMessage}
                disabled={!message.trim()}
                className="flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 mt-3">
              <Button
                variant="outline"
                size="sm"
                className="text-xs"
                onClick={() => setMessage("J'ai besoin d'aide avec une commande")}
              >
                Aide commande
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-xs"
                onClick={() => setMessage("Informations sur la livraison")}
              >
                Livraison
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-xs"
                onClick={() => setMessage("Contacter un vendeur")}
              >
                Vendeur
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatWidget;