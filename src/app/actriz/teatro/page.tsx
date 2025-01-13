import Image from "next/image";
import data from "@/app/data/teatros.json";
export default function Teatro() {
  return (
    <main className="bg-slate-300">
      <div className="grid grid-cols-3 text-center">
        {data.map((item)=>(
            <div key={item.Titulo} className="flex flex-col items-center justify-center p-5">
                <Image src={item.Imagen} alt={item.Titulo} width={300} height={400} quality={100} className="rounded-lg shadow-lg"/>
                <p className="text-lg font-bold pt-2">{item.Titulo}</p>
                <p className="text-sm italic">({item.PersonajeQueInterpreta})</p>
            </div>
        ))}
      </div>
    </main>
  );
}