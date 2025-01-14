import Image from "next/image";
import photo01 from "/public/en-escena/image01.webp";
import photo02 from "/public/en-escena/image02.webp";
import photo03 from "/public/en-escena/image03.webp";
import photo04 from "/public/en-escena/image04.webp";
import photo05 from "/public/en-escena/image05.webp";
import photo06 from "/public/en-escena/image06.webp";
import photo07 from "/public/en-escena/image07.webp";
import photo08 from "/public/en-escena/image08.webp";
import photo09 from "/public/en-escena/image09.webp";
import photo10 from "/public/en-escena/image10.webp";
import "./en-escena.css"
// TODO:cambiar alt de las fotos

export default function EnEscena(){
    const photos = [
        photo01, photo02, photo03, photo04, photo05, photo06, photo07, photo08, photo09, photo10
    ]

    return(
        <div>
            <h2 className="text-center text-6xl pt-10 font-bold">EN ESCENA</h2>

            <section id="gallery">
                {
                    photos.map((photo, index) => (
                            <div id="photo-container" key={index}>
                                <Image quality={100} src={photo} alt="photo" />
                            </div>
                        )
                    )
                }
            </section>
        </div>
    )
}