import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, Mic } from "lucide-react";

const guests = [
  {
    category: "Dubladores",
    icon: Mic,
    items: [
      { name: "Wendel Bezerra", role: "Naruto, Natsu, Izuku Midoriya" },
      { name: "Priscila Concepción", role: "Sailor Moon, Sakura, Asuna" },
      { name: "Fábio Lucindo", role: "Eren, Goku, Luffy" },
      { name: "Fernanda Bullara", role: "Hinata, Mikasa, Nezuko" },
    ],
  },
  {
    category: "Artistas",
    icon: Star,
    items: [
      { name: "Akira Sensei", role: "Ilustrador profissional" },
      { name: "Manga Ken", role: "Mangaká brasileiro" },
      { name: "Yuki Art", role: "Character designer" },
      { name: "Cosplay Queen", role: "Cosmaker profissional" },
    ],
  },
  {
    category: "Influencers",
    icon: Users,
    items: [
      { name: "OtakuBR", role: "1M+ seguidores" },
      { name: "AnimeReview", role: "Reviews e análises" },
      { name: "CosplayWorld", role: "Tutoriais de cosplay" },
      { name: "GameMaster", role: "Gaming e animes" },
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
            LINE-UP 2026
          </h1>
          <p className="text-xl text-white/90 text-center mb-12">
            Conheça os incríveis artistas, dubladores e influencers confirmados!
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
                  {category.items.map((item) => (
                    <Card key={item.name} className="bg-white/10 backdrop-blur-sm border-accent/30 hover:border-accent transition-all">
                      <CardContent className="p-6 text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4"></div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                        <p className="text-white/70 text-sm">{item.role}</p>
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
