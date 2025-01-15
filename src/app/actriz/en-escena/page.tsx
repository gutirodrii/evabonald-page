import Image from "next/image";

export default function EnEscena() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center m-4">En Escena</h1>
      <div className="grid grid-cols-3">
        <div className="group relative perspective-distant">
        {/* Parte delantera */}
        <div className="absolute backface-hidden shadow-md p-4 transform-3d group-hover:rotate-y-180">
          <Image
            src="/en-escena/lapeste.webp"
            alt="en escena"
            width={1000}
            height={0}
            quality={100}
            className="p-1"
          />
        </div>
        {/* Parte trasera */}
        <div className="absolute backface-hidden shadow-md p-4 transform transition-transform duration-500 rotate-y-180 group-hover:rotate-y-360">
            Hola
        </div>
        </div>
      </div>
    </div>
  );
}
