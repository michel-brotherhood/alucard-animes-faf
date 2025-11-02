import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Instagram } from "lucide-react";
import raphaelImage from "@/assets/raphael-freitas.webp";
import eventLogo from "@/assets/friburgo-geek-icon.png";

const guests = [
  {
    category: "Artistas",
    icon: Star,
    items: [
      { 
        name: "Raphael Freitas", 
        role: "Me and the Machine - Show épico com músicas de games retrô ao som de uma guitarra eletrizante!",
        image: raphaelImage,
        instagram: "https://www.instagram.com/meand_themachine/"
      },
      { name: "", role: "Em breve...", logo: true },
      { name: "", role: "Em breve...", logo: true },
      { name: "", role: "Em breve...", logo: true },
    ],
  },
];

const LineUp = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-secondary py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-accent text-center mb-6">
            LINE-UP
          </h1>
          <p className="text-xl text-white/90 text-center mb-12">
            Conheça os incríveis artistas confirmados para o Friburgo Geek Natal!
          </p>

          <div className="space-y-12">
            {guests.map((category) => (
              <div key={category.category}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-accent p-3 rounded-full">
                    <category.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-black text-accent">{category.category}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((item, index) => (
                    <Card key={index} className="bg-white/10 backdrop-blur-sm border-accent/30 hover:border-accent transition-all">
                      <CardContent className="p-6 text-center">
                        {item.image ? (
                          <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-primary shadow-lg shadow-primary/50">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : item.logo ? (
                          <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                            <img 
                              src={eventLogo} 
                              alt="Friburgo Geek"
                              className="w-full h-full object-contain opacity-50"
                            />
                          </div>
                        ) : null}
                        {item.name && <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>}
                        <p className="text-white/70 text-sm mb-3">{item.role}</p>
                        {item.instagram && (
                          <Button
                            asChild
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg shadow-primary/30"
                          >
                            <a 
                              href={item.instagram} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <Instagram className="w-4 h-4" />
                              Conhecer mais
                            </a>
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-accent text-lg font-bold">
              🌟 Mais convidados serão anunciados em breve! 🌟
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default LineUp;
