import { Metadata } from "next"
import AboutUs from "components/AboutUs"
import HeroSection from "components/HeroSection"
import HowToBuy from "components/HowToBuy" 
import MemeSection from "components/MemeSection"
import Roadmap from "components/Roadmap"
import Tokenomics from "components/Tokenomics"


export const metadata: Metadata = {
  title: "Merted Meme Token",
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <MemeSection />
      <HowToBuy />
      <Tokenomics />
      <Roadmap />
    </>
  )
}
