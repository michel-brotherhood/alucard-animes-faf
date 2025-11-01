import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import FAQ from "@/components/FAQ";
import { AlertCircle, Shield, Info, MessageSquare } from "lucide-react";

const Ajuda = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-accent py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              CENTRAL DE AJUDA
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Tire suas dúvidas e conheça as regras do evento
            </p>
          </div>
        </section>

        {/* Informações Principais */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Info className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-5xl font-black text-secondary">
                INFORMAÇÕES PRINCIPAIS
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <h3 className="font-bold text-xl text-foreground mb-3">📍 Localização</h3>
                <p className="text-foreground/80 mb-4">
                  Confira o mapa do evento na seção "Mapa do Evento" para conhecer todas as áreas e estandes.
                </p>
                <a 
                  href="/#localizacao" 
                  className="inline-block text-primary hover:text-primary/80 font-semibold underline transition-colors"
                >
                  Ver Mapa →
                </a>
              </div>

              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <h3 className="font-bold text-xl text-foreground mb-3">🎫 Ingressos</h3>
                <p className="text-foreground/80">
                  Apresente seu QR Code na entrada. Mantenha-o sempre à mão durante o evento.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <h3 className="font-bold text-xl text-foreground mb-3">⏰ Horários</h3>
                <p className="text-foreground/80">
                  O evento funciona das 10h às 22h. Confira o cronograma completo de atividades.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <h3 className="font-bold text-xl text-foreground mb-3">🎭 Cosplay</h3>
                <p className="text-foreground/80">
                  Cosplays são bem-vindos! Consulte as regras sobre réplicas de armas permitidas.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <h3 className="font-bold text-xl text-foreground mb-3">📸 Fotos e Vídeos</h3>
                <p className="text-foreground/80">
                  Permitido fazer fotos e vídeos. Respeite a privacidade dos outros participantes.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <h3 className="font-bold text-xl text-foreground mb-3">🍔 Alimentação</h3>
                <p className="text-foreground/80">
                  Praça de alimentação completa no local. Alimentos lacrados são permitidos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Regras Gerais */}
        <section className="py-16 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-5xl font-black text-secondary">
                REGRAS GERAIS
              </h2>
            </div>

            <div className="bg-card border-2 border-border rounded-xl p-8 shadow-lg space-y-6">
              <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                <p className="text-foreground/90 leading-relaxed">
                  Para o conforto e melhor aproveitamento do evento por parte de todos os visitantes, lembre-se de algumas normas básicas. É fundamental que elas sejam respeitadas. Em qualquer caso, prevalece o bom-senso.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">Segurança</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      O evento conta com seguranças uniformizados e à paisana dispostos para qualquer eventualidade.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">Entrada do Evento</h3>
                    <ul className="text-foreground/80 leading-relaxed space-y-2">
                      <li>• Crianças menores de 12 anos somente poderão entrar acompanhadas dos pais ou com autorização por escrito.</li>
                      <li>• Todos deverão portar um documento de identificação com foto.</li>
                      <li>• Não será permitida a entrada de pessoas visivelmente alcoolizadas.</li>
                      <li>• Não será permitida a entrada de armas de fogo ou brancas ou qualquer material que possa representar perigo para o público.</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">Permanência</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Não será permitida a saída do visitante antes das 16 horas. Caso o visitante saia do evento e queira retornar, será necessário a compra de um novo ingresso.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">Alimentos e Bebidas</h3>
                    <ul className="text-foreground/80 leading-relaxed space-y-2">
                      <li>• Não será permitida a entrada de bebidas alcoólicas ou drogas no evento.</li>
                      <li>• Garrafas de água mineral, refrigerantes/sucos somente em embalagens lacradas e originais.</li>
                      <li>• Biscoitos, bolachas e frutas são permitidas, desde que lacradas em suas embalagens originais e para consumo individual.</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">Conduta Durante o Evento</h3>
                    <ul className="text-foreground/80 leading-relaxed space-y-2">
                      <li>• Não agrida fisicamente nem moralmente outras pessoas, nem por meio de placas.</li>
                      <li>• Por mais que esteja entusiasmado, evite gritar e baderna.</li>
                      <li>• É proibido o consumo de bebida alcoólica.</li>
                      <li>• Não jogue lixo no chão, o local dispõe de várias lixeiras.</li>
                      <li>• É proibida a entrada de animais.</li>
                      <li>• Não cole cartazes nas paredes, não distribua panfletos, nem venda qualquer produto sem autorização.</li>
                      <li>• Não utilize aparelhos sonoros que assustem as pessoas.</li>
                      <li>• Não é permitido fumar dentro do evento.</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">Réplicas de Armas</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      É proibida a entrada de réplicas de armas de metais e vidro. Haverá exceção apenas para réplicas de armas de madeira, papel e plástico.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">Nas Apresentações</h3>
                    <ul className="text-foreground/80 leading-relaxed space-y-2">
                      <li>• Evite vaiar ou denegrir as pessoas presentes no palco.</li>
                      <li>• Não fique próximo à área de equipamentos do palco.</li>
                      <li>• Placas ou faixas não devem atrapalhar as pessoas que estão atrás de você.</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">Para Cosplayers no Palco</h3>
                    <ul className="text-foreground/80 leading-relaxed space-y-2">
                      <li>• Use sua criatividade apenas dentro do palco.</li>
                      <li>• Não jogue objetos na plateia.</li>
                      <li>• Não manipule objetos perigosos, explosivos ou que possam danificar equipamentos.</li>
                      <li>• Lembre-se que crianças também assistem suas apresentações - não faça gestos obscenos.</li>
                      <li>• Não ofenda ninguém, nem nenhuma organização.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded mt-6">
                <p className="text-foreground font-semibold leading-relaxed">
                  ⚠️ Se todos cumprirem com as regras acima teremos um ótimo evento. Para aqueles que desrespeitarem as normas, serão convidados a se retirar do evento sem a devolução do valor do ingresso.
                </p>
              </div>

              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded mt-6 text-center">
                <p className="text-foreground font-semibold mb-4">
                  💬 Ainda tem dúvidas? Fale com a gente!
                </p>
                <a 
                  href="https://api.whatsapp.com/send/?phone=5521977498015&text=Contato+ANIME+NIKITY&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />
      </main>

      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default Ajuda;
