import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2, Mic2, Users, Trophy, Swords } from "lucide-react";
import { Link } from "react-router-dom";

const GamesSection = () => {
  const games = [
    {
      title: "Animekê",
      category: "Solo e Dupla",
      type: "Concurso Musical",
      icon: Mic2,
      gradient: "from-pink-600 to-purple-500",
    },
    {
      title: "Cosplay",
      category: "8 Categorias",
      type: "R$ 1.000 em brindes",
      icon: Users,
      gradient: "from-purple-600 to-indigo-500",
    },
    {
      title: "K-POP",
      category: "Generations",
      type: "Concurso de Dança",
      icon: Users,
      gradient: "from-blue-600 to-cyan-400",
    },
    {
      title: "FIFA 25",
      category: "Futebol",
      type: "Torneio de Games",
      icon: Trophy,
      gradient: "from-green-600 to-emerald-500",
    },
    {
      title: "Mortal Kombat 1",
      category: "Luta",
      type: "Torneio de Games",
      icon: Swords,
      gradient: "from-yellow-600 to-orange-500",
    },
    {
      title: "Street Fighter 6",
      category: "Luta",
      type: "Torneio de Games",
      icon: Gamepad2,
      gradient: "from-red-600 to-pink-500",
    },
    {
      title: "Tekken 8",
      category: "Luta",
      type: "Torneio de Games",
      icon: Swords,
      gradient: "from-orange-600 to-red-500",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-muted to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            CONCURSOS E CAMPEONATOS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Participe dos nossos concursos e torneios! Mostre seu talento e concorra a prêmios incríveis!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {games.map((game, index) => {
            const Icon = game.icon;
            return (
              <Card 
                key={index}
                className="relative overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${game.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
                
                <div className="relative p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${game.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-center mb-2">{game.title}</h3>
                  <p className="text-muted-foreground text-center mb-2">{game.category}</p>
                  <p className="text-sm text-center font-semibold text-primary">{game.type}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/concursos">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Trophy className="mr-2 h-5 w-5" />
              VER TODOS OS CONCURSOS
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
