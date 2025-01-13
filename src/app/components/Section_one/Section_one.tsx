import Image from "next/image";
import React from "react";
import fondoteatro from "public/fondoteatro.jpeg";
import { fonts } from "@/app/fonts";

const Section_one = () => {
  return (
    <section className="flex flex-col h-96 w-full">
      <div className="w-full bg-black opacity-20">
        <Image
          src={fondoteatro}
          alt=""
          quality={100}
          className="absolute w-full h-96 object-cover object-center -z-10"
        />
      </div>
        <h1
          className={
            fonts.bebas_neue.className +
            " flex w-full h-full justify-center items-center text-8xl z-10"
          }
        >
          EVA BONALD
        </h1>
    </section>
  );
};

export default Section_one;
