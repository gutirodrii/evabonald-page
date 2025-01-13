import { Inter, Montserrat, Poppins, Noto_Sans, Bebas_Neue } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: "500" })
const noto_sans = Noto_Sans({ subsets: ['latin'], weight: "500" })
const bebas_neue = Bebas_Neue({ subsets: ['latin'], weight: "400"})

export const fonts = {
    inter,
    montserrat,
    poppins,
    noto_sans,
    bebas_neue,
}