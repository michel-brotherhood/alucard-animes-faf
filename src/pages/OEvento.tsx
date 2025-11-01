import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, MapPin, Star } from "lucide-react";

const stats = [
  { icon: Users, value: "50.000+", label: "Visitantes esperados" },
  { icon: Calendar, value: "2 Dias", label: "De pura diversão" },
  { icon: MapPin, value: "10.000m²", label: "De área de evento" },
  { icon: Star, value: "100+", label: "Atrações e atividades" },
];

const OEvento = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-b from-secondary to-primary py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-accent text-center mb-6">
            O EVENTO
          </h1>
          <p className="text-xl text-white/90 text-center mb-12">
            A maior celebração da cultura pop japonesa do Brasil
          </p>

          {/* Hero Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12 border-2 border-accent">
            <h2 className="text-3xl md:text-4xl font-black text-accent mb-6">
              Bem-vindo ao Anime Nikity 2026! ✨
            </h2>
            <div className="space-y-4 text-white/90 text-lg">
              <p>
                O <strong className="text-accent">Anime Nikity</strong> é o maior evento de cultura pop 
                japonesa do Brasil, reunindo milhares de fãs em uma celebração épica de anime, 
                mangá, games e muito mais!
              </p>
              <p>
                Durante <strong className="text-accent">2 dias incríveis</strong>, você terá acesso a 
                shows espetaculares, competições de cosplay, meet & greets com dubladores famosos, 
                torneios de games, workshops exclusivos e centenas de expositores.
              </p>
              <p>
                Seja você um otaku de longa data ou alguém descobrindo esse universo incrível, 
                o Anime Nikity tem algo especial para você!
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat) => (
              <Card key={stat.label} className="bg-accent border-0 text-center">
                <CardContent className="p-6">
                  <stat.icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <div className="text-4xl font-black text-secondary mb-2">{stat.value}</div>
                  <div className="text-secondary/80 font-bold">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Destaques */}
          <div className="space-y-6">
            <Card className="bg-primary/50 backdrop-blur-sm border-2 border-accent/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-black text-accent mb-4">🎭 Para Todos os Gostos</h3>
                <p className="text-white/90">
                  Shounen, shoujo, seinen, josei - todos os gêneros representados! Desde os clássicos 
                  até os lançamentos mais recentes, celebramos toda a diversidade do universo anime.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary/50 backdrop-blur-sm border-2 border-accent/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-black text-accent mb-4">🎨 Arte & Criatividade</h3>
                <p className="text-white/90">
                  Conheça artistas incríveis na Artist Alley, participe de workshops de desenho e 
                  técnicas de cosplay, e se inspire com os trabalhos de profissionais da indústria.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/50 backdrop-blur-sm border-2 border-accent/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-black text-accent mb-4">🌟 Comunidade & Amizades</h3>
                <p className="text-white/90">
                  Faça parte de algo maior! Conecte-se com outros fãs, faça novas amizades e 
                  compartilhe sua paixão por anime em um ambiente acolhedor e divertido.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary/50 backdrop-blur-sm border-2 border-accent/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-black text-accent mb-4">🎮 Games & Competições</h3>
                <p className="text-white/90">
                  Participe de torneios emocionantes, teste suas habilidades no fliperama liberado, 
                  e descubra os lançamentos mais recentes da indústria de games japoneses.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center bg-accent/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-accent">
            <h3 className="text-3xl font-black text-accent mb-4">
              Pronto para a aventura? 🚀
            </h3>
            <p className="text-white/90 text-lg mb-6">
              Garanta seu ingresso agora e faça parte dessa experiência inesquecível!
            </p>
            <a 
              href="/#ingressos" 
              className="inline-block bg-primary hover:bg-primary/90 text-white font-black text-xl px-12 py-4 rounded-full shadow-lg transition-all hover:scale-105"
            >
              Comprar Ingressos
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default OEvento;
