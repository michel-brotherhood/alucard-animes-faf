import { Check } from "lucide-react";

const features = [
  "Viver experiências incríveis no maior evento de anime do Brasil",
  "Curtir o mega palco STAGE com atrações fantásticas",
  "Pulseira colecionável exclusiva para poder entrar e sair quando quiser",
  "Participar de shows, competições e muitas atividades no palco STREET",
  "Jogar muito na Arena Games, incluindo fliperama liberado",
  "Explorar a Artist Alley e interagir com artistas incríveis",
  "Ver seus dubladores e influencers preferidos de pertinho",
  "Andar por espaços temáticos incríveis e imersivos",
  "Utilizar o camarim cosplay e tudo o que o cosplay space oferece",
  "Tirar fotos incríveis em nosso estúdio fotográfico",
  "Conhecer dezenas de lojinhas sensacionais e fazer vááárias comprinhas",
  "Acessar o melhor food park geek da região",
];

const Features = () => {
  return (
    <section className="py-16 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-accent text-center mb-12">
          O QUE TODOS OS INGRESSOS INCLUEM?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="bg-accent rounded-full p-1 flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-secondary" />
              </div>
              <span className="text-white text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
