import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Gamepad2, Trophy, Clock, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  nome: z.string().min(3, "Nome deve ter no mínimo 3 caracteres").max(100),
  email: z.string().email("Email inválido").max(255),
  telefone: z.string().min(10, "Telefone inválido").max(20),
  idade: z.string().min(1, "Idade é obrigatória"),
  jogo: z.string().min(1, "Selecione um jogo"),
  tipoIngresso: z.string().min(1, "Selecione o tipo de ingresso"),
  nickname: z.string().min(2, "Nickname é obrigatório").max(50),
});

const ConcursoVideogames = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      idade: "",
      jogo: "",
      tipoIngresso: "",
      nickname: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Inscrição enviada!",
      description: "Você receberá um email de confirmação com mais detalhes.",
    });
    form.reset();
  };

  const jogos = [
    { value: "fifa25", label: "FIFA 25 (PS5)", plataforma: "PS5" },
    { value: "naruto", label: "NARUTO SHIPPUDEN Ultimate Ninja STORM 4 (PS4)", plataforma: "PS4" },
    { value: "tekken8", label: "Tekken 8 (PS5)", plataforma: "PS5" },
    { value: "sf6", label: "Street Fighter 6 (PS4 Pro)", plataforma: "PS4 Pro" },
    { value: "mk1", label: "Mortal Kombat 01 (PS5)", plataforma: "PS5" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-primary to-secondary">
      <Header />
      
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-accent text-center mb-6">
            CAMPEONATOS DE VÍDEO GAMES
          </h1>
          <p className="text-xl text-white/90 text-center mb-12">
            Mostre suas habilidades e domine a competição! 🎮
          </p>

          {/* Informações Principais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent/30">
              <CardContent className="pt-6 text-center">
                <Trophy className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Premiação</h3>
                <p className="text-white/80 text-sm">R$ 100,00 (Gamer Pass)</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent/30">
              <CardContent className="pt-6 text-center">
                <Clock className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Horário</h3>
                <p className="text-white/80 text-sm">13:00 às 18:00</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent/30">
              <CardContent className="pt-6 text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Participantes</h3>
                <p className="text-white/80 text-sm">8 a 16 por jogo</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent/30">
              <CardContent className="pt-6 text-center">
                <Gamepad2 className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Formato</h3>
                <p className="text-white/80 text-sm">Mata-Mata</p>
              </CardContent>
            </Card>
          </div>

          {/* Jogos Disponíveis */}
          <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent mb-12">
            <CardHeader>
              <CardTitle className="text-white text-2xl font-black">🎮 Jogos Disponíveis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {jogos.map((jogo) => (
                  <div key={jogo.value} className="bg-primary/50 rounded-lg p-4 border border-accent/30">
                    <h4 className="text-white font-bold mb-1">{jogo.label}</h4>
                    <p className="text-white/70 text-sm">Plataforma: {jogo.plataforma}</p>
                    <p className="text-accent text-sm font-bold mt-2">
                      Premiação: R$ 100,00 (Passaporte Nikity Gamer)
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Regras Principais */}
          <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent mb-12">
            <CardHeader>
              <CardTitle className="text-white text-2xl font-black">📋 Regras e Informações</CardTitle>
            </CardHeader>
            <CardContent className="text-white/90 space-y-4">
              <div>
                <h4 className="font-bold text-accent mb-2">Formato dos Campeonatos:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Todos os campeonatos são disputados no formato <strong>Mata-Mata</strong></li>
                  <li>Mínimo de 8 e máximo de 16 participantes por jogo</li>
                  <li>Horário: das 13:00 às 18:00</li>
                </ul>
              </div>

              <div className="bg-accent/20 border-2 border-accent rounded-lg p-4">
                <h4 className="font-bold text-accent mb-2">⚠️ IMPORTANTE - Premiação:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>A premiação de <strong>R$ 100,00 em dinheiro</strong> é <strong>EXCLUSIVA</strong> para participantes com o ingresso <strong>"Passaporte Nikity Gamer"</strong></li>
                  <li>Campeonatos com ingresso comum <strong>NÃO possuem premiações</strong></li>
                  <li>Verifique seu tipo de ingresso antes de se inscrever</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-accent mb-2">Observações:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>As inscrições são por ordem de chegada</li>
                  <li>É necessário apresentar documento com foto no dia do evento</li>
                  <li>Os campeonatos seguem as regras oficiais de cada jogo</li>
                  <li>A organização se reserva o direito de realizar ajustes no cronograma</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Formulário de Inscrição */}
          <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent">
            <CardHeader>
              <CardTitle className="text-white text-3xl font-black text-center">
                FORMULÁRIO DE INSCRIÇÃO
              </CardTitle>
              <p className="text-white/80 text-center">Preencha os dados abaixo para se inscrever</p>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="nome"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Nome Completo *</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome completo" {...field} className="bg-white/20 text-white border-white/30" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="nickname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Nickname/Gamertag *</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nickname de jogo" {...field} className="bg-white/20 text-white border-white/30" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="seu@email.com" {...field} className="bg-white/20 text-white border-white/30" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="telefone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Telefone *</FormLabel>
                          <FormControl>
                            <Input placeholder="(00) 00000-0000" {...field} className="bg-white/20 text-white border-white/30" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="idade"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Idade *</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="Sua idade" {...field} className="bg-white/20 text-white border-white/30" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="jogo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Jogo *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white/20 text-white border-white/30">
                                <SelectValue placeholder="Selecione o jogo" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {jogos.map((jogo) => (
                                <SelectItem key={jogo.value} value={jogo.value}>
                                  {jogo.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="tipoIngresso"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Tipo de Ingresso *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white/20 text-white border-white/30">
                                <SelectValue placeholder="Selecione seu ingresso" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="gamer-pass">Passaporte Nikity Gamer (com premiação)</SelectItem>
                              <SelectItem value="comum">Ingresso Comum (sem premiação)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="bg-accent/20 border-2 border-accent rounded-lg p-4">
                    <p className="text-white/90 text-sm font-bold mb-2">💰 Informação sobre Premiação:</p>
                    <p className="text-white/80 text-sm">
                      Apenas participantes com <strong>Passaporte Nikity Gamer</strong> concorrem à premiação em dinheiro de R$ 100,00. 
                      Participantes com ingresso comum podem jogar, mas não concorrem à premiação.
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-accent text-primary hover:bg-accent/90 font-bold text-lg py-6 rounded-full"
                  >
                    ENVIAR INSCRIÇÃO
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default ConcursoVideogames;
