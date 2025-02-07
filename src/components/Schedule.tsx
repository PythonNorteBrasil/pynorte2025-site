"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import keynotes from "../data/keynotes.json";
import Link from "next/link";

const Schedule = () => {
  return (
    <section id="calendario" className="py-20 bg-theme-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-mono font-light text-theme-primary">
            Keynotes
          </h2>
          <Link href="/calendar">
            <Button variant="outline" className="gap-2">
              <Calendar className="h-4 w-4" />
              Ver Calendário Completo
            </Button>
          </Link>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {keynotes.keynotes.map((keynote) => (
              <CarouselItem key={keynote.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow m-2">
                  <div className="flex items-center mb-4">
                    <img
                      src={keynote.avatar}
                      alt={keynote.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-theme-primary">{keynote.name}</h3>
                      <p className="text-theme-warning">{keynote.time}</p>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-theme-secondary mb-2">
                    {keynote.title}
                  </h4>
                  <p className="text-theme-secondary/80">{keynote.description}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Schedule;