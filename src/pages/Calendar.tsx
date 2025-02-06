import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState("2025-07-04");

  const events = {
    "2025-07-04": [
      {
        time: "09:00",
        title: "Abertura do Evento",
        speaker: "Comitê Organizador",
        room: "Auditório Principal",
      },
      {
        time: "10:00",
        title: "Python na Amazônia: Casos de Uso",
        speaker: "Dra. Ana Silva",
        room: "Sala Açaí",
      },
      {
        time: "11:00",
        title: "Workshop: Django para Iniciantes",
        speaker: "Carlos Santos",
        room: "Laboratório Jambu",
      },
      {
        time: "13:30",
        title: "Machine Learning na Prática",
        speaker: "Maria Costa",
        room: "Sala Tacacá",
      },
      {
        time: "14:30",
        title: "Data Science e Sustentabilidade",
        speaker: "João Lima",
        room: "Sala Açaí",
      },
      {
        time: "15:30",
        title: "APIs REST com FastAPI",
        speaker: "Pedro Oliveira",
        room: "Laboratório Jambu",
      },
      {
        time: "16:30",
        title: "Python e IoT na Amazônia",
        speaker: "Julia Lima",
        room: "Sala Tacacá",
      },
      {
        time: "17:30",
        title: "Lightning Talks",
        speaker: "Comunidade",
        room: "Auditório Principal",
      },
    ],
    "2025-07-05": [
      {
        time: "09:00",
        title: "Keynote: Futuro do Python",
        speaker: "Dr. Roberto Martins",
        room: "Auditório Principal",
      },
      {
        time: "10:00",
        title: "Web Scraping Ético",
        speaker: "Carla Souza",
        room: "Sala Açaí",
      },
      {
        time: "11:00",
        title: "Workshop: FastAPI Avançado",
        speaker: "Lucas Mendes",
        room: "Laboratório Jambu",
      },
      {
        time: "13:30",
        title: "Python no Backend",
        speaker: "Amanda Silva",
        room: "Sala Tacacá",
      },
      {
        time: "14:30",
        title: "Testes Automatizados",
        speaker: "Rafael Costa",
        room: "Sala Açaí",
      },
      {
        time: "15:30",
        title: "Deploy com Docker",
        speaker: "Marcos Paulo",
        room: "Laboratório Jambu",
      },
      {
        time: "16:30",
        title: "Python e Dados Abertos",
        speaker: "Fernanda Lima",
        room: "Sala Tacacá",
      },
      {
        time: "17:30",
        title: "Lightning Talks",
        speaker: "Comunidade",
        room: "Auditório Principal",
      },
    ],
    "2025-07-06": [
      {
        time: "09:00",
        title: "Keynote: Python na Educação",
        speaker: "Profa. Beatriz Santos",
        room: "Auditório Principal",
      },
      {
        time: "10:00",
        title: "Desenvolvimento Sustentável",
        speaker: "Ricardo Oliveira",
        room: "Sala Açaí",
      },
      {
        time: "11:00",
        title: "Workshop: Data Analysis",
        speaker: "Patricia Costa",
        room: "Laboratório Jambu",
      },
      {
        time: "13:30",
        title: "Python e Bioinformática",
        speaker: "Dr. Thiago Silva",
        room: "Sala Tacacá",
      },
      {
        time: "14:30",
        title: "Segurança em Python",
        speaker: "Bruno Lima",
        room: "Sala Açaí",
      },
      {
        time: "15:30",
        title: "APIs Assíncronas",
        speaker: "Camila Souza",
        room: "Laboratório Jambu",
      },
      {
        time: "16:30",
        title: "Python na Nuvem",
        speaker: "Leonardo Santos",
        room: "Sala Tacacá",
      },
      {
        time: "17:30",
        title: "Encerramento",
        speaker: "Comitê Organizador",
        room: "Auditório Principal",
      },
    ],
  };

  const days = [
    { date: "2025-07-04", label: "Quinta-feira, 4 de julho" },
    { date: "2025-07-05", label: "Sexta-feira, 5 de julho" },
    { date: "2025-07-06", label: "Sábado, 6 de julho" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-mono font-light text-theme-primary text-center mb-12">
          Calendário do Evento
        </h1>

        <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
          {days.map((day) => (
            <button
              key={day.date}
              onClick={() => setSelectedDay(day.date)}
              className={cn(
                "px-6 py-3 rounded-full whitespace-nowrap",
                selectedDay === day.date
                  ? "bg-theme-warning text-white"
                  : "bg-theme-background text-theme-primary hover:bg-theme-warning/10"
              )}
            >
              {day.label}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {events[selectedDay].map((event, index) => (
            <div
              key={index}
              className="bg-theme-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-wrap gap-4 items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-theme-primary mb-2">
                    {event.title}
                  </h3>
                  <p className="text-jiboia mb-2">{event.speaker}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-jiboia">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {event.room}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Calendar;