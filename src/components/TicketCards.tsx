import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

const tickets = [
  {
    name: "BASIC",
    price: "39,55",
    badge: "último lote",
    badgeColor: "bg-accent text-primary",
    features: [
      "Acesso a um dos dias incríveis no Anime Nikity",
      "Pulseira Colecionável",
      "Grátis para crianças menores de 6 anos",
    ],
    note: "¹ Valor referente à meia-entrada",
  },
  {
    name: "combo 2 DIAS",
    price: "71,19",
    badge: "último lote",
    badgeColor: "bg-accent text-primary",
    features: [
      "Acesso aos 2 dias incríveis no Anime Nikity",
      "Pulseira Colecionável",
      "Grátis para crianças menores de 6 anos",
    ],
    note: "¹ Valor referente à meia-entrada",
  },
  {
    name: "Cosplayer",
    price: "39,55",
    badge: "último lote",
    badgeColor: "bg-accent text-primary",
    features: [
      "Camarim exclusivo",
      "Pulseira Colecionável",
      "Área de fotos exclusiva",
      "Fila preferencial",
    ],
    note: "Meia-entrada garantida!",
  },
  {
    name: "VIP FULL",
    price: "245",
    badge: "último lote",
    badgeColor: "bg-destructive text-white",
    features: [
      "Todos os benefícios dos outros ingressos",
      "Acesso VIP exclusivo",
      "Meet & Greet com convidados",
      "Brindes exclusivos",
    ],
    note: "Experiência completa!",
  },
];

const TicketCards = () => {
  return (
    <section id="ingressos" className="py-16 px-6 bg-gradient-to-b from-white to-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-secondary mb-4">
            COMO VAI SER A SUA AVENTURA?
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Compare os ingressos e encontre a opção perfeita para a saga que você quer viver no{" "}
            <span className="font-bold text-primary">Anime Nikity 25</span>.
          </p>
          <p className="text-sm text-foreground/60 mt-2">
            Todos os ingressos possuem disponibilidade limitada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tickets.map((ticket) => (
            <Card 
              key={ticket.name} 
              className="relative overflow-hidden border-2 hover:border-primary transition-all hover:shadow-2xl"
            >
              <CardHeader className="text-center pb-4">
                <h3 className="text-2xl font-black text-secondary mb-2">{ticket.name}</h3>
                <p className="text-sm text-foreground/60 mb-4">A partir de</p>
                <div className="text-5xl font-black text-primary mb-2">
                  {ticket.price}
                </div>
                <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold ${ticket.badgeColor}`}>
                  {ticket.badge}
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                {ticket.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter className="flex flex-col gap-3">
                <Button variant="skewed" className="w-full text-lg py-6 rounded-2xl">
                  QUERO ESTE
                </Button>
                <p className="text-xs text-center text-foreground/60">{ticket.note}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketCards;
