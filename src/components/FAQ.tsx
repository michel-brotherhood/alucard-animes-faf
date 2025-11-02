import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como acessar meus ingressos?",
    answer: "Após a compra, você receberá um e-mail com o link para acessar seus ingressos digitais. Você também pode acessá-los através da plataforma de compra.",
  },
  {
    question: "Qual o horário do evento?",
    answer: "O Friburgo Geek Natal acontece no domingo, 14 de dezembro de 2025, das 12h às 18h no Sindicato Dos Têxteis.",
  },
  {
    question: "Como funciona a meia-entrada?",
    answer: "Todos que levarem 1kg de alimento não perecível no dia do evento têm direito à meia-entrada. Crianças de 0 a 6 anos e idosos acima de 65 anos têm entrada gratuita.",
  },
  {
    question: "Quais competições estão confirmadas?",
    answer: "Campeonatos de Cosplay (8 categorias com R$ 1000 em brindes), K-POP Generations, Animekê (solo e dupla), FIFA 25, Mortal Kombat 1, Street Fighter 6 e Tekken 8. Inscrições no site do evento.",
  },
  {
    question: "O que está incluído no ingresso?",
    answer: "Acesso à arena gamer com mais de 10 videogames free play, Beat Saber VR, cine anime, board games, wood games, estandes de vendas, área de alimentação e todas as atividades e competições.",
  },
  {
    question: "Formas de pagamento",
    answer: "Aceitamos cartão de crédito (parcelado em até 12x), PIX. Também disponível ingresso ZapPix via WhatsApp (21) 97749-8015 sem taxas.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-secondary text-center mb-12">
          DÚVIDAS FREQUENTES
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-2 border-border rounded-xl px-6 bg-muted/30"
            >
              <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
