import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
];

const CategoryCarousel = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
          Browse by Category
        </h2>

        <Carousel className="w-full px-8 relative">
          <CarouselContent className="-ml-4">
            {category.map((cat, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-2 text-sm font-medium border-gray-200 hover:bg-sky-50 hover:border-sky-300 hover:text-sky-700 transition-colors whitespace-nowrap w-full"
                >
                  {cat}
                </Button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 -translate-x-6 z-10" />
          <CarouselNext className="right-0 translate-x-6 z-10" />
        </Carousel>
      </div>
    </div>
  );
};

export default CategoryCarousel;
