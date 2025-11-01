import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import animeNikityLogo from "@/assets/anime-nikity-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={animeNikityLogo} alt="Anime Nikity" className="h-20 mb-4" />
            <p className="text-white/80">
              O maior evento de anime do Brasil. Uma experiência inesquecível para todos os fãs!
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/o-evento" className="text-white/80 hover:text-accent transition-colors">O Evento</Link></li>
              <li><Link to="/line-up" className="text-white/80 hover:text-accent transition-colors">Line-up</Link></li>
              <li><a href="/#ingressos" className="text-white/80 hover:text-accent transition-colors">Ingressos</a></li>
              <li><a href="/#faq" className="text-white/80 hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-accent hover:text-secondary transition-all">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-accent hover:text-secondary transition-all">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-accent hover:text-secondary transition-all">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-accent hover:text-secondary transition-all">
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60">
            © 2026 Anime Nikity. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
