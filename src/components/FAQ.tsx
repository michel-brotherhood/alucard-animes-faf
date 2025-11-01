import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como acessar meus ingressos?",
    answer: "Após a compra, você receberá um e-mail com o link para acessar seus ingressos digitais. Você também pode acessá-los através da área 'Meus Ingressos' no site.",
  },
  {
    question: "Quais artistas e convidados já estão confirmados?",
    answer: "Confira a lista completa de artistas e convidados confirmados na seção Line-up do nosso site. A lista é atualizada regularmente!",
  },
  {
    question: "Quais os benefícios de ser VIP?",
    answer: "O ingresso VIP Full inclui acesso a áreas exclusivas, meet & greet com convidados, brindes especiais, fila preferencial e muito mais!",
  },
  {
    question: "Como funciona o Meet & Greet?",
    answer: "Os Meet & Greets são sessões exclusivas onde você pode conhecer seus artistas e dubladores favoritos. Alguns são inclusos no VIP, outros vendidos separadamente.",
  },
  {
    question: "Quem tem direito a meia entrada?",
    answer: "Estudantes, idosos, pessoas com deficiência e doadores de sangue têm direito à meia-entrada mediante apresentação de documento comprobatório.",
  },
  {
    question: "Formas de pagamento",
    answer: "Aceitamos cartão de crédito (parcelado em até 12x), PIX e boleto bancário. O pagamento é processado de forma segura através da plataforma Mundo Dream.",
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
