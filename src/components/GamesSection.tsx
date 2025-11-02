import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2, Swords, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";

const GamesSection = () => {
  const games = [
    {
      title: "League of Legends",
      category: "MOBA",
      players: "5v5",
      prize: "R$ 1.000",
      icon: Swords,
      gradient: "from-blue-600 to-cyan-400",
    },
    {
      title: "Counter-Strike 2",
      category: "FPS",
      players: "5v5",
      prize: "R$ 1.500",
      icon: Gamepad2,
      gradient: "from-orange-600 to-red-500",
    },
    {
      title: "Valorant",
      category: "FPS Tático",
      players: "5v5",
      prize: "R$ 1.200",
      icon: Trophy,
      gradient: "from-red-600 to-pink-500",
    },
    {
      title: "Free Fire",
      category: "Battle Royale",
      players: "4v4",
      prize: "R$ 800",
      icon: Users,
      gradient: "from-purple-600 to-indigo-500",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-muted to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            CAMPEONATO DE GAMES
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Participe dos torneios dos jogos mais populares e concorra a prêmios incríveis!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                  <p className="text-muted-foreground text-center mb-4">{game.category}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Jogadores:</span>
                      <span className="font-semibold">{game.players}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Premiação:</span>
                      <span className="font-bold text-primary">{game.prize}</span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/concursos/videogames">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Gamepad2 className="mr-2 h-5 w-5" />
              VER REGULAMENTO COMPLETO
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
