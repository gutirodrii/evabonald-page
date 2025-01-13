import Image from "next/image";
import React from "react";
import fondoteatro from "public/fondoteatro.jpeg";
import Carrousel from "../Carrousel/Carrousel";
const Section_one = () => {
  return (
    <section className="flex flex-row bg-gray-300 p-10 h-max justify-evenly items-center">
      <Carrousel/>
      
    </section>
  );
};

export default Section_one;
