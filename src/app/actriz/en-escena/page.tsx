"use client";
import Image from "next/image";
import { useState } from "react";
import images from "./images.json";

export default function EnEscena() {
  const [isRotated, setIsRotated] = useState<string[]>([]);

  const handleClick = (key: string) => {
    setIsRotated((prevState) => {
      const copy = [...prevState];
      const index = prevState.findIndex((item) => item == key);
      if (index != -1){
        copy.splice(index, 1);
        return copy;
      }
      else return [...prevState, key];
    });
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center m-4">En Escena</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <div
            className="group relative h-[30svh] lg:h-[30svh] md:h-[22svh] sm:h-[20svh] hover:scale-110 hover:cursor-pointer hover:z-10"
            onClick={() => handleClick(image.src)}
            key={image.src}
          >
            <div
              className={`flex h-full transform-3d transition-all duration-500 ${
                isRotated.includes(image.src) && "rotate-y-180 blur-xs"
            }`}
            >
              <Image
                src={image.src}
                alt="en escena"
                quality={100}
                className="object-cover"
                fill={true}
              />
            </div>
            {/* Parte trasera */}
            <div
              className={`absolute flex h-[100%] w-[100%] justify-center items-center bg-white/50 -translate-y-[100%] backface-hidden transform-3d transition-all duration-500 rotate-y-180 ${
                isRotated.includes(image.src) && "rotate-y-360"
              }`}
            >
              <p>{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
