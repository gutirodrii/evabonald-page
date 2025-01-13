import Image from "next/image";
import Header from "./components/Header";
import Section_one from "./components/Section_one/Section_one";
import Section_two from "./components/Section_two/Section_two";
import Section_three from "./components/Section_three/Section_three";

export default function Home() {
  return (
    <>
      <Header/> 
      <main className="flex min-h-screen flex-col">
        <Section_one/>
        <Section_two/>
        <Section_three/>
      </main>
    </>
  );
}
//TODO: Paginas por apartado
//TODO: Disclosure component
//TODO: Contact section
