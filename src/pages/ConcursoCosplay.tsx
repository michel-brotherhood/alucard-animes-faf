import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trophy, Users, Clock, Award } from "lucide-react";
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
  categoria: z.string().min(1, "Selecione uma categoria"),
  personagem: z.string().min(2, "Nome do personagem é obrigatório").max(100),
  origem: z.string().min(2, "Origem do personagem é obrigatória").max(200),
  descricao: z.string().max(1000, "Descrição muito longa").optional(),
  responsavel: z.string().max(100).optional(),
});

const ConcursoCosplay = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      idade: "",
      categoria: "",
      personagem: "",
      origem: "",
      descricao: "",
      responsavel: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Inscrição enviada!",
      description: "Você receberá um email de confirmação em breve.",
    });
    form.reset();
  };

  const categorias = [
    { value: "desfile-livre", label: "Desfile Livre (13+ anos)" },
    { value: "desfile-infantil", label: "Desfile Infantil Livre (até 12 anos)" },
    { value: "desfile-anime", label: "Desfile Anime" },
    { value: "desfile-geek", label: "Desfile Geek" },
    { value: "desfile-games", label: "Desfile Games" },
    { value: "apresentacao-individual", label: "Apresentação Tradicional Individual" },
    { value: "apresentacao-grupo", label: "Apresentação Tradicional em Grupo" },
    { value: "cospobre", label: "Cospobre" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-primary to-secondary">
      <Header />
      
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-accent text-center mb-6">
            CONCURSO COSPLAY
          </h1>
          <p className="text-xl text-white/90 text-center mb-12">
            Mostre seu talento e concorra a prêmios incríveis! 🏆
          </p>

          {/* Informações Principais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent/30">
              <CardContent className="pt-6 text-center">
                <Trophy className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Premiação</h3>
                <p className="text-white/80 text-sm">Medalhas + até R$ 100 em brindes</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent/30">
              <CardContent className="pt-6 text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Idade Mínima</h3>
                <p className="text-white/80 text-sm">A partir de 6 anos</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent/30">
              <CardContent className="pt-6 text-center">
                <Clock className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Inscrições até</h3>
                <p className="text-white/80 text-sm">15 de Agosto de 2026</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent/30">
              <CardContent className="pt-6 text-center">
                <Award className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Categorias</h3>
                <p className="text-white/80 text-sm">8 categorias disponíveis</p>
              </CardContent>
            </Card>
          </div>

          {/* Regras Principais */}
          <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent mb-12">
            <CardHeader>
              <CardTitle className="text-white text-2xl font-black">📋 Regras Principais</CardTitle>
            </CardHeader>
            <CardContent className="text-white/90 space-y-4">
              <div>
                <h4 className="font-bold text-accent mb-2">Quem pode participar:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Pessoas a partir de 6 anos de idade</li>
                  <li>Crianças de 6 a 12 anos devem estar acompanhadas do responsável</li>
                  <li>Adolescentes de 13 a 17 anos precisam de autorização legal</li>
                  <li>Cosplayers de quaisquer personagens fictícios de acesso público</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-accent mb-2">Não podem participar:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Organizadores, juízes, coordenadores e staff do concurso</li>
                  <li>Personagens de fanzines, fóruns, blogs ou cosplays originais</li>
                  <li>Cosplays considerados "genéricos" (Stormtroopers, classes de MMORPG)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-accent mb-2">Tempo de apresentação:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Categoria Desfile: máximo 30 segundos</li>
                  <li>Categoria Apresentação: máximo 3 minutos</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-accent mb-2">Premiação:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>1º Lugar: Medalha + R$ 100,00 em brindes</li>
                  <li>2º Lugar: Medalha + Ingresso para o próximo evento</li>
                  <li>3º Lugar: Medalha</li>
                  <li>Cospobre: Brindes (Votação Popular)</li>
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
                      name="categoria"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Categoria *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white/20 text-white border-white/30">
                                <SelectValue placeholder="Selecione a categoria" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {categorias.map((cat) => (
                                <SelectItem key={cat.value} value={cat.value}>
                                  {cat.label}
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
                      name="personagem"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Nome do Personagem *</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: Naruto Uzumaki" {...field} className="bg-white/20 text-white border-white/30" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="origem"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Origem do Personagem *</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: Naruto Shippuden" {...field} className="bg-white/20 text-white border-white/30" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="responsavel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Nome do Responsável (se menor de idade)</FormLabel>
                          <FormControl>
                            <Input placeholder="Nome do responsável" {...field} className="bg-white/20 text-white border-white/30" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="descricao"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Descrição da Apresentação (opcional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Descreva brevemente sua apresentação, cosplay e materiais utilizados"
                            className="bg-white/20 text-white border-white/30 min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="bg-accent/20 border-2 border-accent rounded-lg p-4">
                    <p className="text-white/90 text-sm">
                      Ao enviar este formulário, você declara estar de acordo com todas as regras do concurso 
                      e cede os direitos de imagem relacionados ao evento para fins promocionais.
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

export default ConcursoCosplay;
