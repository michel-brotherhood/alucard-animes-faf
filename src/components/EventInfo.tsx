import { Calendar, MapPin } from "lucide-react";

const EventInfo = () => {
  return (
    <section className="bg-primary py-6 px-4 md:px-6 text-center">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-white">
        <div className="flex items-center justify-center gap-2">
          <Calendar className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
          <span className="text-lg md:text-xl font-bold">10 e 11 de Janeiro de 2026</span>
        </div>
        <div className="hidden md:block w-px h-8 bg-white/30"></div>
        <div className="flex items-center justify-center gap-2">
          <MapPin className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
          <span className="text-lg md:text-xl font-bold">Clube Canto do Rio, Niterói</span>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
